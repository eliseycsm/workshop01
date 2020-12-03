//module
const fortuneCookie = require('fortune-cookie');
const morgan = require('morgan');
const express = require('express');
const cors = require('cors')

//no port required and no listen to start server req'd

const cookies = () => {
    const idx = Math.floor(Math.random() * fortuneCookie.length)
    return fortuneCookie[idx]
}



module.exports = (req, resp) =>{

    //must create instance of express within the module
    const app = express()

    //use morgan to log all requests. use combined format
    app.use(morgan('combined'))

    //no file system; dun serve static dir

    //rss
// GET /api/cookie -> appn/json {cookie: 'cookie-text'}
//GET /api/cookie?count=4 -> appn/json [{cookie: 'cookie-text}, ... ]

    app.get("/api/cookie", cors(), (req, resp) => {  //add cors() here to enable for a single call
    const count = parseInt(req.query['count']) || 1
    
    resp.status(200)
    resp.type('application/json')

    if (count == 1){
        resp.json({cookie: cookies()})
    } else {
        const c = []
        for (let i = 0; i < count; i++){
            c.push({cookie: cookies()})
        }
        resp.json(c)
    }
    
})
    app.use((req, resp) => {
        resp.redirect('')  //or handle errors there
    })

    //no listen, pass req and resp to express insteadver
    app(req, resp)
    //if u want to handle errors, use app(req,resp, (req, resp)=>{})

}