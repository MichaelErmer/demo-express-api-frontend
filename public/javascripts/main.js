(function() {
  setInterval(function() {
    fetch('/api/test')
      .then(function(request) {
        return request.json();
      })
      .then(function(json) {
        console.log(json);
        document.getElementById('test').innerText = json.test;
      })
      .catch(function(error) {
        console.log(error);
      });
  }, 1000)
})()