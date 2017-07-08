(function() {
  var $, $result, $text, error, obj;

  $ = document.querySelector.bind(document);

  $text = $('.text');

  $result = $('.result');

  obj = {
    f_convert_date: function(ts) {
      var date, exd;
      exd = new Date(ts.slice(0, 10) / 1000);
      date = {
        d: exd.getDate() < 10 ? '0' + exd.getDate() : exd.getDate(),
        m: exd.getMonth() < 9 ? '0' + exd.getMonth() + 1 : exd.getMonth() + 1,
        y: exd.getFullYear()
      };
      return date.d + '/' + date.m + '/' + date.y;
    },
    f_reverse: function(str) {
      var str;
      str = str.replace(/-|_|\/|[\s\.]/g, '-').split('-').reverse().join('-');
      return new Date(str).valueOf() / 1000;
    }
  };

  error = {
    length: 'LENGTH ERROR',
    type: 'INPUT TYPE ERROR'
  };

  $text.oninput = function() {
    var data;
    data = this.value.trim();
    if (data.match(/^\d+$/g)) {
      $result.innerHTML = obj.f_convert_date(data);
    } else if (data.match(/-|_|\/|[\s\.]/g)) {
      $result.innerHTML = obj.f_reverse(data);
    }
  };

}).call(this);