/**
 * Config file
 */
module.exports = {

    /**
     * Scss settings
     *
     */
    scss: {
        src: './src/scss/main.scss',
        glob: './src/scss/**/*',
        dist: './dist/css/',
        settings: {
            outputStyle: 'expanded'
        },
        autoprefixer:{
            browsers: [
                'last 2 version',
                '> 1%',
                'ie 8',
                'ie 9',
                'ios 6',
                'android 4'
            ]
        }
    },

    /**
     * SVG settings
     */
    svg: {
        glob: './src/svg/**/*',
        dist: './dist/svg/',
        clean: './dist/svg/**/*'
    },

    /**
     * Images
     */
    images: {
        glob: './src/images/**/*{.png,.jpg}',
        dist: './dist/images/',
    },

    /**
     * Files
     */
    copyFiles: {
        glob: './src/**/*{.htaccess,.mp3}',
        dist: './dist/',
    },

    /**
     * Files
     */
    files: ['./src/**/*.html', './src/**/*.nunjucks'],

    /**
     * Js Settings
     */
    js: {
        entry: './src/index.js',
        glob: ['./src/**/*.js'],
        dist: './dist/js/'
    },

    /**
     * BrowserSync settings
     */
    browsersync: {
        server: {
            baseDir: './dist/',
            index: "index.html"
        },
        notify: false
    },
};
