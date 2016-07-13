'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope) {
  console.log('mainCtrl!');
  $scope.color = 'red';

  this.color = 'green';
});

app.controller('homeCtrl', function() {
  console.log('homeCtrl!');
});

app.controller('menuCtrl', function() {
  console.log('menuCtrl!');
});

app.controller('contactCtrl', function() {
  console.log('contactCtrl!');
});


app.controller('contactListCtrl', function() {
  console.log('contactListCtrl!');
});











app.controller('chefListCtrl', function($scope, Chef) {
  console.log('chefListCtrl!');

  Chef.getAll()
    .then(res => {
      $scope.chefs = res.data;
      console.log('$scope.chefs:', $scope.chefs);
    })
    .catch(err => {
      console.log('err:', err);
    })
});





app.controller('chefShowCtrl', function($scope, Chef, $state) {
  console.log('chefShowCtrl!');

  // console.log('$stateParams:', $stateParams);

  Chef.getById($state.params.chefId)
    .then(res => {
      $scope.chef = res.data;
    });

});










