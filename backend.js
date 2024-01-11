var http = require('http');
var url = require('url')
var obj_toReturn = {
    "trackingNumber": "CP123456789KH",
    "events": [
        {
            "status" : "Delivered",
            "datetime" : "2023-12-31T01:00:00Z",
        },
        {
            "status" : "In transit",
            "datetime" : "2023-12-25T09:00:00Z",
        },
        {
            "status" : "Out for delivery",
            "datetime" : "2023-12-20T04:00:00Z",
        }
    ]
}

const server = http.createServer((req, res) => {
    var q = url.parse(req.url, true)
    var pagePath = q.pathname
    console.log(q.pathname)
    console.log(JSON.stringify(obj_toReturn))

    if (pagePath == "/tracking"){
        res.end(JSON.stringify(obj_toReturn))
    }else{
        res.end('nothing for this path')
    }

})

server.listen('8080')