;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));



$(".animate-trigger").inViewport(function(px){
    if(px) $(this).addClass("trigger") ;
});

var closeBtn = document.getElementById('closebtn');
var hamburgerBtn = document.getElementById('hamburger-menu');

$(window).ready(function(e) {
    screen_resize();
});

$(window).resize(function(e) {
    screen_resize();
})

function screen_resize() {
    var w = parseInt(window.innerWidth);
    console.log(w);
    if (w < 900) {
        closeBtn.addEventListener("click", function () {
          document.getElementById("sidenav").style.width = "0px";
          document.getElementById("main").style.opacity = "1";
          document.getElementById("left-nav").style.opacity = "1";
        });

        hamburgerBtn.addEventListener("click", function () {
          document.getElementById("sidenav").style.width = "250px";
          document.getElementById("main").style.opacity = "0.7";
          document.getElementById("left-nav").style.opacity = "0.7";
        });
    } else {
        hamburgerBtn.addEventListener("click", function () {
            $("#hamburger-menu").removeClass("fa-bars");
            $("#hamburger-menu").html("&times;");
            $(".animate-trigger-navbar").addClass("trigger");
        });
    } 
}