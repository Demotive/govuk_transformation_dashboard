//= require ./vendor/jquery/jquery-1.7.2.js
//= require ./vendor/jquery/jquery-ui-1.8.16.js
//= require ../govuk_toolkit/javascripts/vendor/jquery/jquery.player.min.js

jQuery(function($) {
    var $yt_links = $(".media-player-link");

    // Create players for our youtube links
    $.each($yt_links, function(i) {
        var $holder = $('<figure class="media-player" />');
        var $this = $(this);
        $this.parent().replaceWith($holder);
        // Find the captions file if it exists
        var $mycaptions = $(this).siblings('.captions');
        // Work out if we have captions or not
        var captionsf = $($mycaptions).length > 0 ? $($mycaptions).attr('href') : null;
        // Ensure that we extract the last part of the youtube link (the video id)
        // and pass it to the player() method
        var link = $(this).attr('href').split("=")[1];
        // make sure we fetch the right SSL level
        var youTubeURL = (document.location.protocol + '//www.youtube.com/apiplayer?enablejsapi=1&version=3&playerapiid=');
        // Initialise the player
        $holder.player({
            id:'yt'+i,
            media:link,
            captions:captionsf,
            url: youTubeURL,
            flashHeight: '323px'
        });
        // Grab the text if required
        if ($this.hasClass('titled')) {
            var $figcaption = $('<figcaption>' + $this.text() + '</figcaption>');
            $holder.prepend($figcaption);
        }
    });
});