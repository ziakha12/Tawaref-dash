$(document).ready(function(){
    $('.main-item').click(function(){
        $(this).next('.sub-items').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
});