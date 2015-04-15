module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      source: {
        options: {jshintrc: 'scripts/.jshintrc'},
        src: ['scripts/**/*.js', "!scripts/vendors/**", "!scripts/config.js"]
      }
    },
    watch: {
      scripts: {
        files: ['scripts/**/*'],
        tasks: ['jshint', 'requirejs'],
        options: { livereload: true }
      },
      styles: {
        files: ['styles/**/*'],
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
          '../css/main.css': 'styles/main.scss'
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
          baseUrl: 'scripts',
          mainConfigFile: "scripts/config.js",
          include: ['app'], // assumes a production build using almond
          name: "../node_modules/almond/almond",
          out: '../js/app.js',
          wrap: {
            start: '/*! p-test - code by @taseenb / v<%= pkg.version %> <%= grunt.template.today("mmmm dd, yyyy") %> */\n',
            end: '/* thanks by @taseenb */'
          },
          wrapShim: true,
          removeCombined: true,
          useStrict: true,
          optimize: 'none',
          generateSourceMaps: false,
          preserveLicenseComments: true,
          findNestedDependencies: true,
          insertRequire: ['app']
        }
      },
      min: {
        options: {
          baseUrl: 'scripts',
          mainConfigFile: "scripts/config.js",
          include: ['app'], // assumes a production build using almond
          name: "../node_modules/almond/almond",
          out: '../js/app.min.js',
          wrapShim: true,
          removeCombined: true,
          useStrict: true,
          optimize: 'uglify2',
          generateSourceMaps: true,
          preserveLicenseComments: false,
          findNestedDependencies: true,
          insertRequire: ['app']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
//  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', [ 'jshint', 'requirejs', 'sass']);

};
