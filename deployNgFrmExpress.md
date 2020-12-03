#2 ways to deploy angular
- from firebase/vercel/github pages
    - if it calls back to express u need to add cors cos cross origin
- ng build --prod and serve the js/html via express (express.static)
    -dist (distribution dir) in frontend
    -copy paste the dist/frontend folder over
    -go back to express and serve it 
        -app.use(express.static(__dirname + '/frontend'))
** do not check frontend folder into express' git as it is an artefact