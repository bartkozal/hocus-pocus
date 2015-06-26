module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    autoprefixer: {
      no_dest: {
        src: 'build/css/hocus-pocus.css'
      }
    },

    jekyll: {
      options: {
        src : 'docs',
        config: '_config.yml'
      },
      dist: {
        options: {
          dest: 'build'
        }
      }
    },

    watch: {
      scripts: {
        files: ['**/*.md', '**/*.sass'],
        tasks: ['jekyll', 'autoprefixer'],
      },
    },

    connect: {
      server: {
        options: {
          port: 4000,
          base: 'build'
        }
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

  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-build-control');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('server', ['connect', 'watch']);
  grunt.registerTask('publish', ['jekyll', 'autoprefixer', 'buildcontrol'])
};
