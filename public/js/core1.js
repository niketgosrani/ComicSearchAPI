var app = angular.module('app', ['ngResource']);

app.factory('resources', function($resource) {
  var factory = {};

  factory.routes = {
    comicAPI: $resource('/comic/:action', {}, {
      fetch: {method: 'GET', params: {title: '@title', action: 'search'}, isArray: false }
    })
  };
  return factory;
});

app.controller('comicController', function($scope, resources) {

  $scope.searchComics = function() {
    resources.routes.comicAPI.fetch({title: $scope.title}, function done(response) {

      if (response.name==null)
      {
        $scope.defaultMsg = '** Sorry No Results Found';
        $scope.comic = null;
        $scope.comicImg = null;
        $scope.gender = null;
        console.log(response);
      }
      else {
        $scope.defaultMsg = '';
        $scope.comic = response;
        $scope.comicImg = response.image.icon_url;
        console.log(response);
        if(response.gender == 1)
        {
          $scope.gender = 'Male';
        }
        else
          $scope.gender = 'Female';
      }
    });

  };

var theButton = document.getElementById('b1');

    theButton.onclick = function() { 
        document.getElementById('f1').style.visibility='hidden';   
    }
});



