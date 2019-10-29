'use strict';
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
     * operationId: portfolio_credit
     */
    get: {
        200: function (req, res, callback) {
            let currentCredit = global.credit;
            let emptyCredit = {
                value: 0
            };
            return currentCredit ? currentCredit : emptyCredit;
        }
    }
};
