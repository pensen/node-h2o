/**
 * Created by senthil on 2/20/2017.
 */
var bodyParser = require('body-parser')
    , cors = require('cors')
    , morgan = require('morgan')
    , logger = require("../../config/logger")
    , session = require('express-session')
    , device = require('express-device');

exports.init = function(app) {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(cors());
    app.use(morgan('combined', {"stream": logger.stream}));
    app.use(require('../api'));
    app.use(device.capture());
    device.enableViewRouting(app, {
    "noPartials":true
    });

    app.use(session({
        secret: 'secrectkey',
        name: 'app',
        proxy: true,
        resave: true,
        saveUninitialized: true
    }));
    app.use(function (err, req, res, next) {
        res.status(500).send({"Error": err.stack});
    });
}