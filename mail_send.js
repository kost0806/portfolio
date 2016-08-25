var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var CORS = require('cors')();
var Entities = require('html-entities').XmlEntities;
var entities = new Entities();
var winston = require('winston');

var allowCORS = function(req, res, next) {
  res.header('Acess-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  (req.method === 'OPTIONS') ?
    res.send(200) :
    next();
};

winston.add(winston.transports.File, {
	level: 'debug',
	json: false,
	filename: '/var/nodejs/workspace/portfolio_mail/log/send_mail.log',
})

app.use(CORS);
app.use(bodyParser.urlencoded({extended: true}));

app.post('/send_mail', function (req, res) {
	
	var post_data = req.body;

	var smtpTransport = nodemailer.createTransport({
		host: 'email-smtp.us-east-1.amazonaws.com',
		port: 465,
		secure: true,
		requireTLS: true,
		auth: {
			user: 'AKIAJ7EQNGLWSS5YOD7Q',
			pass: 'AnJ9+36R6b12qIyZl8deupGejQXaKxblerQadOc/hUWG'
		}
	});

	var text = post_data['name'] + '[' + post_data['email'] + ']<br>' +
		'------------------------------------------<br>' +
		entities.encode(post_data['contents']);

	var mailObtion = {
		from: 'kimmin0806@gmail.com',
		to: 'kimmin0806@gmail.com',
		subject: '[포트폴리오 컨택 메일 - ' + post_data['name'] + ']' + post_data['subject'],
		html: text,
	};

	smtpTransport.sendMail(mailObtion, function (error, response) {
		winston.info('mail send request: \n', mailObtion);
		if (error) {
			winston.info("Mail send failed: " + error);
			res.writeHead(404);
			res.end('failed');
		}
		else {
			winston.info("Mail sent: " + response.message);
			res.writeHead(200);
			res.end('done');
		}
		smtpTransport.close();
	});
})

app.use(function (req, res) {
	res.writeHead(404, {'Content-Type': 'text/plain'});
	res.end('404 Not Found');
})

http.createServer(app).listen(8038);