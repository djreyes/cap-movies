'use strict';

angular.module('capMoviesApp')
  .controller('MovieCtrl', function ($scope, movie) {
    var init = function () {
      $scope.movie = movie;
    };

    init();
  });
