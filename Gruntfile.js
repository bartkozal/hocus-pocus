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
          base: 'docs'
        }
      }
    },
    'gh-pages': {
      options: {
        base: 'docs'
      },
      src: '**/*'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('default', ['connect', 'watch']);
};
