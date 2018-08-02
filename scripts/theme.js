---
# This is an empty front
---
var UnitConfig	=
{
{% if page.url == "/index.html" %}
    'headerMode'	: 'top',
{% else %}
    'headerMode'	: 'always',
{% endif %}
    'login'			: false
};
{% include_relative _scripts/theme/common.js %}
{% include_relative _scripts/theme/video.js %}

$(document).ready(function() {
    // play/pause video if we have only one column
    $('.feature-block .feature-image-container video, article video').click(function(e){
        var width = $(window).width();
        if(width < 992) {
            // toggle play/pause
            this.paused ? this.play() : this.pause();
        }
    });

    // disable links if we have only one column
    $('.feature-block a').click(function(e){
        var width = $(window).width();
        if(width < 992) {
            // disable event
            e.preventDefault();
        }
    });

    // Function fot init and fill combo boxes at the contact page
    function fillContactComboBoxes(){
        // Create array with data for industry box
        var industry = [
            'Game development',
            'Gambling game development',
            'Non-game development (simulation, architecture, etc.)',
            'Education',
            'Other'
        ];
        // Init select2 for industry box
        $("#industry").select2({
            data : industry,
            placeholder: "Select your industry"
        });

        // Create array without data for countries box
        var countries = [];
        // Init select2 for country box
        $("#country").select2({
            placeholder: "Loading..."
        });
        // Get all countries name from REST https://restcountries.eu/
        $.ajax({
            type: "GET",
            async: true,
            url: 'https://restcountries.eu/rest/v2/all?fields=name;',
            dataType: 'json',
            cache: true,
            success: function (data){
                for(prop in data){
                    countries.push(data[prop].name);
                }
                // Reinit select2 for country box with data
                $("#country").select2("destroy").select2({
                    data : countries,
                    placeholder: "Select your country"
                });
                // Remove disable attribute after data was uploaded
                $("#country").prop("disabled", false);
            }
        });
    }
    if($('#industry').length > 0){
        fillContactComboBoxes();
    }
});


// Show or hide play icon (event on video element)
function feature_video_onplay(e) {
    $(e.target.parentElement).children(".video-play-button").hide();
}

function feature_video_onpause(e) {
    $(e.target.parentElement).children(".video-play-button").show();
}

// Only play thumbnail if in viewport
var autoPlayAllowed = true;
function checkScroll() {
    $('.feature-block .feature-image-container video, article video').each(function(){
        var promise;
        if ($(this).is(":in-viewport") && $(this).attr('autoplay')) {
            // If we got a play not allowed exception, don't try again
            if (!autoPlayAllowed)
                return;
            promise = $(this)[0].play();
        } else {
            promise = $(this)[0].pause();
        }

        if (promise instanceof Promise){
            promise.catch(function(error){
                if (error.name == "NotAllowedError"){
                    autoPlayAllowed = false;
                }
            });
        }
    });
}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);
