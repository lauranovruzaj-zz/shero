$(document).ready(function() {
   $("#section").append("<div class='lettres'><span class='hidden'>L</span></div><div class='lettres'><span class='hidden'>A</span></div><div class='lettres'><span class='hidden'>U</span></div><div class='lettres'><span class='hidden'>R</span></div><div class='lettres'><span class='hidden'>A</span></div>");
    $(".lettres").hover(
        function() {
         $(this).find('span').removeClass('hidden');
        });
});