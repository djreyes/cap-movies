'use strict';

/**
 * @ngdoc function
 * @name capMoviesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the capMoviesApp
 */
angular.module('capMoviesApp')
  .controller('MainCtrl', function ($scope, Ref, $firebaseArray) {
    $scope.movies = $firebaseArray(Ref.child('movies').limit(25));
  });
