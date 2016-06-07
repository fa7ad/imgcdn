($ => {
  "use strict";
  const siteUrl = "http://fa7ad.github.io/imgcdn/";
  let listElements = "";

  $.ajax({
    url: "https://api.github.com/repos/fa7ad/imgcdn/contents",
    method: "get",
    success: files => {
      files.forEach(file => {
        if (/(jpeg|jpg|gif|bmp|ico|png|svg)$/.test(file.path))
          listElements += `<li><a href="${siteUrl + file.path}">${file.name}</a></li>`;
      });
      $("#list").html(listElements);
    }
  });

})(jQuery);
