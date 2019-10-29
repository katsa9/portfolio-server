'use strict';
var dataProvider = require('../data/buy.js');
var utils = require('../handlers/utils.js');
/**
 * Operations on /buy
 */
module.exports = {
    /**
     * summary: Specifies a stock ticker and a number of shares to purchase
     * description: 
     * parameters: ticker, amount
     * produces: application/json, text/json
     * responses: 200,400
     */
    put: function portfolio_buy (req, res, next) {
        let status = 200, message;
        let credit = global.credit;

        if(credit === undefined || credit === 0) {
            status = 400;
            message = "You need to add credit to your account before you can buy shares.";
            res.status(status).send(message);
        } 
        utils.getSharePrice(req,res, credit, module.exports.onSharePriceReceived);
    },
    onSharePriceReceived(req, res, totalPrice, credit) {
        if(totalPrice > credit.value) {
            status = 400;
            message = "You have insufficent credit to buy the selected amount of shares.";
        } else {
            let provider = dataProvider['put']['200'];
            let data = provider(req, totalPrice, function (err, data) {
                if (err) {
                    next(err);
                    return;
                }
            });
            res.json(data);
        }
        res.status(status).send(message);
    }
};
