$(document).ready(function() {
    var slider = $('#lightSlider').lightSlider({
        gallery:true,
        item:1,
        vertical:true,
        vThumbWidth:200,
        thumbItem:4,
        thumbMargin:0,
        slideMargin:100,
        loop:false,
        speed: 350,
        controls:false
    });

});


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 300);
        return false;
      }
    }
  });
});