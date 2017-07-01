const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

module.exports = (app) => {
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(bodyParser.json());
  app.use(express.static(path.resolve(`${__dirname}./../dist`)));
  app.use(cors());
};
