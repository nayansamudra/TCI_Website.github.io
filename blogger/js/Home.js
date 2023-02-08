// function checkData() {
//   $.ajax({
//     type: "GET",
//     url: "https://tcistudents.com/live_quotes/get_quotes",
//     dataTYpe: 'JSON',
//     success: function (data) {
//       counter = 1
//       if (data == 'err') { return }
//       // console.log(data)
//       $(".Sensex").html(data[0][3] + "%");      //Sensex
//       $(".Bank_Nifty").html(data[2][3] + "%");  //BankNifty
//       $(".Nifty_50").html(data[1][3] + "%");    //Nifty 50

//       Sensex = data[0][3]
//       Bank_Nifty = data[2][3]
//       Nifty_50 = data[1][3]

//       Sensex_Price = data[0][1]
//       Bank_Nifty_Price = data[2][1]
//       Nifty_50_Price = data[1][1]
//     }
//   });
//   if (parseFloat(Sensex) > 0) { $('.Sensex').css('color', 'green') } else { $('.Sensex').css('color', 'red') }
//   if (parseFloat(Bank_Nifty) > 0) { $('.Bank_Nifty').css('color', 'green') } else { $('.Bank_Nifty').css('color', 'red') }
//   if (parseFloat(Nifty_50) > 0) { $('.Nifty_50').css('color', 'green') } else { $('.Nifty_50').css('color', 'red') }
// }

$(document).ready(function () {

  counter_1 = counter_2 = counter_3 = counter_course_accordion = 1
  $.ajaxSetup({ async: false }); // to stop async
  console.log("ready!");
  $(".navbar-toggler").on("click", function () {
    $(".navbar-collapse").toggle();
  });
  $('.accordion-collapse').hide()
  $('.dropdown-toggle').on('click', function () {
    $('.dropdown-menu').toggle();
  })
  $('#flush-heading1').on('click', function () {
    $('#flush-collapse1').toggle();
  })
  $('#flush-heading2').on('click', function () {
    $('#flush-collapse2').toggle();
  })
  $('#flush-heading3').on('click', function () {
    $('#flush-collapse3').toggle();
  })

  $('#headingOne').on('click', function () {
    counter_1 += 1
    if (counter_1 % 2 == 0) {
      $('.collapse_1:not(.show)').show()
      $('.collapse_2:not(.show)').hide()
      $('.collapse_3:not(.show)').hide()
    }
    else if (counter_1 % 2 != 0) {
      $('.collapse:not(.show)').delay(200).fadeOut('fast')
      $('.collapse:not(.show)').hide()
    }
  })
  $('#headingTwo').on('click', function () {
    counter_2 += 1
    if (counter_2 % 2 == 0) {
      $('.collapse_1:not(.show)').hide()
      $('.collapse_2:not(.show)').show()
      $('.collapse_3:not(.show)').hide()
    }
    else if (counter_2 % 2 != 0) {
      $('.collapse:not(.show)').delay(200).fadeOut('fast')
      $('.collapse:not(.show)').hide()
    }
  })
  $('#headingThree').on('click', function () {
    counter_3 += 1
    if (counter_3 % 2 == 0) {
      $('.collapse_1:not(.show)').hide()
      $('.collapse_2:not(.show)').hide()
      $('.collapse_3:not(.show)').show()
    }
    else if (counter_3 % 2 != 0) {
      $('.collapse:not(.show)').delay(100).fadeOut('fast')
      $('.collapse:not(.show)').hide()
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

  $('#headingOne_option3').on('click', function () {
    $('#Foundation_Module_Modal').removeClass().addClass('container d-flex justify-content-center align-items-center')
    $('#Pro_Module_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')
    $('#Practical_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')
  })

  $('#headingTwo_option3').on('click', function () {
    $('#Foundation_Module_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')
    $('#Pro_Module_Modal').removeClass().addClass('container d-flex justify-content-center align-items-center')
    $('#Practical_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')
  })

  $('#headingThree_option3').on('click', function () {
    $('#Foundation_Module_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')
    $('#Pro_Module_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')
    $('#Practical_Modal').removeClass().addClass('container d-flex justify-content-center align-items-center')
  })

  // checkData()
  // setInterval(checkData, 15000);
  // setInterval(function () {
  //   counter += 1
  //   if (counter % 2 == 0) {
  //     $(".Sensex").html(Sensex + "%");
  //     $(".Bank_Nifty").html(Bank_Nifty + "%");
  //     $(".Nifty_50").html(Nifty_50 + "%");
  //     if (parseFloat(Sensex) > 0) { $('.Sensex').css('color', 'green') } else { $('.Sensex').css('color', 'red') }
  //     if (parseFloat(Bank_Nifty) > 0) { $('.Bank_Nifty').css('color', 'green') } else { $('.Bank_Nifty').css('color', 'red') }
  //     if (parseFloat(Nifty_50) > 0) { $('.Nifty_50').css('color', 'green') } else { $('.Nifty_50').css('color', 'red') }
  //   }
  //   else if (counter % 2 == 1) {
  //     $(".Sensex").html(parseFloat(Sensex_Price).toFixed(1));
  //     $(".Bank_Nifty").html(parseFloat(Bank_Nifty_Price).toFixed(1));
  //     $(".Nifty_50").html(parseFloat(Nifty_50_Price).toFixed(1));
  //   }
  // }, 2000)

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
