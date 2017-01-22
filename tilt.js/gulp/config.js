/**
 * Config file
 */
var path = './';

module.exports = {

    /**
     * Scss settings
     */
    scss: {
        src: path + 'scss/main.scss',
        glob: path + 'scss/**/*.scss',
        settings: {
            outputStyle: 'expanded'
        },
        dest: path + 'css/',
        prefix: [
            'last 2 version',
            '> 1%',
            'ie 8',
            'ie 9',
            'ios 6',
            'android 4'
        ]
    },

    /**
     * Files
     */
    files: path + 'index.html',

    /**
     * Js Settings
     */
    js: {
        glob: [path + 'js/**/*.js', path + 'src/**/*.js'],
        dest: path + 'dest/'
    },

    /**
     * SVG settings
     */
    svg: {
        svgsprite: {
            src: path + 'images/src/svg/sprites/**/*.svg',
            dest: path + 'images/dest/svg/',
            settings: {
                shape: {
                    spacing: {
                        padding: 0
                    },
                    dest: 'individual'
                },
                mode: {
                    view: {
                        bust: false,
                        render: {
                            scss: true
                        }
                    },
                    symbol: true
                }
            }
        },
        src: path + 'images/src/svg/**/*.svg',
        dest: path + 'images/dest/svg/'
    },

    /**
     * BrowserSync settings
     */
    browsersync: {
        server: {
            baseDir: path,
            index: "index.html"
        },
        notify: false
    },
};
