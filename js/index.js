($ => {
  "use strict";
  const siteUrl = "http://fa7ad.github.io/imgcdn/";
  let list = "";

  $.get("https://api.github.com/repos/fa7ad/imgcdn/contents").done(files => {
    files.forEach(file => {
      if (/(jpeg|jpg|gif|bmp|ico|png|svg)$/.test(file.path))
        list += `<li><a href="${siteUrl + file.path}">${file.name}</a></li>`;
    });
    $("#list").html(list);
  });

})(jQuery);
