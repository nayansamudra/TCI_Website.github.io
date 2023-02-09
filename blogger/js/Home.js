$(document).ready(function () {

  counter_1 = counter_2 = counter_3 = counter_course_accordion = 1
  $.ajaxSetup({ async: false }); // to stop async
  console.log("ready!");
  $(".navbar-toggler").on("click", function () {
    $(".navbar-collapse").toggle();
  });

  // $('.accordion-collapse').hide()

  $('.dropdown-toggle').on('click', function () {
    $('.dropdown-menu').toggle();
  })

  $('#heading_One').on('click', function () {
    $('#collapse_Two').removeClass('show in')
    $('#collapse_Three').removeClass('show in')
    $('#heading_Two button').addClass('collapsed')
    $('#heading_Three button').addClass('collapsed')
    $('#heading_Two button').attr('aria-expanded', 'false')
    $('#heading_Three button').attr('aria-expanded', 'false')
    if ($('#collapse_One').hasClass('in')) {
      $('#collapse_One').removeClass('show')
    }
    else {
      $('#collapse_One').addClass('show')
    }
  })
  $('#heading_Two').on('click', function () {
    $('#collapse_One').removeClass('show in')
    $('#collapse_Three').removeClass('show in')
    $('#heading_One button').addClass('collapsed')
    $('#heading_Three button').addClass('collapsed')
    $('#heading_One button').attr('aria-expanded', 'false')
    $('#heading_Three button').attr('aria-expanded', 'false')
    if ($('#collapse_Two').hasClass('in')) {
      $('#collapse_Two').removeClass('show')
    }
    else {
      $('#collapse_Two').addClass('show')
    }
  })
  $('#heading_Three').on('click', function () {
    $('#collapse_Two').removeClass('show in')
    $('#collapse_One').removeClass('show in')
    $('#heading_Two button').addClass('collapsed')
    $('#heading_One button').addClass('collapsed')
    $('#heading_Two button').attr('aria-expanded', 'false')
    $('#heading_One button').attr('aria-expanded', 'false')
    if ($('#collapse_Three').hasClass('in')) {
      $('#collapse_Three').removeClass('show')
    }
    else {
      $('#collapse_Three').addClass('show')
    }
  })

  $('.course-accordion').on('click', function () {
    counter_course_accordion += 1
    if (counter_course_accordion % 2 == 0) {
      $(this).addClass('active')
      $(this).next().css('max-height', 'fit-content')
    }
    else if (counter_course_accordion % 2 != 0) {
      $(this).removeClass('active')
      $('.course-panel').css('max-height', '0px')
    }
  })

  $(window).resize(function () {
    if ($(window).width() < 1200) {
      $("#Rocket_container")
        .removeClass("container")
        .addClass("container-fluid");
    }
    if ($(window).width() > 1200) {
      $("#Rocket_container")
        .removeClass("container-fluid")
        .addClass("container");
    }
    if ($(window).width() < 413) {
      $("#For_Mobile_View_image-item").removeClass("justify-content-center");
    }
    if ($(window).width() > 413) {
      $("#For_Mobile_View_image-item").addClass("justify-content-center");
    }
  });

  if ($(window).width() < 1200) {
    $("#Rocket_container").removeClass("container").addClass("container-fluid");
  }
  if ($(window).width() > 1200) {
    $("#Rocket_container").removeClass("container-fluid").addClass("container");
  }
  if ($(window).width() < 413) {
    $("#For_Mobile_View_image-item").removeClass("justify-content-center");
  }
  if ($(window).width() > 413) {
    $("#For_Mobile_View_image-item").addClass("justify-content-center");
  }
});
