// Main

$mainElement = $('#mainEl');
$magazineElement = $('#magazineEl');

$mainElement.on('click', function () {
    $mainElement.addClass('active');
    $magazineElement.removeClass('active');
})
$magazineElement.on('click', function () {
    $magazineElement.addClass('active');
    $mainElement.removeClass('active');
})

function sendNotify(text) {
    $('#notify-text').html(text);
    $('.notify').css('top', '150px');
    setTimeout( function() {
        $('.notify').css('top', '');
    }, 4000);
}

// Scroll

var $root = $('html, body');

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

// Welcome page

if (sessionStorage.welcomeEnable == null) {
    sessionStorage.welcomeEnable = 'true';
}

$(document).on('DOMContentLoaded', function () {
    if (sessionStorage.welcomeEnable == 'true') {
        $('.welcome-page').css('top', '0');
    }
})

$('.welcome-btn').on('click', function () {
    sessionStorage.welcomeEnable = 'false';
    $('.welcome-page').css('top', '-100vh');
})

// Selector

const $selectorDonate = $('#donates');
const $selectorCases = $('#cases');
const $selectorVault = $('#vault');
const $selectorAll = $('#all');

function chooseSelector($selector) {
    switch ($selector) {
        case $selectorAll:
            $selectorDonate.removeClass('active');
            $selectorCases.removeClass('active');
            $selectorVault.removeClass('active');

            $selectorAll.addClass('active');
            break;
        case $selectorDonate:
            $selectorAll.removeClass('active');
            $selectorCases.removeClass('active');
            $selectorVault.removeClass('active');

            $selectorDonate.addClass('active');
            break;
        case $selectorCases:
            $selectorDonate.removeClass('active');
            $selectorAll.removeClass('active');
            $selectorVault.removeClass('active');

            $selectorCases.addClass('active');
            break;
        case $selectorVault:
            $selectorDonate.removeClass('active');
            $selectorCases.removeClass('active');
            $selectorAll.removeClass('active');

            $selectorVault.addClass('active');
            break;
    }
}

function setSelector($touchSelector) {
    switch ($touchSelector) {
        case $selectorAll:
            $('.donates').removeClass('hide');
            $('.cases').removeClass('hide');
            $('.vault').removeClass('hide');
            break;
        case $selectorDonate:
            $('.donates').removeClass('hide');
            $('.cases').addClass('hide');
            $('.vault').addClass('hide');
            break;
        case $selectorCases:
            $('.donates').addClass('hide');
            $('.cases').removeClass('hide');
            $('.vault').addClass('hide');
            break;
        case $selectorVault:
            $('.donates').addClass('hide');
            $('.cases').addClass('hide');
            $('.vault').removeClass('hide');
            break;
    }
}

$selectorAll.on('click', function () {
    setSelector($selectorAll);
    chooseSelector($selectorAll);
})
$selectorDonate.on('click', function () {
    setSelector($selectorDonate);
    chooseSelector($selectorDonate);
})
$selectorCases.on('click', function () {
    setSelector($selectorCases);
    chooseSelector($selectorCases);
})
$selectorVault.on('click', function () {
    setSelector($selectorVault);
    chooseSelector($selectorVault);
})

// IP Button

$('#ipButton').on('click', function () {
    navigator.clipboard.writeText('mc.vireworld.ru');
    sendNotify('Успешно скопировано!');
})