//load libs
const fortuneCookie = require('fortune-cookie');
const morgan = require('morgan');
const express = require('express');
const cors = require('cors')


const cookies = () => {
    const idx = Math.floor(Math.random() * fortuneCookie.length)
    return fortuneCookie[idx]
}

//configuration
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000;

//create instance of express
const app = express()

//use morgan to log all requests. use combined format
app.use(morgan('combined'))
//use cors to enable cross origin calls for all calls
//app.use(cors())


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

//serve frontend angular folder 
app.use(express.static(__dirname + '/frontend'))


//start server
app.listen(PORT, () => {
    console.info(`Application started on port ${PORT} at ${new Date()}`)
})
