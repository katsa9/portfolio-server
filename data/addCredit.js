'use strict';
/**
 * Operations on /addCredit
 */
module.exports = {
    /**
     * summary: Specifies the amount of money to add to the user&#39;s credit balance
     * description: 
     * parameters: amount
     * produces: application/json, text/json
     * responses: 200
     * operationId: portfolio-add-credit
     */
    put: {
        200: function (req, res, callback) {
            let addAmount = req.query.amount;
            let credit = {};
            let currentCredit = global.credit;
            if(currentCredit === undefined) {
                credit.value = addAmount; 
            } else {
                credit.value = currentCredit.value + addAmount;  
            }
            global.credit = credit;
            return global.credit;
        }
    }
};
