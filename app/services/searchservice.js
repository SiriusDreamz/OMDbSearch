/**
 * AngularJS Factory - SearchFactory
 */
angular.module('OMDbSearch')
    .factory('SearchFactory', ['$http', function($http) {
        return {
            /* Get movies based on search string */
            getMovies: function(searchStr) {
                /* Create the total url */
                var url = Global_OMDb_API.url + searchStr + '&apikey=' + Global_OMDb_API.key;

                return $http({
                    method: 'GET',
                    url: url
                }).then(function successCallback(response) {
                    /* If the response return false there is no searchresult */
                    if (response.data.Response === 'False') {
                        return 'noResult';
                    }
                    return response;
                }, function errorCallback(response) {
                    /* Always return error on errorCallback */
                    return 'error';
                });
            }
        }
    }]);
