module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      source: {
        options: {jshintrc: 'src/scripts/.jshintrc'},
        src: ['src/**/*.js']
      }
    },
    watch: {
      scripts: {
        files: ['src/scripts/**/*.js'],
        tasks: ['jshint', 'requirejs'],
        options: { livereload: true }
      },
      styles: {
        files: ['src/styles/*'],
        tasks: ['sass'],
        options: { livereload: true }
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/main.css': 'src/styles/main.scss'
        }
      }
    },
//    sass: {
//      main: {
//        files: {
//          'css/main.css': 'src/styles/main.scss'
//        }
//      }
//    },
    requirejs: {
      unmin: {
        options: {
          baseUrl: '.',
          findNestedDependencies: true,
          include: ['src/scripts/app'],
          onBuildWrite: function (name, path, contents) {
            return require('amdclean').clean(contents);
          },
          optimize: 'none',
          out: 'js/app.js',
          paths: {
            'app': 'src/scripts/app',
            'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min'
          },
          useStrict: true,
          wrap: true
        }
      },
      min: {
        options: {
          baseUrl: '.',
          findNestedDependencies: true,
          include: ['src/scripts/app'],
          onBuildWrite: function (name, path, contents) {
            return require('amdclean').clean(contents);
          },
          optimize: 'uglify2',
          out: 'js/app.min.js',
          paths: '<%= requirejs.unmin.options.paths %>',
          useStrict: true,
          wrap: true,
          generateSourceMaps: true,
          preserveLicenseComments: false
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
//  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['jshint', 'requirejs', 'sass']);

};
