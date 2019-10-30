'use strict';
var dataProvider = require('../data/addCredit.js');
/**
 * Operations on /addCredit
 */
module.exports = {
    /**
     * summary: Specifies the amount of money to add to the user&#39;s credit balance
     * description: 
     * parameters: amount
     * produces: application/json, text/json
     * responses: 200,400
     */
    put: function portfolio_add_credit (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        let status, message;
        let isValid = true;
        let amount = req.query.amount;
        if (amount <= 0) {
            isValid = false;
            message = "Please enter a positive amount";
        }
        if (isValid) {
            status = 200;
            let provider = dataProvider['put']['200'];
            let added = provider(req, res, function (err, data) {
                if (err) {
                    next(err);
                    return;
                }
                res.json(added);
            });
        } else { //bad request
            status = 400;
        }
        res.status(status).send(message);
    }
};
