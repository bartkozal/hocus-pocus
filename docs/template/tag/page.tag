<page>
  <div></div>

  <style scoped>
    h3:first-child {
      margin-top: 0;
    }
  </style>

  <script>
    var self = this;

    getHTML = function(name) {
      var request = new XMLHttpRequest();
      var url = 'html/' + name + '.html';

      request.open('GET', url, true);
      request.onload = function() {
        self.root.innerHTML = this.response;
      };
      request.send();
    }

    self.on('mount', getHTML(window.location.hash.substring(1) || 'home'));

    riot.route('*', function(name) {
      getHTML(name);
      self.update();
    })
  </script>
</page>
