import * as angular from 'angular'
import * as ngRoute from 'ngRoute'
import * as View1Ctrl from 'controllers/View1Ctrl'
import * as View2Ctrl from 'controllers/View2Ctrl'

export default angular.module('SampleApp', [
  "ngRoute", 
  "SampleApp.view1", 
  "SampleApp.view2"
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
