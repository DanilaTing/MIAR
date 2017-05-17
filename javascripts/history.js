<<<<<<< HEAD
$(function() {
=======
$(function () {
>>>>>>> master
  $('.museumHistory').click(function () {
    $('.museumArchitectureArticle').addClass('hidden')
    $('.museumHistoryArticle').removeClass('hidden')
  });

  $('.museumArchitecture').click(function () {
    $('.museumArchitectureArticle').removeClass('hidden')
    $('.museumHistoryArticle').addClass('hidden')
  });
});
