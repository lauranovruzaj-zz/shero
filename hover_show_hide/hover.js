$(document).ready(function() {
    $( "#blue" ).hover(
        function() {
            $( this ).addClass( "hidden" );
            $( "#red" ).removeClass( "hidden" );
        }
    );

    $( "#red" ).mouseleave(function() {
        $( this ).addClass( "hidden" );
        $( "#blue" ).removeClass( "hidden" );
    });
});