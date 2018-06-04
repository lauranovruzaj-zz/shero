
$(document).ready(function() {
    var left=0;
    var right=0;


    $( "#right" ).click(function() {
        left=left+10;

        $("#content").css({ "margin-left" : left+"px" } );
    });
    $( "#left" ).click(function() {
        left=left-10;
        $("#content").css({ "margin-left" : left+"px"} );
    });
});