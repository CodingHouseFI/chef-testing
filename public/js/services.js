'use strict';

var app = angular.module('myApp');

app.service('Chef', function($http) {

  this.getAll = () => {
    return $http.get('/api/chefs');
  };

  this.getById = id => {
    return $http.get(`/api/chefs/${id}`)
  };

});



///////////////////////


// Chef.getAll()
//   .then(chefs => {

//   })


