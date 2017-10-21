var popoverShown = false;

$(function () {
    // Enables all tooltips.
    $(".btn-fixed-action").tooltip()
    // Enables scrollspy.
    $("body").scrollspy({ target: '#navbar-main' })
    // Initializes ScrollReveal
    window.sr = ScrollReveal();

    // Collapses navbar on click away.
    $(document).on("click", function(e) {
        if (($(e.target).attr("class") || "").substring(0,3) != "nav") {
            $(".collapse").collapse("hide");
        }

    })

    $(".btn-floating").on("shown.bs.tooltip", function () {
        popoverShown = true;
    })
    $(".btn-floating").on("hidden.bs.tooltip", function () {
        popoverShown = false;
    })
    $(".btn-floating").on("click", function() {
        if (popoverShown) {
            console.log("allowed click")
            window.open("resources/resume.pdf")
        }
        else {
            console.log("blocked click")
        }
    })
    $(".btn-floating").hover( function() {
        $(".btn-floating i").addClass("spin");
    }, function() {
        $(".btn-floating i").removeClass("spin");
    })


    // From CSS Tricks (https://css-tricks.com/snippets/jquery/smooth-scrolling/)
    // Selects all links with hashes.
    $('a[href*="#"]')
    // Removes links that don't actually link to anything.
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figures out which element to scroll to.
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevents default if animation is actually going to happen.
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checks if the target was focused.
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adds tabindex for elements not focusable.
                        $target.focus(); // Sets focus again.
                    };
                });
            }
        }
    });

    // sr.reveal('#about *, #experience *, #contact *', {
    //     reset: true,
    //     viewOffset: {top: 70},
    //     viewFactor: 0.1
    // });
})
