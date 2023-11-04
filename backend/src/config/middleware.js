var express = require('express');
var cors = require('cors');
var timeout = require('connect-timeout');

var generateMiddleware = function () {
    var routes = express.Router();
    var whitelist = [process.env.url];
    var corsOptions = {
        origin: function (origin, callback) {
            if (whitelist.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                console.log("Erro do CORS a origin foi: " + origin);
                callback(new Error('Not allowed by CORS'));
            }
        }
    };

    routes.use('/', cors(corsOptions));

    routes.use(express.json({ limit: '20mb' }));
    routes.use(timeout(120 * 1000));
    return routes;
};

module.exports = generateMiddleware;
