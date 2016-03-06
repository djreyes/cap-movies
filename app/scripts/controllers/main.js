'use strict';

/**
 * @ngdoc function
 * @name capMoviesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the capMoviesApp
 */
angular.module('capMoviesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
