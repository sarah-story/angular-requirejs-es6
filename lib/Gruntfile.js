module.exports = function(grunt) {

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        modules: "amd"
      },
      dist: {
        files: {
          '../final/app.js': '../app/app.js',
          '../final/controllers/View1Ctrl.js': '../app/controllers/View1Ctrl.js',
          '../final/controllers/View2Ctrl.js': '../app/controllers/View2Ctrl.js',
        }
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['babel']);
};