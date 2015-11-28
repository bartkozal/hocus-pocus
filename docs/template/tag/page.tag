<page>
  <div></div>

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

    self.on('mount', getHTML('home'));

    riot.route('*', function(name) {
      getHTML(name);
      self.update();
    })
  </script>
</page>
