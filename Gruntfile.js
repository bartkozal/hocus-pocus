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
        src: 'docs/*.css'
      }
    },

    jekyll: {
      options: {
        src : 'docs',
        config: 'docs/_config.yml'
      },
      dist: {
        options: {
          dest: 'build'
        }
      }
    },

    watch: {
      files: ['sass/*.sass', 'docs/*.css'],
      tasks: ['sass', 'autoprefixer'],
      options: {
        livereload: true
      }
    },

    buildcontrol: {
      options: {
        dir: 'build',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:bkzl/hocus-pocus.git',
          branch: 'gh-pages'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-build-control');

  grunt.registerTask('default', ['sass', 'autoprefixer', 'jekyll']);
  grunt.registerTask('publish', ['jekyll', 'buildcontrol'])
};
