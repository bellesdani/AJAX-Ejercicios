$(document).ready(function() {
    $("#img").fadeout(2000,  function() {
        $("#img").slideDown(3000,  function() {
            $("#img").slideUp(1000);
        });
    });
});