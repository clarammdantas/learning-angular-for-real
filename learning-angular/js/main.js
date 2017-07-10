var app = angular.module('myApp', []);
var apiKey = 'ljmKWhYdyrkvuZoD7KZFfM75iCUzrBsQIgzzxpMy';
var nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';

app.controller('PlayerController', ['$scope', function($scope) {
  $scope.playing = false;
  $scope.audio = document.createElement('audio');
  $scope.audio.src = 'media/serial-s01-e01.mp3';

  $scope.play = function() {
  	$scope.audio.play();
  	$scope.playing = true;
  };

  $scope.stop = function() {
  	$scope.audio.pause();
  	$scope.playing = false;
  };

  $scope.audio.addEventListener('ended', function() {
    $scope.$apply(function() {
      $scope.stop()
    });
  });

  $http({
    method: 'JSONP',
    url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK';
  }).success(function(data, status){
    $scope.programs = data.list.story;
  }).error(function(data, status){

  });

}]);

// examples
app.controller('MyController', function($scope){
  $scope.person = {name: "Luisa"};

  var updateClock = function() {
    $scope.clock = new Date();
  };

  var timer = setInterval(function(){
    $scope.$apply(updateClock);
  }, 1000);

  updateClock();
});

app.controller('RelatedController', ['$scope', function($scope) {

}]);

app.controller('DemoController', fucntion($scope){
  $scope.counter = 0;
  $scope.add = function(amount) { $scope.counter += amount; };
  $scope.sub = function(amount) { $scope.counter -= amount; };
});
