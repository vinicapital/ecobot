const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const SMTP_CONFIG = require("./config/smtp");
const Sequelize = require('sequelize');


// conexão Banco de dados

const sequelize = new Sequelize('nomeBd', 'root', ' ', {
	host:"localhost",
	dialect:'mysql'
});

//Body parser captura de dados para formulario

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// public arquivos estaticos css e js

app.use(express.static(path.join(__dirname,"public")));

//template engine

app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// envio de dados do formulario para email

const transporte = nodemailer.createTransport({
host: SMTP_CONFIG.host,
port: SMTP_CONFIG.port,
secure: false,
auth: {
user: SMTP_CONFIG.user,
pass: SMTP_CONFIG.pass,
},
tls: {
	rejectUnauthorized: false,
},
});



// Rotas de destino 


app.get('/' , function(req, res){
	res.render('index');
});

app.post("/send", function(req, res) {

async function run(){

const sendMail = await transporte.sendMail( {
from: req.body.email, // Quem está enviando formulario
to: 'vinicius0409@gmail.com', // email que recebe mensagem
subject: 'EcoBot' , // Assunto
html: '<br> Nome: '+req.body.nome+'<br> Email: '+req.body.email+'<br> Mensagem : '+req.body.mensagem // texto html

});

res.send('Mensagem enviada com sucesso!');

}

run().catch(function(erro){

	res.send('Houve um erro :');

});


});








//ouvir
app.listen(8081, function(){console.log("Servidor rodando na url http://localhost:8081")});