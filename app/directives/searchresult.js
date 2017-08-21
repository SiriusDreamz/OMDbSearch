/**
 * AngularJS Directive - SearchResult
 */
OMDbSearch.directive('searchResult', function() {
    /* The directive controller */
    var controller = ['$scope', '$window', function($scope, $window) {
            /* Toggle search result visibility */
            $scope.showTable = function() {
                return $scope.searchResultList.length > 0 ? true : false;
            };

            /* Open movie in new browser tab */
            $scope.goToMovie = function(imdbID) {
                $window.open('http://www.imdb.com/title/' + imdbID, '_blank');
            };
        }],
        template = 'views/templates/searchresult.html';
    return {
        restrict: 'AE',
        templateUrl: template,
        controller: controller
    };
});
