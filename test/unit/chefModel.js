'use strict';

const expect = require('chai').expect;
const mongoose = require('mongoose');

const Chef = require('../../models/chef');

before(done => {
  mongoose.connect('mongodb://localhost/pizzadb-test', done);
});

after(done => {
  mongoose.disconnect(done);
});

beforeEach(done => {
  Chef.remove({}, function(err) {
    if(err) return done(err);

    let sampleChefs = [{
      name: 'Paula Deen',
      yearsOfExperience: 10,
      _id: '000000000000000000000001'
    }, {
      name: 'Guy Fieri',
      _id: '000000000000000000000002'
    }];

    Chef.create(sampleChefs, done);
  });
});

describe('Chef', () => {
  describe('.find()', () => {
    it('should return all chefs', done => {
      Chef.find({}, function(err, chefs) {
        expect(err).to.not.exist;
        expect(chefs).to.have.length(2);
        expect(chefs[0].name).to.equal('Paula Deen');
        done(err);
      });
    });
  });

  describe('methods.addYear()', () => {
    it("should increment the chef's yearsOfExperience, and save", done => {
      Chef.findOne({name: 'Paula Deen'}, (err, chef) => {
        if(err) return done(err);

        chef.addYear(function(err, savedChef) {
          expect(err).to.not.exist;
          expect(savedChef.yearsOfExperience).to.equal(11);
          done();
        });
      });
    });

    it('if the chef does not have yearsOfExperience, should set it to 1', done => {
      Chef.findOne({name: 'Guy Fieri'}, (err, chef) => {
        if(err) return done(err);

        chef.addYear(function(err, savedChef) {
          expect(err).to.not.exist;
          expect(savedChef.yearsOfExperience).to.equal(1);
          done();
        });
      });
    });
  });
});
