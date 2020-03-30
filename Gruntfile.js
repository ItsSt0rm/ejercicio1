module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
            t1: {
                files: {
                    'js/main.min.js': ['js/main.js']
                }
            }
		},
		
		cssmin: {
			css: {
				src: 'css/styles.css',
				dest: 'css/styles.min.css'
			}
		}
    });
    
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	
}