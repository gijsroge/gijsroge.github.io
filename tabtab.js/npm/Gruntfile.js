module.exports = function(grunt) {
    grunt.initConfig({
        config: {
            src: 'src',
            dist: 'dist'
        },
        pkg: require('./package'),
        secret: grunt.file.readJSON('secret.json'),
        //These watch tasks are executed on "$ grunt"
        watch: {
            //tasks: [xxx -> xxx -> xxx]
            //example: compiles sass -> autoprefix css -> trigger notification
            sass: {
                files: ['../scss/**/*.{scss,sass}'],
                tasks: ['sass:dev', 'autoprefixer:dev']
            },
            //watches .css files in css/ folder and triggers livereload
            css: {
                files: ['../css/*.css'],
                options: {
                    livereload: true
                }
            },
            //watch for js plugins and bundle them
            js: {
                files: ['../js/plugins/**/*.js'],
                tasks: ['uglify:dev']
            },
            //watches .tpl files in any folder for changes and triggers livereload
            files: {
                files: ['../**/*.{html,tpl,php,twig,tpl.php}'],
                options: {
                    livereload: true
                }
            },
            images: {
                files: ['../images/src/**/*.{png,jpg,gif}'],
                tasks: ['newer:imagemin']
            },
            //watches svg files and starts cleaning previous minified svg's and recompiles everything
            svg: {
                files: ['../images/src/**/*.svg'],
                tasks: ['clean:svg', 'svg', 'sass:dev', 'autoprefixer:dev', 'notify:finished']
            },
            svgsprite: {
                files: ['../images/dist/**/*.svg'],
                tasks: ['svgstore'],
                options: {
                    livereload: true
                }
            },
        },
        //Sass task that configures how the css should be build
        sass: {
            //Dev version (triggers on $ grunt)
            dev: {
                options: {
                    //This enables sourcemaps
                    sourceMap: true,
                    //This prints out the image base path
                    //Usage: background image-url('file.png');
                    imagePath: '../images/dist'
                },
                //Compiles the scss/main.scss to -> tmp/main.css
                files: {
                    '../tmp/main.css': '../scss/main.scss',
                    '../tmp/critical.css': '../scss/critical.scss'
                }
            },
            //Production version (triggers on $ grunt build)
            dist: {
                options: {
                    //Disables the sourcemaps as they are not needed on production
                    sourceMap: false,
                    outputStyle: 'compressed',
                    imagePath: '../images/dist'
                },
                files: {
                    '../tmp/main.css': '../scss/main.scss',
                    '../tmp/critical.css': '../scss/critical.scss'
                }
            }
        },
        //Simple notifications
        notify: {
            finished: {
                options: {
                    enabled: true,
                    message: 'Compiled',
                }
            },
            finishedimages: {
                options: {
                    enabled: true,
                    message: 'Compressed images',
                }
            },
            finishedbuild: {
                options: {
                    enabled: true,
                    message: 'Build Complete',
                }
            },
            finishedsvg: {
                options: {
                    enabled: true,
                    message: 'SVGs converted',
                }
            }
        },
        //Automatic prefixes css
        autoprefixer: {
            //Dev version (triggers on $ grunt)
            dev: {
                files: [{
                    expand: true,
                    cwd: '../tmp/',
                    src: '{,*/}*.css',
                    dest: '../css/'
                }],
                options: {
                    //Disabled sourcemaps
                    map: true
                }
            },
            //Production version (also disabled sourcemaps)
            dist: {
                files: [{
                    expand: true,
                    cwd: '../tmp/',
                    src: '{,*/}*.css',
                    dest: '../<%= config.dist %>/css/'
                }],
                options: {
                    //Disabled sourcemaps
                    map: false
                }
            }
        },
        cssmin: {
            dist: {
                files: [{
                      expand: true,
                      cwd: '../css',
                      src: ['*.css', '!*.min.css'],
                      dest: '../css',
                      ext: '.css'
                }]
            }
        },
        //Compiles plugins in js/plugins/ and outputs to js/plugins.js
        //Extra compression is handled by Drupal
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
                    '../<%= config.dist %>/js/plugins.js': ['../js/plugins/**/*.js'],
                    '../<%= config.dist %>/js/main.js': ['../js/main.js']
                }
            }
        },
        //Combines media queries to minimize file size (runs on $ grunt build)
        cmq: {
            your_target: {
                files: {
                    '../tmp': ['../tmp/main.css']
                }
            }
        },
        //Removes duplicate css to minimize file size (runs on $ grunt build)
        cssshrink: {
            your_target: {
                files: {
                    '../tmp': ['../tmp/main.css']
                }
            }
        },
        //image optimizer
        imagemin: { // Task
            dynamic: { // Another target
                options: {
                    progressive: true
                },
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: '../images/src/', // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
                    dest: '../images/dist/' // Destination path prefix
                }]
            }
        },
        //Minifies svg's
        svgmin: {
            options: {
                plugins: [{
                    removeViewBox: false
                }, {
                    removeUselessStrokeAndFill: false
                }, {
                    convertPathData: {
                        straightCurves: false
                    }
                }, {
                    removeXMLProcInst: false
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '../images/src',
                    src: ['*.svg'],
                    dest: '../images/dist/svg',
                    ext: '.svg'
                }]
            },
            dataurl: {
                files: [{
                    expand: true,
                    cwd: '../images/src/data-url',
                    src: ['*.svg'],
                    dest: '../images/dist/data-url/',
                    ext: '.svg'
                }]
            },
        },
        //Creates data-urls from svg's to minimize http requests (runs on $ grunt && $ grunt svg && $ grunt build)
        grunticon: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '../images/dist/data-url',
                    src: ['*.svg'],
                    dest: '../images/dist/data-url'
                }],
                options: {
                    datasvgcss: '_data-url.svg.scss',
                    cssprefix: "."
                }
            }
        },
        //Removes other insignificant files
        clean: {
            //enabling force to delete files outside working directory
            options: {
                force: true
            },
            //removes unneeded files
            build: {
                src: ['../css/**/*.map', '../js/**/*.map', '../images/dist/data-url/*', '!../images/dist/data-url/_data-url.svg.scss']
            },
            //removes previous minified svg files that might not be needed anymore to avoid unused svg files in production
            svg: {
                src: ['../images/dist/**/*.svg']
            },
            //removes tmp folder from generating css
            tmp: {
                src: ['../tmp']
            },
            //removes tmp folder from generating css
            dist: {
                src: ['../dist']
            }
        },
        svgstore: {
            options: {
                prefix: 'shape-', // This will prefix each <g> ID
            },
            default: {
                files: {
                    '../images/svg-sprite.svg': ['../images/dist/svg/*.svg'],
                }
            },
            dist: {
                files: {
                    '../<%= config.dist %>/images/svg-sprite.svg': ['../images/dist/svg/*.svg'],
                }
            }
        },
        inline: {
            options:{
                exts: ['php'],
                cssmin: true,
                uglify: true
            },
            dist: {
                src: '../index.php',
                dest: '../<%= config.dist %>/index.php'
            }
        },
        //create package
        compress: {
            main: {
                options: {
                    archive: '<%= pkg.name %>.zip'
                },

                expand: true,
                cwd: '../<%= config.dist %>',
                src: ['**/*'],
                dist: 'dist/'
            }
        },
        copy: {
          main: {
            expand: true,
            cwd: '../',
            src: ['*', '**/fonts/', '!index.php', '!<%= pkg.name %>.zip', '!.gitignore'],
            dest: '../<%= config.dist %>/',
            flatten: true,
            filter: 'isFile',
            dot: true
          },
          fonts: {
            expand: true,
            cwd: '../',
            src: ['fonts/**'],
            dest: '../<%= config.dist %>/fonts',
            flatten: true,
            filter: 'isFile',
            dot: true          
           },
        },
        sftp: {
            upload: {
                files: {
                  "./": "<%= pkg.name %>.zip"
                },
                options: {
                  path: '<%= secret.path %>',
                  host: '<%= secret.host %>',
                  username: '<%= secret.username %>',
                  password: '<%= secret.password %>',
                  agent: process.env.SSH_AUTH_SOCK,
                  showProgress: true
                }
            }
        },
        sshexec: {
            clean:{
                command: 'rm -r <%= secret.path %>*',
                options: {
                  host: '<%= secret.host %>',
                  username: '<%= secret.username %>',
                  password: '<%= secret.password %>',
                }
            },
            extract:{
                command: 'cd <%= secret.path %> && unzip <%= pkg.name %>.zip && rm <%= pkg.name %>.zip && mv htaccess .htaccess',
                options: {
                  host: '<%= secret.host %>',
                  username: '<%= secret.username %>',
                  password: '<%= secret.password %>',
                }
            },
        }
    });
    //Loads your tasks from packages.json only when they're needed
    require('jit-grunt')(grunt, {
        bower: 'grunt-bower-task',
        cmq: 'grunt-combine-media-queries',
        imagemin: 'grunt-contrib-imagemin',
        notify_hooks: 'grunt-notify',
        sftp: 'grunt-ssh',
        sshexec: 'grunt-ssh',
        copy: 'grunt-contrib-copy',
        cssmin: 'grunt-contrib-cssmin'
    });
    //Initialize notifications
    //grunt.loadNpmTasks('grunt-notify');
    grunt.task.run('notify_hooks');
    //default taks (triggers on $ grunt)
    grunt.registerTask('default', ['watch', 'sass:dist']);
    grunt.registerTask('deploy', ['clean:dist', 'build', 'copy:main', 'copy:fonts', 'compress', 'sshexec:clean', 'sftp', 'sshexec:extract']);
    //build task (triggers on $ grunt build)
    grunt.registerTask('build', [
        //Convert svg to data URLs
        'svg',
        //Compiles sass
        'sass:dist',
        //Combines media queries
        'cmq',
        //Removes duplicate css
        'cssshrink',
        //Adds vendor prefixes
        'autoprefixer:dist',
        //minify css files
        'cssmin:dist',
        //Generates compressed images
        'newer:imagemin',
        //Removes tmp folder
        'clean:tmp',
        //Compile plugins to single plugin file
        'uglify:dist',
        //generates svg sprite
        'svgstore',
        //inline shizzle
        'inline',
        //Finished notification
        'notify:finishedbuild'
    ]);
    //svg build task (triggers on $ grunt svg)
    grunt.registerTask('svg', [
        //remove previous minified svg's
        'clean:svg',
        //minifies original svg's
        'svgmin',
        //creates data urls from svg's
        'grunticon:dist',
        //removes unneeded files
        'clean:build',
        //generates svg sprite
        'svgstore',
        //Finished notification
        'notify:finishedsvg'
    ]);
};