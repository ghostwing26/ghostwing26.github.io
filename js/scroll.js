$(window).on("scroll", function(){
    if($(window).scrollTop() > 30){
        $(".navbar").addClass("active");
    } else {
        $(".navbar").removeClass("active");
    }
});