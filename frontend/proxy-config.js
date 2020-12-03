module.exports = [
    {
        context: ['/api'],  //set the url calls that u want to proxy to (you dun want a giphy call to go to server)
        target: 'http://localhost:3000',
        secure: false,
        logLevel: 'debug'
    },
    /* { can set up multiple objects to do proxy
        context: ['/api/v2'],  
        target: 'http://anotherserver:3000',
        secure: false,
        logLevel: 'debug'
    } */
]


/* launch angular using the following Command
ng serve --proxy-config proxy-config.js

successful launch looks like this:
- Generating browser application bundles...[HPM] Proxy created: [ '/api' ]  ->  http://localhost:3000
[HPM] Subscribed to http-proxy events:  [ 'error', 'close' ]

u will see successful calls like this:
[HPM] GET /api/cookie?count=4 -> http://localhost:3000 */