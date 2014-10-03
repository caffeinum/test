module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            dist: {
                // the files to concatenate
                src: ['js/*.js'],
                // the location of the resulting JS file
                dest: 'build/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'build/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
		less: {
			development: {
				options: {
					paths: ["code/editor/less"]
				},
				files: {
					"web/css/editor.css": "code/editor/less/style.less"
				}
			},
			production: {
				options: {
					paths: ["code/editor/less"],
					//cleancss: true,
				},
				files: {
					"web/css/editor.css": "code/editor/less/style.less"
				}
			}
		},
        watch: {
			scripts: {
				files: ['<%= concat.dist.src %>'],
				tasks: ['concat', 'uglify']
			},
			css: {
				files: 'code/editor/less/*.less',
				tasks: ['less']
			}
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'concat']);

};