mat = require("./util/math.js")

const express = require("express")

const app = express()

const PORT = 8080

app.get('/', function(req, resp){
    resp.send()
})

app.get('/somar/:a/:b', function(req, resp){
    a = req.params.a
    b = req.params.b
    c = a + b
    resp.send(c)
})

app.get('/subtratir/:a/:b', function(req, resp){
    a = req.params.a
    b = req.params.b
    c = parseInt(a) - parseInt(b)
    resp.send(c)
})

app.get('/multiplicar/:a/:b', function(req, resp){
    a = req.params.a
    b = req.params.b
    c = a * b
    resp.send(c)
})

app.get('/dividir/:a/:b', function(req, resp){
    a = req.params.a
    b = req.params.b
    c = a / b
    resp.send(c)
})


app.listen(PORT)