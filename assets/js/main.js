$(".desc-invert a").on('click', function (e) {
    e.preventDefault();
    var cls = $(this).data('class');
    $('.auth').attr('id','hide');
    $("." + cls).attr('id', '');
})