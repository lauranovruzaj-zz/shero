$(document).ready(function() {



    /*$("#next").click(function () {
        var index = $( ".active" ).index( );
        $(".slider div").eq(index).animate({left: '10px'}).hide().removeClass("active");

        if(index<2) {
            $(".slider div").eq(index + 1).show().addClass("active");
        }
        else{

            $(".slider div").eq(0).show().addClass("active");
        }
    });

    $("#previous").click(function () {
        var index = $( ".active" ).index( );
        $(".slider div").eq(index).hide().removeClass("active");

        if(index>0) {
            $(".slider div").eq(index - 1).show().addClass("active");
        }
        else{

            $(".slider div").eq(2).show().addClass("active");
        }

    });*/
    $("#next").click(function () {
        var index = $( ".active" ).index( );
        $(".slider div").eq(index).hide().removeClass("active");

        if(index<2) {
            $(".slider div").eq(index + 1).show().addClass("active");
        }
        else{

            $(".slider div").eq(0).show().addClass("active");
        }
    });

    $("#previous").click(function () {
        var index = $( ".active" ).index( );
        $(".slider div").eq(index).hide().removeClass("active");

        if(index>0) {
            $(".slider div").eq(index - 1).show().addClass("active");
        }
        else{

            $(".slider div").eq(2).show().addClass("active");
        }

    });



});