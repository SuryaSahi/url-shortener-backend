## **URL Shortener Backend Project**

A Simple URL Shortner API **Backend Project** which use technology like **Node Js , Express , MongoDB and Postman** for API testing.
It also supports **Click Tracking** analytics

## Features
-  Shorten long URLs using a unique short code
-  Redirect to the original URL via short code
-  Track each click (timestamp and total count)

## Working
1. User submits a long URL (via POST request)
2. Server generates a short ID using `shortid`
3. Data is stored in MongoDB:
   - shortId
   - redirectUrl
   - VisitHistory (array of timestamps)
   - TotalClick (number)
   - createdAt and updatedAt
   - expiresAt (optional)
4. User accesses `/:shortId` to get redirected
5. Visit is logged and analytics are updated

##  Validation & Error Handling

- ✅ Checks if the URL is provided
- ❌ Invalid or missing URLs return 400 Bad Request
- ❌ Visiting unknown short links returns 404 or 410

  
