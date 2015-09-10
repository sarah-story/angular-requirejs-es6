import * as angular from "angular";
import * as ngRoute from "ngRoute";

angular.module('SampleApp.view2', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'partials/view2.html',
      controller: 'View2Ctrl'
    });
  }])
  .controller('View2Ctrl', ["$scope", function(sc) {
    sc.content = "This is view two's content";
  }]);