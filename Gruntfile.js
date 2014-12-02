module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			sass: {
				files: ['library/sass/**/*.{scss,sass}','library/sass/_partials/**/*.{scss,sass}'],
				tasks: ['sass:dist']
			},
			livereload: {
				files: ['*.html', '*.php', 'library/js/**/*.{js,json}', 'public/library/css/*.css','library/img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
				options: {
					livereload: true
				}
			}
		},
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'expanded'
			},
			dist: {
				files: {
					'public/library/css/screen.css': 'library/sass/screen.scss'
				}
			}
		},
	    express: {
	      options: {
	        port: 1337,
	      },
	      dev: {
	        options: {
	          script: 'index.js'
	        }
	      }
	    },
	});
	grunt.registerTask('default', ['sass:dist', 'express:dev', 'watch']);
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express-server');
};