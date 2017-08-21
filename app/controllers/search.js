'use strict';

/**
 * AngularJS Controller - SearchCtrl
 */
OMDbSearch.controller('SearchCtrl', ['$scope', function($scope) {
    /* The movie search result list */
    $scope.searchResultList = [];

    /* Default sort variables */
    $scope.sortType = 'Title';
    $scope.sortReverse = false;

    /* Default feedback variables */
    $scope.showInfo = false;
    $scope.showError = false;
}]);
