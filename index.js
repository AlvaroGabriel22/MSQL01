const express = require('express') // salvar a varialvel express na const
const app = express() // serve para executar o express no projeto
const path = require('path')


app.get('/ws/69088147/json/', (req, res) => {
    res.json({

        "cep": "69088-147",
        "logradouro": "Rua Cipó Alho",
        "complemento": "",
        "bairro": "Jorge Teixeira",
        "localidade": "Manaus",
        "uf": "AM",
        "ibge": "1302603",
        "gia": "",
        "ddd": "92",
        "siafi": "0255"
            
})
})

app.get('/cep', (req, res) => {
    res.sendFile(path.resolve('index.html'))
})


app.get ('/perguntasfrequentes', (req, res) => {
res.sendFile(path.resolve('sobre.html'))
})// cria rotas

app.listen(3000, () => { 

console.log('Servidor iniciado com sucesso')

}) 