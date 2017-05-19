$(function functionName() {

  var images = $('.gallery img').length;
  console.log(images);
  //
  var m = -1;
  function check() {
    var real = -1 <= m <= images;
    console.log(real);
  }

  // function lol() {
  //   function countGallery() {
  //     if (real) {
  //       m = m + 1;
  //       console.log(m);
  //     } else {
  //       m = 0;
  //       console.log(m);
  //     }
  //     // setTimeout(countGallery(), 5000);
  //   };
  //
  //   countGallery()
  //
  //   $(function image () {
  //     $('.gallery img').eq(m).addClass("visible");
  //     // setTimeout(image(), 5000);
  //   });
  //
  // }

  var m = -1;

  $('.gallery img').eq(1).addClass("visible");

  $('.gallery img').click(function () {
    check();
    if (-1 <= m < 4) {
      m++ ;
      $('.gallery img').eq(m).addClass("visible");
      $('.gallery img').not($('.gallery img').eq(m)).removeClass("visible");
      console.log(m);
    } else if (m = 3) {
      check();
      $('.gallery img').eq(1).addClass("visible");
      $('.gallery img').not($('.gallery img').eq(m)).removeClass("visible");
      m = 0;
      console.log(m);
    };
  });

});
