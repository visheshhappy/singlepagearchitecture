var myapp = angular.module('MyApp',['ngRoute']);

myapp.config(function($routeProvider){

$routeProvider
.when("/",{
	templateUrl : "pages/mainPage.html",
	controller : "mainController"
})
.when("/page2",{
	templateUrl : "pages/page2.html",
	controller : "page2Controller"
})

});

myapp.controller('mainController',['$scope','$log',function($scope,$log){

}]);

myapp.controller('page2Controller',['$scope','$log',function($scope,$log){
	$scope.name="vishesh";
}])