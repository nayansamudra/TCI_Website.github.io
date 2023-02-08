// document.addEventListener("DOMContentLoaded", function (event) {
//     function OTPInput() {
//         const inputs = document.querySelectorAll('#otp > *[id]');
//         for (let i = 0; i < inputs.length; i++) {
//             inputs[i].addEventListener('keydown', function (event) {
//                 if (event.key === "Backspace") {
//                     inputs[i].value = '';
//                     if (i !== 0) inputs[i - 1].focus();
//                     $('#send_btn').attr('disabled', 'disabled');
//                     $('#validate_btn').attr('disabled', 'disabled');
//                 } else {
//                     if (i === inputs.length - 1 && inputs[i].value !== '') { return true; }
//                 }
//             });
//         }
//     }
//     OTPInput();
// });

document.querySelectorAll('.mobile-verify.pass').forEach(el => el.onkeyup = e => {
    let regexEmail = /^\d+$/;
    if (e.target.value.match(regexEmail)) {
        try {
            el.nextElementSibling.focus()
            $('#send_btn').attr('disabled', 'disabled');
            $('#validate_btn').attr('disabled', 'disabled');
            enablesubmitbutton()
        } catch (error) {
            console.log('u r on last sibling')
            enablesubmitbutton()
        }
        return true;
    } else {
        console.log('wrong')
        e.target.value = ''
        return false;
    }
})

function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
        object.value = object.value.slice(0, object.maxLength)
}

function isNumeric(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

document.querySelectorAll('.form_input').forEach(el => el.onkeyup = e => {
    enablesubmitbutton()
})

function enablesubmitbutton() {
    let first = $('#first_1').val()
    let first_1 = $('#first').val()
    // let second = $('#second_1').val()
    // let second_1 = $('#second').val()
    // let third = $('#third_1').val()
    // let third_1 = $('#third').val()
    // let fourth = $('#fourth_1').val()
    // let fourth_1 = $('#fourth').val()
    // let fifth = $('#fifth_1').val()
    // let fifth_1 = $('#fifth').val()
    // let sixth = $('#sixth_1').val()
    // let sixth_1 = $('#sixth').val()
    // let seventh = $('#seventh_1').val()
    // let eighth = $('#eighth_1').val()
    // let ninth = $('#ninth_1').val()
    // let tenth = $('#tenth_1').val()
    let name = $("#name_ip").val()
    let email = $("#email_ip").val()
    let desc = $("#difficulties").val()
    // if (first != '' && second != '' && third != '' && fourth != '' && fifth != '' && sixth != '' && seventh != '' && eighth != '' && ninth != '' && tenth != '') {
    if (first != '') {
        $('#send_btn').removeAttr('disabled');
    }

    // if (first_1 != '' && second_1 != '' && third_1 != '' && fourth_1 != '' && fifth_1 != '' && sixth_1 != '') {
    if (first_1 != '') {
        $('#validate_btn').removeAttr('disabled');
    }

    if (name != '' && email != '' && desc != '' && global_email_valid == true) {
        $('#submit_btn').removeAttr('disabled');
    }
}

function SendOtp() {
    let first = $('#first_1').val()
    // let second = $('#second_1').val()
    // let third = $('#third_1').val()
    // let fourth = $('#fourth_1').val()
    // let fifth = $('#fifth_1').val()
    // let sixth = $('#sixth_1').val()
    // let seventh = $('#seventh_1').val()
    // let eighth = $('#eighth_1').val()
    // let ninth = $('#ninth_1').val()
    // let tenth = $('#tenth_1').val()
    if (first != NaN && first != '') {
        $('#mobile_number').text(first)
    }

    let ccode = $(".iti__selected-flag").attr('title').match(/\d+/)[0];
    // let phone = ccode + first + second + third + fourth + fifth + sixth + seventh + eighth + ninth + tenth
    let phone = ccode + first
    phone_number = phone

    console.log("phone: ", phone)
    console.log("phone_number: ", phone_number)

    $.post(api_leads_url + "/send_otp", { name: 'Trader', phone: phone }, function (data, status) {
        console.log("Data: " + data + "\nStatus: " + status);
        if (data == "202") {
            $('#Send_OTP_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')        // Modal 1
            $('#Validate_OTP_Modal').removeClass().addClass('container d-flex justify-content-center align-items-center')           // Modal 2
            $('#User_Details_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')    // Modal 3
            $('#Modal_4').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')               // Modal 4
            $('#Modal_5').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')               // Modal 5
            $('#Modal_6').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')               // Modal 6
            global_otp_ct += 1
            // lock
            $('#send_btn').off()
            $('#resend_btn').off()
            if (global_otp_ct >= 2) {
                $("#ph_msg").text("")
                $("#msg_text_for_otp").show()
                $("#resend_btn").attr('disabled', 'disabled')
                $("#ph_msg").text("OTP sent on Whatsapp, Try again after 1 Minute")
                setTimeout(() => {
                    $("#msg_text_for_otp").hide()
                }, 10000);
                setTimeout(function () {
                    $("#resend_btn").removeAttr('disabled')
                    $("#send_btn").click(function () {
                        SendOtp()
                    })
                    $("#resend_btn").click(function () {
                        SendOtp()
                    })
                }, 30000);
            }
            else {
                $("#send_btn").click(function () {
                    SendOtp()
                })
                $("#resend_btn").click(function () {
                    SendOtp()
                })
            }

            // enable evt listner
            $("#validate_btn").click(function () {
                verify_otp()
            })
        }
        else if (data == "phone_registered_form_remain") {
            $('#Send_OTP_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')        // Modal 1
            $('#Validate_OTP_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')    // Modal 2
            $('#User_Details_Modal').removeClass().addClass('container d-flex justify-content-center align-items-center')           // Modal 3
            $('#Modal_4').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')               // Modal 4
            $('#Modal_5').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')               // Modal 5
            $('#Modal_6').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')               // Modal 6
            // lock
            $('#send_btn').off()
            // $("#ph_msg").text("Already registered, Fill details & submit form to Proceed")
            // setTimeout(function () {
            //     $("#send_btn").click(function () {
            //         SendOtp()
            //     })
            // }, 30000);

            //disable verify otp ip

            // $("#otp_ip").prop('disabled', true);
            $("#submit_btn").click(function () {
                submit_lead_form()
            })
            // $("#verify_otp_btn").off()
            // $("#cc").prop('disabled', 'true')
            // $("#number_ip").prop('disabled', 'true')
            // $("#verify_msg").css("color", "green")
            // $("#verify_msg").text("OTP Already Verified")
        }
        else if (data == "phone_already_registered") {
            $('#Send_OTP_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')        // Modal 1
            $('#Validate_OTP_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')    // Modal 2
            $('#User_Details_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')    // Modal 3
            $('#Modal_4').removeClass().addClass('container d-flex justify-content-center align-items-center')                      // Modal 4
            $('#Modal_5').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')               // Modal 5
            $('#Modal_6').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')               // Modal 6

            // $("#ph_msg").text("We have sent a message on Whatsapp, Check Now")
            $('#send_btn').off()
            // setTimeout(function () {
            //     $("#send_btn").click(function () {
            //         SendOtp()
            //     })
            // }, 30000);
        }
        else {
            $('#Send_OTP_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')        // Modal 1
            $('#Validate_OTP_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')    // Modal 2
            $('#User_Details_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')    // Modal 3
            $('#Modal_4').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')               // Modal 4
            $('#Modal_5').removeClass().addClass('container d-flex justify-content-center align-items-center')                      // Modal 5
            $('#Modal_6').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')               // Modal 6
            // $("#ph_msg").text("Phone Number Incorrect")
        }
    });
}

const verify_otp = () => {

    let first_1 = $('#first').val()
    // let second_1 = $('#second').val()
    // let third_1 = $('#third').val()
    // let fourth_1 = $('#fourth').val()
    // let fifth_1 = $('#fifth').val()
    // let sixth_1 = $('#sixth').val()

    // let otp = first_1 + second_1 + third_1 + fourth_1 + fifth_1 + sixth_1
    let otp = first_1
    console.log(otp)

    $("#ph_msg").text("")
    $("#msg_text_for_otp").show()
    $.post(api_leads_url + "/verify_otp", { otp: otp }, function (data, status) {
        console.log("Data: " + data + "\nStatus: " + status);
        if (data == "success") {

            $("#submit_btn").removeClass("temp_disb")
            $("#submit_btn").click(function () {
                submit_lead_form()
            })
            $("#ph_msg").text("OTP Verified")
            $("#verify_otp_btn").off()
            // $("#cc").prop('disabled', 'true')
            // $("#number_ip").prop('disabled', 'true')
            $("#ph_msg").css("color", "#324ed4")
            // $("#verify_msg").text("")
            $('#GetFreeCounseling').animate({
                scrollTop: $("#submit_btn").offset().top
            }, 2000);
            $('#Send_OTP_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')      // Modal 1
            $('#Validate_OTP_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')  // Modal 2
            $('#User_Details_Modal').removeClass().addClass('container d-flex justify-content-center align-items-center')         // Modal 3
            $('#Modal_4').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')       // Modal 4
            $('#Modal_5').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')       // Modal 5
            $('#Modal_6').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')       // Modal 6
        }
        else {
            $('#first').val('')
            $('#second').val('')
            $('#third').val('')
            $('#fourth').val('')
            $('#fifth').val('')
            $('#sixth').val('')
            $("#ph_msg").css("color", "red")
            $("#ph_msg").text("OTP Incorrect")
            setTimeout(() => {
                $("#msg_text_for_otp").hide()
            }, 10000);
            $('#Send_OTP_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')      // Modal 1
            $('#Validate_OTP_Modal').removeClass().addClass('container d-flex justify-content-center align-items-center')         // Modal 2
            $('#User_Details_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')  // Modal 3
            $('#Modal_4').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')       // Modal 4
            $('#Modal_5').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')       // Modal 5
            $('#Modal_6').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')       // Modal 6
        }
    });
}

const validateEmail = () => {
    let email = $("#email_ip").val()
    let res = String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    console.log(res)
    if (res != null) {
        global_email_valid = true
        $("#email_ip").css("border-color", "#324ed4")
    }
    else {
        global_email_valid = false
        $("#email_ip").css("border-color", "red")
    }
}

submit_lead_form = () => {
    let name = $("#name_ip").val()
    let email = $("#email_ip").val()
    // let ccode = $("#cc").val();
    // let phone = $("#number_ip").val()
    // ccode = ccode.substring(1);
    let phone = phone_number

    if (global_email_valid == false) { console.log('em_invalid'); return }
    if (global_email_valid == true) { }

    var language = 'hindi'
    if ($('#hindi').prop('checked')) { language = 'hindi' }
    else { language = 'english' }

    var state = $('#country-state :selected').text();

    var trading_exp = "beginner"
    if ($('#beginner').prop('checked')) { trading_exp = "beginner" }
    else if ($('#intermediate').prop('checked')) { trading_exp = "intermediate" }
    else { trading_exp = "pro" }

    let desc = $("#difficulties").val()

    if (name == "" || email == "" || desc == "") {
        $("#final_msg").text("Enter All above Fields")
        console.log("empty_fileds_submit")
        return
    }

    console.log(name, email, phone, language, trading_exp, desc, state)

    $.post(api_leads_url + "/submit_form", { name: name, email: email, phone: phone, state: state, language: language, trading_exp: trading_exp, desc: desc }, function (data, status) {
        console.log("Data: " + data + "\nStatus: " + status);
        if (data == "success") {
            console.log("form submitted success")
            setTimeout(function () {
                $(".btn-close").trigger('click')
            }, 5500);
            $('#User_Details_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')
            $('#Modal_6').removeClass().addClass('container d-flex justify-content-center align-items-center')
            // $("#success_img").fadeIn(500, function () { $("#success_img").delay(1500).fadeOut(500) })
        }
    });
}

$('.btn-close').click(function () {
    $('#Send_OTP_Modal').removeClass().addClass('container d-flex justify-content-center align-items-center')
    $('#Validate_OTP_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')
    $('#User_Details_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')
    $('#Modal_4').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')
    $('#Modal_5').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')
    $('#Modal_6').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')
    $('#send_btn').attr('disabled', 'disabled');
    $('#validate_btn').attr('disabled', 'disabled');
    $('#submit_btn').attr('disabled', 'disabled');
    $('#first_1').val("")
    $('#first').val("")
    // $('#second_1').val("")
    // $('#second').val("")
    // $('#third_1').val("")
    // $('#third').val("")
    // $('#fourth_1').val("")
    // $('#fourth').val("")
    // $('#fifth_1').val("")
    // $('#fifth').val("")
    // $('#sixth_1').val("")
    // $('#sixth').val("")
    // $('#seventh_1').val("")
    // $('#eighth_1').val("")
    // $('#ninth_1').val("")
    // $('#tenth_1').val("")
    $("#name_ip").val("")
    $("#email_ip").val("")
    $("#difficulties").val("")
})

$(document).ready(function () {

    global_otp_ct = 0

    // $('#otp_ip').on("input", function () {
    //     let ip = this.value
    //     if (ip.length > 0 && ip.length < 6) {
    //         console.log("e 6 dig")
    //         $("#verify_msg").css("color", "red")
    //         $("#verify_msg").text("Enter 6 Digit OTP")
    //     }
    //     else if (ip.length == 6) {
    //         console.log("hiding not,show rsp")
    //         verify_otp()
    //     }
    // });

    // let a = $(window).width()
    // if ($(window).width() > 600) {
    //     var res = (25 / 100) * a;
    //     console.log(res)
    // }
    // else {
    //     var res = (50 / 100) * a;
    //     console.log(res)
    // }


    // $("#success_img img").width(res)
    api_leads_url = "https://tcistudents.com/leads"
    global_email_valid = false
    // css fix
    $(".rm_maxh").css("max-height", "initial")

    $("#send_btn").click(function () {
        SendOtp()
    })

    $('#GetFreeCounseling').on('hidden.bs.modal', function () {
        console.log("Modal is close")
        $('#Send_OTP_Modal').removeClass().addClass('container d-flex justify-content-center align-items-center')
        $('#Validate_OTP_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')
        $('#User_Details_Modal').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')
        $('#Modal_4').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')
        $('#Modal_5').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')
        $('#Modal_6').removeClass().addClass('container d-none d-flex justify-content-center align-items-center')
        $('#send_btn').attr('disabled', 'disabled');
        $('#validate_btn').attr('disabled', 'disabled');
        $('#submit_btn').attr('disabled', 'disabled');
        $('#first_1').val("")
        $('#first').val("")
        // $('#second_1').val("")
        // $('#second').val("")
        // $('#third_1').val("")
        // $('#third').val("")
        // $('#fourth_1').val("")
        // $('#fourth').val("")
        // $('#fifth_1').val("")
        // $('#fifth').val("")
        // $('#sixth_1').val("")
        // $('#sixth').val("")
        // $('#seventh_1').val("")
        // $('#eighth_1').val("")
        // $('#ninth_1').val("")
        // $('#tenth_1').val("")
        $("#name_ip").val("")
        $("#email_ip").val("")
        $("#difficulties").val("")
    })

    $('#GetFreeCounseling').on('shown.bs.modal', function () {
        $('html').css('overflow', 'hidden');
    }).on('hidden.bs.modal', function () {
        $('html').css('overflow', 'auto');
    })

    $('#Tredcode_Modal').on('shown.bs.modal', function () {
        console.log('tredcode_modal is open')
        $('html').css('overflow', 'hidden');
    }).on('hidden.bs.modal', function () {
        console.log('tredcode_modal is close')
        $('html').css('overflow', 'auto');
    })
});