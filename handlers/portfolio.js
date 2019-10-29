'use strict';
var dataProvider = require('../data/portfolio.js');
/**
 * Operations on /portfolio
 */
module.exports = {
    /**
     * summary: Retrieves the user&#39;s current stock portfolio
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     */
    get: function portfolio_get (req, res, next) {
        let status = 200;
        let message;
        let provider = dataProvider['get']['200'];
        let data = provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
        });
        res.json(data);
        return res.status(status).send(message);
    }
};
