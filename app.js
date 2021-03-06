/**
 * Created by senthil on 06/03/17.
 */
var env = process.env.NODE_ENV || "development";
global.config = require('./config/config.json')[env];

var express = require('express')
    , app = express()
    , http = require('http')
    , configuration = require('./src/common/configure')
    , port = process.env.PORT || global.config.server.port;

configuration.init(app);

http.createServer(app).listen(port, function () {
    console.log('Nexrise server listening on port ', port);
});