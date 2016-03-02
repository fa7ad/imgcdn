(function() {
  var listEl, siteUrl;

  siteUrl = "http://fa7ad.github.io/imgcdn/";

  listEl = "";

  $.ajax({
    url: "https://api.github.com/repos/fa7ad/imgcdn/contents",
    method: "get",
    success: function(data) {
      var d, i, len;
      for (i = 0, len = data.length; i < len; i++) {
        d = data[i];
        if (/jpg/.test(d.path)){
          listEl += "<li><a href=\"" + (siteUrl + d.path) + "\">" + d.name + "</a></li>";
        }
      }
      return $("#list").html(listEl);
    }
  });

}).call(this);
