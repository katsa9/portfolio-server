'use strict';
const fetch = require('node-fetch');
module.exports = {
  getSharePrice: function (req, res, credit, callback) {
    let shareCount= req.query.amount;
    let ticker = req.query.ticker;
    let url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=5IO11U7YDDNXHR1J`;

    //this shoud not use fetch - should use async - await!!
    fetch(url)
      .then(res => res.json())
      .then(json => {
        let obj = Object.values(json);
        let shareP = Object.values(obj[0])[4]
        let toPay = shareP * shareCount;
        callback(req, res, toPay, credit);
      });
  }
};