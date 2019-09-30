$(function () {

    $('main section#catch a#to-presenter').hover(function () {
      $("main section#catch div.ib").addClass("preh");
    }, function () {
      $("main section#catch div.ib").removeClass("preh");
    });

  $("main section#catch a#to-presenter").click(function () {
    scroll_screen("#presenter", "fast", 0,0);
    return false;
  });

  function scroll_screen(id, speed, revision, revision_sp) {

    var vp_width = $(window).width();
    var target_height = $(id).offset().top;

    if (vp_width > 640) {
      $('html,body').animate({ scrollTop: target_height - revision }, speed);
    }
    else {
      $('html,body').animate({ scrollTop: target_height - revision_sp }, speed);
    }

  }
});
