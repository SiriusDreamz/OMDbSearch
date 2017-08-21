/**
 * The Searchform directive
 */
OMDbSearch.directive('searchForm', function() {
    /* The directive controller */
    var controller = ['$scope', 'SearchFactory', function($scope, SearchFactory) {
            /* Search the OMDb API for movies */
            $scope.searchOMDb = function() {
                /* Make sure we send an empty string to the API in case the searchfield is empty */
                if ($scope.searchStr === undefined) {
                    $scope.searchStr = '';
                }

                /* Use the search factory to retrieve data */
                SearchFactory.getMovies($scope.searchStr).then(function(response) {
                    /* Check if movie data is present */
                    if (response === 'noResult' || response === 'error') {
                        updateSearchResult(response);
                    } else {
                        /* Hide feedback */
                        $scope.showInfo = false;
                        $scope.showError = false;

                        $scope.searchResultList = response.data.Search;
                    }
                });
            };

            /* Update searchresult list and toggle feedback */
            function updateSearchResult(response) {
                /* Show feedback */
                if (response === 'noResult') {
                    $scope.feedback = 'No result';
                    $scope.showInfo = true;
                    $scope.showError = false;
                } else if (response === 'error') {
                    $scope.feedback = 'Search failed';
                    $scope.showInfo = false;
                    $scope.showError = true;
                }

                /* Empty searchresults */
                $scope.searchResultList = [];
            }
        }],
        template = 'views/templates/searchform.html';
    return {
        restrict: 'AE',
        templateUrl: template,
        controller: controller
    };
});
