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
