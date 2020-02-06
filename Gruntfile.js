module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			css: {
				src: 'css/styles.css',
				dest: 'css/styles.min.css'
			}
		}
    });
    
    grunt.loadNpmTasks('grunt-contrib-cssmin');
}