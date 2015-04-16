var app = angular.module('app', ['ngResource']);

app.factory('resources', function($resource,$location) {
  var url = $location.absUrl().split('/');
  var comicID = url[url.length-1];

  var heroID = url[url.length - 3];
  var villainID = url[url.length - 1];


  var factory = {};

  factory.routes = {
    comicAPI: $resource('/comic/:action', {}, {
      fetch: {method: 'GET', params: {title: '@title', action: 'search'}, isArray: false },
      details: {method: 'GET', params: {id: comicID, action: 'details'}, isArray: false },
      comicHelp: {method: 'GET', params: {action: 'comicHelp'}, isArray: false},
      versus: {method: 'GET', params: {hero: heroID, villain: villainID, action: 'versus'}, isArray: false},
    })
  };
  return factory;
});

app.controller('comicController', function($scope, resources) {

  $scope.comic = {};

  $scope.changeCharacter = function(mainChar) {
      $scope.comic.main = mainChar;
      $scope.comicImg = $scope.comic.main.image.small_url;

      if($scope.comic.main.gender == 1)
        {
          $scope.gender = 'Male';
        }
        else
          $scope.gender = 'Female';
  }

  $scope.searchComics = function() {
    resources.routes.comicAPI.fetch({title: $scope.title}, function done(response) {
      console.log(response);
      if (response.results.length > 0) {
        $scope.comic = { main: response.results[0], alternatives: response.results };
        console.log('main character');
        console.log($scope.comic.main);

        console.log('alt character count');
        console.log($scope.comic.alternatives.length);
        $scope.comicImg = $scope.comic.main.image.small_url;
        //console.log(response);
        if($scope.comic.main.gender == 1)
        {
          $scope.gender = 'Male';
        }
        else
          $scope.gender = 'Female';
      }
      else 
        $scope.comic = response.results;
        //$scope.comicImg='';
    });
  };


});


app.controller('viewDetailController', function($scope, resources) {

  function init() {
    resources.routes.comicAPI.details(function done(response) {
        $scope.viewComic = response.results;
    });
  }
  init();

   $scope.toggleFriends = function() {
    if ($scope.displayFriends) {
      $scope.friendBtnText = '+ show Friends';
      $scope.displayFriends = false;

    }
    else {
      $scope.friendBtnText = '- hide Friends';
      $scope.displayFriends = true;
    }
  };

  $scope.toggleEnemies = function() {
      if ($scope.displayEnemies) {
        $scope.enemieBtnText = '+ show Enemies';
        $scope.displayEnemies = false;
      }
      else {
        $scope.enemieBtnText = '- hide Enemies';
        $scope.displayEnemies = true;
      }
    };

  $scope.togglePowers = function() {
      if ($scope.displayPowers) {
        $scope.powerBtnText = '+ show Powers';
        $scope.displayPowers = false;
      }
      else {
        $scope.powerBtnText = '- hide Powers';
        $scope.displayPowers = true;
      }
    };



});

app.controller('ComicHelpController', function($scope, resources) {

  function init() {
    resources.routes.comicAPI.comicHelp(function done(response) {
        $scope.comic = response.results;
    });
  }
  init();

});

app.controller('comicVersusController', function($scope, resources) {

  function init() {
    resources.routes.comicAPI.versus(function done(response) {
      console.log(response);
        $scope.characterHero = response.heroDetail.results;
        console.log($scope.characterHero.powers);
        $scope.characterVillain = response.villainDetail.results;
    });
  }

  init();

    $scope.toggleTeams = function() {
    if ($scope.displayTeams) {
      $scope.teamBtnText = '+ show Teams';
      $scope.displayTeams = false;

    }
    else {
      $scope.teamBtnText = '- hide Teams';
      $scope.displayTeams = true;
    }
  };

  $scope.toggleFriends = function() {
    if ($scope.displayFriends) {
      $scope.friendBtnText = '+ show Friends';
      $scope.displayFriends = false;

    }
    else {
      $scope.friendBtnText = '- hide Friends';
      $scope.displayFriends = true;
    }
  };

  $scope.toggleEnemies = function() {
      if ($scope.displayEnemies) {
        $scope.enemieBtnText = '+ show Enemies';
        $scope.displayEnemies = false;
      }
      else {
        $scope.enemieBtnText = '- hide Enemies';
        $scope.displayEnemies = true;
      }
    };

  $scope.togglePowers = function() {
      if ($scope.displayPowers) {
        $scope.powerBtnText = '+ show Powers';
        $scope.displayPowers = false;
      }
      else {
        $scope.powerBtnText = '- hide Powers';
        $scope.displayPowers = true;
      }
    };

});



