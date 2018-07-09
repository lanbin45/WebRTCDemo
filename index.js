var express = require('express');
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('./sslConfig/private.pem', 'utf8');
var certificate = fs.readFileSync('./sslConfig/file.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};
var app = express();

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
var PORT = 18080;
var SSLPORT = 18081;

httpServer.listen(PORT, function() {
    console.log('HTTP Server is running on: http://localhost:%s', PORT);
});
httpsServer.listen(SSLPORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});

/**
 * express 设置跨域
 */
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use(express.static('public'));