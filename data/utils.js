'use strict';
module.exports = {
  updatePortfolio: function (assets, tickerValue, assetValue, shareCount) {
    global.portfolio = {
      ...assets,
      [tickerValue]: {
        ticker: tickerValue,
        totalValue: assetValue,
        shareCount: shareCount
      }
    }
  }
};