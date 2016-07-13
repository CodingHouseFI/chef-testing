'use strict';

const express = require('express');

let router = express.Router();

router.use('/chefs', require('./chefs'));

module.exports = router;
