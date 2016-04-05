module.exports = function (grunt) {

  grunt.initConfig({


    /**
     * Set base path
     */
    path: '',
    domain: 'http://localhost/gijsroge.github.io/',


    watch: {
      /*
       * Watch for changes in your scss
       */
      scss: {
        files: ['<%= path %>scss/**/*.scss'],
        tasks: ['sass:dev','postcss:dev']
      },

      /*
       * Watch for svg changes
       */
      svg: {
        files: ['<%= path %>svg/src/**/*.svg'],
        tasks: ['svgmin:dist'],
        options: {
          spawn: false,
        }
      },
    },


    /*
     * Parse css
     */
    sass: {
      dev: {
        options: {
          sourceMap: true,
        },
        files: {
          '<%= path %>css/main.css': '<%= path %>scss/main.scss',
        }
      },
      dist: {
        options: {
          sourceMap: false,
        },
        files: {
          '<%= path %>css/main.css': '<%= path %>scss/main.scss',
        }
      }
    },


    /*
     * Post process css
     */
    postcss: {
      dev: {
        files: {
          '<%= path %>css/main.css': '<%= path %>css/main.css',
        },
        options: {
          map: true,
          processors: [
            require('autoprefixer')({browsers: 'last 4 version'})
          ]
        }
      },
      dist: {
        files: {
          '<%= path %>css/main.css': ['<%= path %>css/main.css'],
        },
        options: {
          map: false,
          processors: [
            require('autoprefixer')({browsers: 'last 4 version'}),
          ]
        }
      }
    },


    /*
     * Optimize svg files
     */
    svgmin: {
      options: {
        plugins: [
          {removeXMLProcInst: false},
          {removeViewBox: false},
          {removeUselessStrokeAndFill: false},
          {convertPathData: {straightCurves: false}}
        ]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= path %>svg/src/',
          src: ['**/*.svg'],
          dest: '<%= path %>svg/dist/',
          ext: '.svg'
        }]
      }
    },


    /**
     * Css minifier
     */
    cssnano: {
      options: {
        sourcemap: false
      },
      dist: {
        files: {
          '<%= path %>css/main.css': '<%= path %>css/main.css',
        }
      }
    },


    /*
     * Livereload
     */
    browserSync: {
      bsFiles: {
        src: [
          "<%= path %>css/*.css", "<%= path %>**/*.tpl.php"
        ]
      },

      options: {
        watchTask: true,
        notify: false,
        proxy: '<%= domain %>'
      }
    },
  });


  /*
   * include all grunt tasks
   */
  require('jit-grunt')(grunt);


  /*
   * default taks
   */
  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('css', ['sass:dev', 'postcss:dev']);
  grunt.registerTask('build', ['sass:dist', 'svgmin:dist', 'postcss:dist', 'cssnano:dist']);
};