$('a[href^="#"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top - 90 }, 800);
    return false;
});
//# sourceMappingURL=main.js.map
