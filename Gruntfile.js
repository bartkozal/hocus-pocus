module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    autoprefixer: {
      no_dest: {
        src: 'build/css/docs.css'
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

    shell: {
      jekyllServe: {
        command: 'jekyll serve --watch --incremental',
        options: {
          async: true,
          stdout: true
        }
      }
    },

    watch: {
      scripts: {
        files: ['**/*.md', '**/*.sass', '**/*.html', '**/*.ext'],
        tasks: ['autoprefixer'],
        options: { livereload: true }
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

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-build-control');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-shell-spawn');

  grunt.registerTask('serve', ['shell', 'watch']);
  grunt.registerTask('publish', ['jekyll', 'autoprefixer', 'buildcontrol']);
};
