const express = require('express');
const app = express();
const urlRoute = require('./routes/url');
const { MongoDbConnect } = require('./database_connect');
const URL = require('./models/url');
const port = 8001;

app.use(express.json());
app.use('/url', urlRoute);  // only once

MongoDbConnect('mongodb://127.0.0.1:27017/short-url').then(() => {
    console.log('Connection to MongoDB established');
});

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                VisitHistory: {
                    timeStamp: Date.now()
                }
            },
            $inc: {
            TotalClick: 1
            }
        }
    );

    if (!entry) {
        return res.status(404).send("Short URL not found");
    }

    res.redirect(entry.redirectUrl);; 
});

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});
