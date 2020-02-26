
var express 		= require('express');
var bodyParser 		= require('body-parser');
var ejs 			= require('ejs');
var cookieParser 	= require('cookie-parser');
var login 			= require('./controllers/login');
var logout 			= require('./controllers/logout');
var admin = require('./controllers/admin');
var employee = require('./controllers/employee');
var app = express();

app.set('view engine', 'ejs');


//middleware
//app.use('/abc', express.static('xyz'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/login', login);
app.use('/logout', logout);
app.use('/admmin', admin);
app.use('/employee', employee);


//routes
app.get('/', function(req, res){
	res.render('login');
});



//server startup
app.listen(3000, function(){
	console.log('server started at 3000!');
});