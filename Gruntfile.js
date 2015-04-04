/*global module:false*/
module.exports = function(grunt) {
  var package = grunt.file.readJSON('package.json'),
    jsConcatProperty = package.jsConcatArray,
    cssConcatProperty = package.cssConcatArray;//,
    // hintProperty = package.hintArray;
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> */',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.js': jsConcatProperty,
          'dist/<%= pkg.name %>.css': cssConcatProperty,
        }
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: 'dist/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        // eqeqeq: true,
        immed: true,
        // latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        // undef: true,
        // unused: true,
        // boss: true,
        eqnull: true,
        globals: {
          jQuery: true
        }
      },
      // beforeconcat: concatProperty,
      // afterconcat: ['dist/js.js'],
      gruntfile: {
        src: 'Gruntfile.js'
      },
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};
