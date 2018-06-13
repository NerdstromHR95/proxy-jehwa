const express = require('express');
const path = require('path');
const app = express ();
// const request = require('request');
const proxy = require('http-proxy-middleware');

app.use('/:itemNo', express.static(path.join(__dirname, '/../public')));

app.use('/:itemNo/reviews/*', proxy({target: 'http://localhost:3002'}))

app.use('/details/*', proxy({target: 'http://localhost:3004'}))

app.listen(3000, () => console.log('proxy server is listening on port 3000'));