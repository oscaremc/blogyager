const express = require('express')
const path = require('path')

const app = express();ç

app.use(express.static(__dirname + '/dist/ng-glob'));

app.get('/', function(req, res){
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname + '/dist/ng-blog/index.html'))
    })
})

app.listen(process.env.PORT ||  8080);