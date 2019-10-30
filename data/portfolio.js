'use strict';
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
     * operationId: portfolio_get
     */
    get: {
        200: function (req, res, callback) {
            let assets = global.portfolio;
            if (assets === undefined || assets === null || (Object.keys(assets).length === 0 && assets.constructor === Object)) {
                return {
                    empty: {
                        ticker: "You have no shares",
                        totalValue: 0,
                        shareCount: 0
                    }
                }
            } else {
                return assets;

                /****START OF CODE TO UPDATE VALUES OF ASSETS BASED ON CURRENT VALUES */

                // let updated = Object.values(assets).map(item => module.exports.updateShareValue(item, module.exports.onSharePriceReceived))
                // global.portfolio = updated;
                // return updated;
            }
        }
    }
    // ,
    // onSharePriceReceived: function(item, shareCost) {
    //     let updated = {
    //         ...item,
    //         [item.totalValue]: shareCost * item.shareCount
    //     }
    //     return updated;
    // },

    // updateShareValue: function(item, callback){
    //     console.log("item", item);
    //     let ticker = item.ticker;
    //     let url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=5IO11U7YDDNXHR1J`;
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(json => {
    //         let shareCost = json.price
    //         console.log("SHARE COST", shareCost);
    //         callback(item, shareCost);
    //     });
    // }

};
