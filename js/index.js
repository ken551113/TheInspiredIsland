// $(window).scroll(function(evt){
//   if ($(window).scrollTop()>0)
//     $(".navbar").removeClass("navbar-top");
//   else
//       $(".navbar").addClass("navbar-top");
// });

// var s = skrollr.init();



$(document).ready(function(){ 
    $('.section_aboutFisfisa_Bgc').parallax("50%", -0.7);
    $('.section_aboutIsland_Bgc').parallax("50%", -0.7);
    
    $(".btn5").click(function() { 
        $("#pop-up").fadeIn("slow");
        console.log("hi");
    });
    $("#pop-up").click(function() { 
        $("#pop-up").fadeOut("slow");
    });

    $('.content').preload(function(){
    });
    
    $('#navHeader').click(function(){
        $('html,body').animate({scrollTop:$('#header').offset().top},800);
    });
    $('#navAboutIsland').click(function(){
        $('html,body').animate({scrollTop:$('#section_aboutIsland').offset().top},800);
    });
    $('#navMovieIntroduction').click(function(){
        $('html,body').animate({scrollTop:$('#section_movieIntroduction').offset().top},800);
    });
    $('#navTheater').click(function(){
        $('html,body').animate({scrollTop:$('#section_movieIntroduction').offset().top},800);
    });
    $('#navSaleInformation').click(function(){
        $('html,body').animate({scrollTop:$('#section_saleInformation').offset().top},800);
    });
    $('#navAboutFisfisa').click(function(){
        $('html,body').animate({scrollTop:$('#section_aboutFisfisa').offset().top},800);
    });


    inView('#section_aboutFisfisa')
    .on('enter', function(){
        // $('.navItem#navAboutFisfisa').addClass("view");
    });
});

