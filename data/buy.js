'use strict';
var utils = require('../data/utils.js');
/**
 * Operations on /buy
 */
module.exports = {
    /**
     * summary: Specifies a stock ticker and a number of shares to purchase
     * description: 
     * parameters: ticker, amount
     * produces: application/json, text/json
     * responses: 200
     * operationId: portfolio-buy
     */
    put: {
        200: function (req, res, callback) {
            let assets = global.portfolio;
            let sharesBought = req.query.amount;
            let tickerValue = req.query.ticker;
            let pricePaid = res;

            if(assets) {
                let currentAsset = assets[tickerValue];
                if(currentAsset) {
                    let newTotalValue = currentAsset.totalValue + pricePaid;
                    let newShareCount = currentAsset.shareCount + sharesBought;
                   utils.updatePortfolio(assets, tickerValue,newTotalValue,newShareCount);
                }else {
                    utils.updatePortfolio(assets, tickerValue,pricePaid,sharesBought);
                }
            } else {
                utils.updatePortfolio(assets, tickerValue,pricePaid,sharesBought);
            }
        }
    }
};
