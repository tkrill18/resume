var popoverShown = false;

$(function () {
    // Enables tooltips.
    $('[data-toggle="tooltip"]').tooltip()
    $('.btn-floating').on('shown.bs.tooltip', function () {
        popoverShown = true;
    })
    $('.btn-floating').on('hidden.bs.tooltip', function () {
        popoverShown = false;
    })
    $(".btn-floating").on("click", function() {
        if (popoverShown) {
            console.log("allowed click")
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
})