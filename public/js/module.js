'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  let menuView = {
    templateUrl: '/html/menu.html',
    controller: 'menuCtrl'
  };

  $stateProvider
    .state('home', {
      url: '/',
      views: {
        left: {
          templateUrl: '/html/home.html',
          controller: 'homeCtrl'
        },
        right: menuView
      }
    })
    .state('contact', {
      url: '/contact',
      views: {
        left: {
          templateUrl: '/html/contact.html',
          controller: 'contactCtrl'
        },
        right: menuView
      }
    })
    .state('contact.list', {
      url: '/list/:something',
      templateUrl: '/html/list.html',
      controller: 'contactListCtrl'
    })
    .state('contact.list.friends', {
      url: '/friends',
      templateUrl: '/html/friends.html'
    })


    .state('chefs', { // list all chefs
      url: '/chefs',
      views: {
        left: {
          templateUrl: '/html/chefs.html',
          controller: 'chefListCtrl'
        },
        right: menuView
      }
    })

    
    .state('chefShow', { // list all chefs
      url: '/chef/:chefId',
      views: {
        left: {
          templateUrl: '/html/chefShow.html',
          controller: 'chefShowCtrl'
        },
        right: menuView
      }
    })







  $urlRouterProvider.otherwise('/');
});
