import * as angular from "angular";
import * as ngRoute from "ngRoute";

angular.module('SampleApp.view1', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'partials/view1.html',
      controller: 'View1Ctrl'
    });
  }])
  .controller('View1Ctrl', ["$scope", function(sc) {
    sc.content = "This is view one's content";
  }]);