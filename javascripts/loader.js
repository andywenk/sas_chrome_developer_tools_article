// loader.js
var loader = (function () {
  var self = this;
  var timeout = 2000;
  var json_path = 'json';
  var error_location = $('.error');

  load = function () {
    load_data_from_json()
  }

  load_data_from_json = function () {
    show_waiting_text();

    $.getJSON(json_url())
    .done(function (data) {
      self.insert_data(data);
    })
    .fail(function(xhr, status, error) {
      var err = ["[AJAX Fehler]:", status, error].join(' ');
      error_location.html(err);
    });
  }

  show_waiting_text = function () {
    $('#loader').html("<i><b>loading data ... (dauert " + timeout + " ms)</b></i>")
  }

  json_url = function () {
    return [json_path, 'data.json'].join('/')
  }

  insert_data = function (data) {
    setTimeout(
      function () {
        $('#loader').html(data['wiki-developer-tools'])
      },
      timeout
    );
  }

  return {
    load: load
  }
}) ()
