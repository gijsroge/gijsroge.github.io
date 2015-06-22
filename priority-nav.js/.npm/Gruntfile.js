module.exports = function (grunt) {
    grunt.initConfig({
        watch: {

            /*
             * Watch for changes in your css
             */
            scss: {
                files: ['../scss/**/*.scss'],
                tasks: ['css']
            },

            /*
             * Watch for changes in your css
             */
            css: {
                files: ['../css/**/*.css'],
                options: {
                  livereload: true
                }
            },

            /*
             * Watch for changes in your JavaScript
             */
            js: {
                files: ['../js/plugins/**/*.js'],
                tasks: ['uglify:dev'],
                options: {
                  livereload: true
                }
            },

            /*
             * Watch for changes in your files
             */
            files: {
                files: ['../**/*.{tpl,php,twig,tpl.php,html}'],
                options: {
                    livereload: true
                }
            },

            /*
             * Watch for svg changes
             */
            svg: {
                files: ['../images/src/**/*.svg'],
                tasks: ['svg'],
                options: {
                    livereload: true
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
                    '../css/main.css': '../scss/main.scss',
                }
            },
            dist: {
                options: {
                    sourceMap: false,
                },
                files: {
                    '../css/main.css': '../scss/main.scss',
                }
            }
        },


        /*
         * Poste process css
         */
        postcss: {
            dev: {
                src: '../css/main.css',
                dest: '../css/main.css',
                options: {
                    map: true,
                    processors: [
                        require('autoprefixer-core')({browsers: 'last 2 version'}),
                        require('postcss-assets')({
                            loadPaths: ['../images/']
                        })
                    ]
                }
            },
            dist: {
                src: '../css/main.css',
                dest: '../css/main.css',
                options: {
                    map: true,
                    processors: [
                        require('autoprefixer-core')({browsers: 'last 2 version'}),
                        require('postcss-assets')({
                            loadPaths: ['../images/']
                        })
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
                    {convertPathData: {straightCurves: false}}]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '../images/src',
                    src: ['**/*.svg'],
                    dest: '../images/dist/',
                    ext: '.svg'
                }]
            }
        },


        /**
         * Remove files
         */
        clean: {
            options: {force: true},
            svg: {
                src: ['../images/dist']
            },
        },


        /*
         * Minify JavaScript
         */
        uglify: {
            dev: {
                options: {
                    beautify: true,
                    sourceMap: true
                },
                files: {
                    '../js/plugins.js': ['../js/plugins/**/*.js']
                }
            },
            dist: {
                options: {
                    beautify: false,
                    sourceMap: false
                },
                files: {
                    '../js/plugins.js': ['../js/plugins/**/*.js']
                }
            }
        },


        /*
         * Simple notifications
         */
        notify: {
            parsed: {
                options: {
                    enabled: true,
                    message: 'css parsed',
                }
            },
        }
    });


    /*
     * include all grunt tasks
     */
    require('jit-grunt')(grunt);


    /*
     * Stacktrace
     */
    grunt.option('stack', true);


    /*
     * default taks
     */
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('css', ['sass:dev', 'postcss:dev']);
    grunt.registerTask('build', ['svg', 'sass:dist', 'postcss:dist', 'uglify:dist']);
    grunt.registerTask('svg', ['clean:svg', 'svgmin:dist']);
};
