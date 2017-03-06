/**
 * Created by senthil on 06/03/17.
 */
var express = require('express')
    , router = express.Router()
    , ping = require('./ping/ping');

var apiVersionOne = '/rest/api/v1/app/';

router.use(apiVersionOne + 'ping', ping);

module.exports = router;

