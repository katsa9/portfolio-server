'use strict';
var dataProvider = require('../data/credit.js');
/**
 * Operations on /credit
 */
module.exports = {
    /**
     * summary: Returns the amount of credit the user has.
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     */
    get: function portfolio_credit(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var message = '';

        var provider = dataProvider['get']['200'];
        var data = provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
        });
        res.json(data);
        res.status(status).send(message);
    }
};
