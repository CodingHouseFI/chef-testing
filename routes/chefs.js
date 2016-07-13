'use strict';

const express = require('express');
const Chef = require('../models/chef');

let router = express.Router();

// chefs.js

router.route('/')
  .get((req, res) => {
    Chef.find({}, (err, chefs) => {
      res.status(err ? 400 : 200).send(err || chefs);
    });
  })
  .post((req, res) => {
    Chef.create(req.body, (err, chef) => {
      res.status(err ? 400 : 200).send(err || chef);
    });
  })

router.route('/:id')
  .get((req, res) => {
    Chef.findById(req.params.id, (err, chef) => {

      console.log('chef._id:', chef._id);
      console.log('chef._id.toString():', chef._id.toString());
      // console.log('typeof chef._id:', typeof chef._id);
      console.log('chef._id === req.params.id:', chef._id === req.params.id);
      console.log('chef._id.toString() === req.params.id:', chef._id.toString() === req.params.id);

      res.status(err ? 400 : 200).send(err || chef);      
    });
  })
  .put((req, res) => {
    Chef.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, chef) => {
      res.status(err ? 400 : 200).send(err || chef);      
    });
  })
  .delete((req, res) => {
    Chef.findByIdAndRemove(req.params.id, err => {
      res.status(err ? 400 : 200).send(err);      
    });
  })

router.put('/:id/addYear', (req, res) => {
  Chef.findById(req.params.id, (err, chef) => {
    if(err || !chef) {
      return res.status(400).send(err || {error: 'Chef not found.'});
    }

    chef.addYear((err, savedChef) => {
      res.status(err ? 400 : 200).send(err || savedChef);      
    });
    
  });
})

module.exports = router;



