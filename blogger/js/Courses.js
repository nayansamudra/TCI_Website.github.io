$(document).ready(function () {
    console.log("ready!");
    $('.accordion-collapse').hide()
    $('.navbar-toggler').on('click', function () {
        $('.navbar-collapse').toggle();
    })
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
    $('#video_1').on('click', function () {
        var value = $('#video_button_1').attr("data-lightbox-content");
        console.log(value)
        $('iframe').attr('src', value)
        $('.lightbox-column').append(`<div class="lightbox-video">
                <iframe src="${value}" frameborder="0" allowfullscreen="" allow="autoplay"> </iframe>
            </div>`)
        $('.lightbox').show()
    })
    $('#video_2').on('click', function () {
        var value = $('#video_button_2').attr("data-lightbox-content");
        console.log(value)
        $('iframe').attr('src', value)
        $('.lightbox-column').append(`<div class="lightbox-video">
                <iframe src="${value}" frameborder="0" allowfullscreen="" allow="autoplay"> </iframe>
            </div>`)
        $('.lightbox').show()
    })
    $('#video_3').on('click', function () {
        var value = $('#video_button_3').attr("data-lightbox-content");
        console.log(value)
        $('iframe').attr('src', value)
        $('.lightbox-column').append(`<div class="lightbox-video">
                <iframe src="${value}" frameborder="0" allowfullscreen="" allow="autoplay"> </iframe>
            </div>`)
        $('.lightbox').show()
    })
    $('#video_4').on('click', function () {
        var value = $('#video_button_4').attr("data-lightbox-content");
        console.log(value)
        $('iframe').attr('src', value)
        $('.lightbox-column').append(`<div class="lightbox-video">
                <iframe src="${value}" frameborder="0" allowfullscreen="" allow="autoplay"> </iframe>
            </div>`)
        $('.lightbox').show()
    })
    $('#video_5').on('click', function () {
        var value = $('#video_button_5').attr("data-lightbox-content");
        console.log(value)
        $('iframe').attr('src', value)
        $('.lightbox-column').append(`<div class="lightbox-video">
                <iframe src="${value}" frameborder="0" allowfullscreen="" allow="autoplay"> </iframe>
            </div>`)
        $('.lightbox').show()
    })
    $('#video_6').on('click', function () {
        var value = $('#video_button_6').attr("data-lightbox-content");
        console.log(value)
        $('iframe').attr('src', value)
        $('.lightbox-column').append(`<div class="lightbox-video">
                <iframe src="${value}" frameborder="0" allowfullscreen="" allow="autoplay"> </iframe>
            </div>`)
        $('.lightbox').show()
    })
    $('#video_7').on('click', function () {
        var value = $('#video_button_7').attr("data-lightbox-content");
        console.log(value)
        $('iframe').attr('src', value)
        $('.lightbox-column').append(`<div class="lightbox-video">
                <iframe src="${value}" frameborder="0" allowfullscreen="" allow="autoplay"> </iframe>
            </div>`)
        $('.lightbox').show()
    })
    $('#video_8').on('click', function () {
        var value = $('#video_button_8').attr("data-lightbox-content");
        console.log(value)
        $('iframe').attr('src', value)
        $('.lightbox-column').append(`<div class="lightbox-video">
                <iframe src="${value}" frameborder="0" allowfullscreen="" allow="autoplay"> </iframe>
            </div>`)
        $('.lightbox').show()
    })
    $('#video_9').on('click', function () {
        var value = $('#video_button_9').attr("data-lightbox-content");
        console.log(value)
        $('iframe').attr('src', value)
        $('.lightbox-column').append(`<div class="lightbox-video">
                <iframe src="${value}" frameborder="0" allowfullscreen="" allow="autoplay"> </iframe>
            </div>`)
        $('.lightbox').show()
    })
    $('#video_10').on('click', function () {
        var value = $('#video_button_10').attr("data-lightbox-content");
        console.log(value)
        $('iframe').attr('src', value)
        $('.lightbox-column').append(`<div class="lightbox-video">
                <iframe src="${value}" frameborder="0" allowfullscreen="" allow="autoplay"> </iframe>
            </div>`)
        $('.lightbox').show()
    })
    $('#video_11').on('click', function () {
        var value = $('#video_button_11').attr("data-lightbox-content");
        console.log(value)
        $('iframe').attr('src', value)
        $('.lightbox-column').append(`<div class="lightbox-video">
                <iframe src="${value}" frameborder="0" allowfullscreen="" allow="autoplay"> </iframe>
            </div>`)
        $('.lightbox').show()
    })
    $('#video_12').on('click', function () {
        var value = $('#video_button_12').attr("data-lightbox-content");
        console.log(value)
        $('iframe').attr('src', value)
        $('.lightbox-column').append(`<div class="lightbox-video">
                <iframe src="${value}" frameborder="0" allowfullscreen="" allow="autoplay"> </iframe>
            </div>`)
        $('.lightbox').show()
    })
    $('.lightbox-close').on('click', function () {
        $('.lightbox-column').empty()
        $('.lightbox').hide()
    })
});
