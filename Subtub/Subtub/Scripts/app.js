var SubTubApp = angular.module("SubTubApp", []);

SubTubApp.controller("SubTubController", ["$scope", "$http", function($scope, $http) {

  $http({method: "GET", url: "http://www.freecodecamp.com/stories/hotStories"}).success(function(data) {
  	//console.log(data);
  	$scope.query = "";
  	$scope.image = data.image;
    $scope.posts = data;
    $scope.image = function(article) {
    	return article.image || "http://placekitten.com/g/195/195";
    };

  });
}]);