module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: {
          'test/hocus-pocus.css': 'hocus-pocus.sass'
        }
      }
    },
    autoprefixer: {
      no_dest: {
        src: 'test/hocus-pocus.css'
      }
    },
    watch: {
      files: ['**/*.sass'],
      tasks: ['sass', 'autoprefixer'],
    },
    connect: {
      server: {
        options: {
          port: 3000,
          base: 'test/'
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
