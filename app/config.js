require([
  'angular',
  'app'
  ], function(angular, app) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
      // bootstrap the app manually
      angular.bootstrap(document, ['SampleApp']);
    });
  }
);

require.config({
  paths: {
    angular: '../lib/bower_components/angular/angular',
    ngRoute: '../lib/bower_components/angular-route/angular-route.min'
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'ngRoute': ['angular']
  }
});