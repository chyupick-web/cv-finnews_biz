$(".desc-invert a").on('click', function (e) {
    e.preventDefault();
    var cls = $(this).data('class');
    $('.auth').attr('id','hide');
    $("." + cls).attr('id', '');

    if (cls !== 'form-container2') {
        $(".note-holder").html('<h1 class="title">Welcome Back :)</h1><p class="desc">We find the best talents and give them opportunity to excel.</p>')
    } else {
        $(".note-holder").html('<h1 class="title">Explore your creativity</h1><p class="desc">Discover new skills, meet passionate path, and build a solid career with Zuri, a community of creative minds</p>')
    }
})