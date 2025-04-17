// Scroll

var $root = $('html, body');

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

// Selector

$selector1 = $('#rules1');
$selector2 = $('#rules2');
$selector3 = $('#rules3');
$selector4 = $('#rules4');
$selector5 = $('#rules5');

$selector1.on('click', function () {
    $selector1.addClass('active');
    $selector2.removeClass('active');
    $selector3.removeClass('active');
    $selector4.removeClass('active');
    $selector5.removeClass('active');

    $('.rules1').removeClass('hide');
    $('.rules2').addClass('hide');
    $('.rules3').addClass('hide');
    $('.rules4').addClass('hide');
    $('.rules5').addClass('hide');
})

$selector2.on('click', function () {
    $selector1.removeClass('active');
    $selector2.addClass('active');
    $selector3.removeClass('active');
    $selector4.removeClass('active');
    $selector5.removeClass('active');

    $('.rules1').addClass('hide');
    $('.rules2').removeClass('hide');
    $('.rules3').addClass('hide');
    $('.rules4').addClass('hide');
    $('.rules5').addClass('hide');
})

$selector3.on('click', function () {
    $selector1.removeClass('active');
    $selector2.removeClass('active');
    $selector3.addClass('active');
    $selector4.removeClass('active');
    $selector5.removeClass('active');

    $('.rules1').addClass('hide');
    $('.rules2').addClass('hide');
    $('.rules3').removeClass('hide');
    $('.rules4').addClass('hide');
    $('.rules5').addClass('hide');

})

$selector4.on('click', function () {
    $selector1.removeClass('active');
    $selector2.removeClass('active');
    $selector3.removeClass('active');
    $selector4.addClass('active');
    $selector5.removeClass('active');

    $('.rules1').addClass('hide');
    $('.rules2').addClass('hide');
    $('.rules3').addClass('hide');
    $('.rules4').removeClass('hide');
    $('.rules5').addClass('hide');
})

$selector5.on('click', function () {
    $selector1.removeClass('active');
    $selector2.removeClass('active');
    $selector3.removeClass('active');
    $selector4.removeClass('active');
    $selector5.addClass('active');

    $('.rules1').addClass('hide');
    $('.rules2').addClass('hide');
    $('.rules3').addClass('hide');
    $('.rules4').addClass('hide');
    $('.rules5').removeClass('hide');
})

// Main

function sendNotify(text) {
    $('#notify-text').html(text);
    $('.notify').css('top', '150px');
    setTimeout( function() {
        $('.notify').css('top', '');
    }, 4000);
}

// IP Button

$('#ipButton').on('click', function () {
    navigator.clipboard.writeText('mc.vireworld.ru');
    sendNotify('Успешно скопировано!');
})