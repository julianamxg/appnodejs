const express = require('express')
const server = express()

server.get('/', (req, res)=>{
    res.send("Pagina principal")
})

server.get('/Clientes', (req, res)=>{
    res.send("Pagina clientes")
})

server.listen(3002, ()=>{
    console.log('Servidor 3002')
})
