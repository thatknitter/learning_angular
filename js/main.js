;( function() {
    'use strict';

    angular.module('firstModule', []).controller('SimpleController', function($scope) {
      var vm = this;
      vm.name = 'Kimberly';
      vm.friends = ['Cecil', 'Carlos', 'Dana', 'Marcus Vanston', 'Steve Carlsberg', 'Scout Master Harlan', 'Tamika Flynn', 'Them', 'Pamela Winchell', 'The Faceless Old Woman Who Secretly Lives in your House'];
    });

  }()); 