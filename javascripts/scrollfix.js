$(function () {

  var l = $('.layout');
  var doc = $(document).height();
  var height = l.height();
  var h = height - height * 2;
  var article = $('.column3').height();

  $(window).scroll (function checkOffset() {
    var offset = l.offset().top - $(window).scrollTop();

    if (offset <= h) {
      $('#fixme').addClass('fixed')
      $('#fixme2').addClass('fixed')
      $('#fixme3').addClass('fixed')
      // $('#fixme').css({"position":"fixed","top":"0", "z-index":"1"});
      // $('#fixme2').css({"position":"fixed","top":"0", "margin-left":"262px", "z-index":"0"});
      // $('#fixme3').css({"position":"fixed","margin-top":-height-3, "margin-left":"0"});
      $('.column3').css({"margin-left":"524px", "z-index":"3", "height":doc - height});
    } else {
      $('#fixme').removeClass('fixed')
      $('#fixme2').removeClass('fixed')
      $('#fixme3').removeClass('fixed')
      // $('#fixme').css({"position":"static","top":"0"});
      // $('#fixme2').css({"position":"static","top":"0", "margin-left":"0"});
      // $('#fixme3').css({"position":"inherit", "margin-left":"0"});
      // $('#fixme3 p').css({"position":"absolute"});
      $('.column3').css({"margin-left":"0", "z-index":"3", "height":"100vh"});
    };
  });
});
