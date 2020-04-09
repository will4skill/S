// References
// 1. https://expressjs.com/en/4x/api.html#res.json
// 2. https://expressjs.com/en/4x/api.html#res.type
// 3. https://stackoverflow.com/questions/21398279/how-can-i-respond-in-xml-using-expressjs
// 4. http://expressjs.com/en/5x/api.html#req.query
// 5. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
// 6. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// 7. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// 8. https://www.npmjs.com/package/js2xmlparser
// 9. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
const express = require('express');
const router = express.Router();
const input_data_utility = require('../utilities/data_helper.js');

router.get('/s1', function(req, res){
  const data = input_data_utility.createResponseData(req.query.name);
  res.send(data);
});

router.get('/s2', function(req, res){
  const data = input_data_utility.createResponseData(req.query.name);
  res.send(data);
});

router.get('/s3', function(req, res){
  const data = input_data_utility.createResponseData(req.query.name);
  res.send(data);
});

router.get('/s4', function(req, res){
  const data = input_data_utility.createResponseData(req.query.name);
  res.send(data);
});

router.get('/s5', function(req, res){
  const data = input_data_utility.createResponseData(req.query.name);
  res.send(data);
});

router.get('/s6', function(req, res){
  const data = input_data_utility.createResponseData(req.query.name);
  res.send(data);
});

router.get('/s7', function(req, res){
  const data = input_data_utility.createResponseData(req.query.name);
  res.send(data);
});

router.get('/s8', function(req, res){
  const data = input_data_utility.createResponseData(req.query.name);
  res.send(data);
});

router.get('/s9', function(req, res){
  const data = input_data_utility.createResponseData(req.query.name);
  res.send(data);
});

router.get('/s10', function(req, res){
  const data = input_data_utility.createResponseData(req.query.name);
  res.send(data);
});

module.exports = router;
