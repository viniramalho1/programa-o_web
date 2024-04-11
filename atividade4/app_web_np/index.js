mat = require("./util/math.js")

const express = require("express")

const app = express()

const PORT = 8080

app.get('/', function(req, resp){
    resp.send("hello word")
})

app.get('/somar/:a/:b', function(req, resp){
    a = Number(req.params.a)
    b = Number(req.params.b)
    c = a + b
    resp.send(String(c))
})

app.get('/subtratir/:a/:b', function(req, resp){
    a = Number(req.params.a)
    b = Number(req.params.b)
    c = a - b
    resp.send(String(c))
})

app.get('/multiplicar/:a/:b', function(req, resp){
    a = Number(req.params.a)
    b = Number(req.params.b)
    c = a * b
    resp.send(String(c))
})

app.get('/dividir/:a/:b', function(req, resp){
    a = Number(req.params.a)
    b = Number(req.params.b)
    c = a / b
    resp.send(String(c))
})


app.listen(PORT)