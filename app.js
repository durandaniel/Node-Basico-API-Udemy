const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config.js')

//string de conexão 
        const url = config.bd_string //copiada do se4rvidor atlass
        const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true}; 

        mongoose.connect(url, options);
        mongoose.set('useCreateIndex', true);

        mongoose.connection.on('error', (err) => {
            console.log(`Erro na conexão com o banco de dados: ${err}`);
        })
        mongoose.connection.on('disconnected', () => {
            console.log('Aplicação desconectada do banco de dados!');
        })

        mongoose.connection.on('connected', () => {
            console.log('Aplicação conectada ao banco de dados!');
        })


//BODY PARSER
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());


const indexRoute = require('./Routes/index');
const usersRoute = require('./Routes/users');

app.use('/', indexRoute)
app.use('/users', usersRoute)

/*  app.get('/', (req, res) => {    return res.send({message: 'Tudo ok com o método GET!'});}) 
app.post('/', (req, res) => {    return res.send({message: 'Tudo ok com o método POST!'})})   */























app.listen(3000, () => console.log("Servidor rodando na porta 3000!"));

module.exports = app;