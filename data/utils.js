'use strict';
module.exports = {
  updatePortfolio: function (assets, tickerValue, assetValue, shareCount) {
    global.portfolio = {
      ...assets,
      [tickerValue.toUpperCase()]: {
        ticker: tickerValue.toUpperCase(),
        totalValue: assetValue,
        shareCount: shareCount
      }
    }
  }
};