const shortid = require('shortid')
const URL = require('../models/url')
async function handleNewShortUrl(req , res){
    const body = req.body
    if(!body.url) return res.status(400).json({error : 'Url is required'}) // if no url present
    const generatedId = shortid();
    await URL.create({
        TotalClick:0,
        shortId: generatedId,
        redirectUrl : body.url,
        VisitHistory : [],

    });

    return res.json({ id : generatedId})
}

async function GetAnalytics(req, res) {
    const shortId = req.params.shortId;

    const result = await URL.findOne({ shortId });

    return res.json({
        TotalClick: result.VisitHistory.length,
        analytics: result.VisitHistory,
    });
}


module.exports = {
    handleNewShortUrl,
    GetAnalytics,
}