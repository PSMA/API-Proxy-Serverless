'use strict';
const axios = require('axios');

const apiKey = 're2I7zVRRTCfRPG5r1pKpa5JDf82mEbE';

const apiCall = (url, params) => 
  axios
  .get(url, {
    headers: {
      Authorization: apiKey
    },
    params
  })
  .then(res => {
    return {
      statusCode: 200,
      body: JSON.stringify(res.data.data)
    };
  })
  .catch(e => {
    return {
      statusCode: JSON.stringify(e.status),
      body: e
    };
  })

module.exports.suggest = async event => {
  const query = event.queryStringParameters["query"];

  return JSON.stringify(await apiCall("https://api.psma.com.au/v1/predictive/address", {query}));
};
