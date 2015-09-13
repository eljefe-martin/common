Notes for grunt--

install grunt in the root project folder using --save-dev

create a file named gruntfile.js with the following format:

module.exports = function(grunt) {

    //Configure task(s)
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'src/js/*.js',
                dest: 'js/script.min.js'
            }
        }
    });

    //Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Register task(s)

    grunt.registerTask('default',['uglify:build]);

};

Steps for a task.

Load the plugin 
    npm install..
Add configuration to gruntfile.js

Load plugin in gruntfile.js

Register the task in gruntfile.js