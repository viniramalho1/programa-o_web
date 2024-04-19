mat = require("./util/math.js")

const express = require("express")

const path = require("path")

const app = express()

const PORT = 8080

app.get('/', function(req, resp){
    resp.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>

            <style>
                h1 {
                    color: red;
                }
            </style>
        </head>
        <body>
            <h1>AdASDa</h1>
        </body>
        </html>
        `)
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