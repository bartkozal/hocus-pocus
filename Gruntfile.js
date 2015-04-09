module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: {
          'docs/hocus-pocus.css': 'sass/hocus-pocus.sass'
        }
      }
    },
    autoprefixer: {
      no_dest: {
        src: 'docs/hocus-pocus.css'
      }
    },
    watch: {
      files: ['**/*.sass'],
      tasks: ['sass', 'autoprefixer'],
      options: {
        livereload: true
      }
    },
    connect: {
      server: {
        options: {
          port: 3000,
          base: 'docs/'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['connect', 'watch']);
};
