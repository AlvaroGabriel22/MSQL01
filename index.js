const express = require('express') // salvar a varialvel express na const
const app = express() // serve para executar o express no projeto


const routes = require('./routes')
app.use('/', routes)

app.listen(3000, () => { 

console.log('Servidor iniciado com sucesso')

}) 

