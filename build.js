({
  baseUrl: "./final",
  paths: {
    angular: '../lib/bower_components/angular/angular',
    ngRoute: '../lib/bower_components/angular-route/angular-route.min',
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'ngRoute': ['angular']
  },
  name: "config",
  out: "built.js"
});