'use strict';
var utils = require('../data/utils.js');
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
     * operationId: portfolio-sell
     */
    put: {
        200: function (req, res, callback) {
            let assets = global.portfolio;
            let sharesSold = req.query.amount;
            let tickerValue = req.query.ticker;
            let priceReceived = res;

            if (assets) {
                let currentAsset = assets[tickerValue];
                if (currentAsset && currentAsset.shareCount > sharesSold) {
                    let newTotalValue = currentAsset.totalValue - priceReceived;
                    let newShareCount = currentAsset.shareCount - sharesSold;
                    utils.updatePortfolio(assets, tickerValue, newTotalValue, newShareCount);
                } else if (currentAsset && currentAsset.shareCount === sharesSold) {
                    delete global.portfolio[tickerValue];
                    if (Object.keys(global.portfolio).length === 0 && global.portfolio.constructor === Object) {
                        return {
                            empty: {
                                ticker: "You have no shares",
                                totalValue: 0,
                                shareCount: 0
                            }
                        }
                    }
                }
            }
            return global.portfolio;
        }
    }
};
