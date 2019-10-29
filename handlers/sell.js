'use strict';
var dataProvider = require('../data/sell.js');
var utils = require('../handlers/utils.js');
/**
 * Operations on /sell
 */
module.exports = {
    /**
     * summary: Specifies a stock ticker and a number of shares to sell
     * description: 
     * parameters: ticker, amount
     * produces: application/json, text/json
     * responses: 200
     */
    put: function portfolio_sell (req, res, next) {
        let status = 200, message;
        let credit = global.credit;
        let sharesToSell = req.query.amount;
        let tickerValue = req.query.ticker;
        let assets = global.portfolio;

        if (assets) {
            let currentAsset = assets[tickerValue];
            if (currentAsset && currentAsset.shareCount >= sharesToSell) {
                utils.getSharePrice(req, res, credit, module.exports.onSharePriceReceived);
            } else {
                status = 400;
                message = "You need to add credit to your account before you can buy shares.";
                res.status(status).send(message);
            }
        } else {
            status = 400;
            message = "You have no shares to sell.";
            res.status(status).send(message);
        }
    },
    onSharePriceReceived (req, res, totalPrice, credit) {
        if (totalPrice === null || totalPrice === undefined) {
            status = 400;
            message = "Invalid ticker supplied";
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
