$(function functionName() {

  var images = $('.gallery img').length - 1;
  console.log(images);

  var m = -1;

  $('.layout').mouseenter(function () {
    $('.buttons').css({'display':'inline-flex'});
  })
  $('.layout').mouseleave(function () {
    $('.buttons').css({'display':'none'});
  })

  $('.gallery img').eq(3).addClass("visible");
  $('.gallery img').not($('.gallery img').eq(3)).removeClass("visible");

  $(function func() {
    if ( m < images) {
      m++ ;
      $('.gallery img').eq(m).addClass("visible");
      $('.gallery img').not($('.gallery img').eq(m)).removeClass("visible");
      console.log('m' + m);
    } else {
      m = 0;
      $('.gallery img').eq(m).addClass("visible");
      $('.gallery img').not($('.gallery img').eq(m)).removeClass("visible");
      console.log('m' + m);
    };

    var timerId = setTimeout (func, 5000);
    timerId
  });

  $('.buttons div:first-of-type').click( function () {
    if ( 0 < m ) {
      m-- ;
      $('.gallery img').eq(m).addClass("visible");
      $('.gallery img').not($('.gallery img').eq(m)).removeClass("visible");
      console.log('m' + m);
    } else {
      m = images;
      $('.gallery img').eq(m).addClass("visible");
      $('.gallery img').not($('.gallery img').eq(m)).removeClass("visible");
      console.log('m' + m);
    };
  });

  $('.buttons div:last-of-type').click( function () {
    if ( m < images ) {
      m++ ;
      $('.gallery img').eq(m).addClass("visible");
      $('.gallery img').not($('.gallery img').eq(m)).removeClass("visible");
      console.log('m' + m);
    } else {
      m = 0;
      $('.gallery img').eq(m).addClass("visible");
      $('.gallery img').not($('.gallery img').eq(m)).removeClass("visible");
      console.log('m' + m);
    };
  });

});
