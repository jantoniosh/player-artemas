$(document).ready(function () {
    $('#playbutton').click(function () {
        $('#player').toggleClass('on');
        $('#audio-player').trigger('play');
    });
    $('#pausebutton').click(function () {
        $('#player').toggleClass('on');
        $('#audio-player').trigger('pause');
    });
});