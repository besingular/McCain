// JS
 

$(document).ready(function(){


    $("#js-Desplegable").click(function(){      
        $("#js-desplegablebar").slideToggle("slideDown");

    });
    $("#js-burguer").click(function(){      
        $("#js-meDesplegue").slideToggle("slideDown");
        $("#js-meDesplegue").style.height = "2000";
    });

    $("#js-legales").click(function(){      
       $("#js-textLega").show();
       $("#js-body").addClass('js-bodyOver');
    });


    $("#js-closedBtn").click(function(){      
       $("#js-textLega").hide();
       $("#js-body").removeClass('js-bodyOver');
    });






    /*if ($(window).width() <= 768) {
        $('ul li a[href^="#"], #nav-open, .js-btnicon').click(function(){
            $(".varMenu").toggle();
        });     
           
    }else{
         $(".varMenu").css("display", "block");
        
    }    

    $('ul li a[href^="#"], #nav-open').click(function(){
        $(".varMenu").toggle();
    });     

    $(".btns01").click(function(){
        $("btns2").removeClass("js-btnSelec");
    });

    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 900);
    });
 
    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('.ir-arriba').slideDown(900);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });

    $('ul li a[href^="#"], #logoHO').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }

    });

     $(".js-BtnEnv").click(function(){
         $("#js-gracias").show();
     });

     $("#js-btnform").click(function(){
         $("#js-gracias").hide();
     });


   // Escuchar cambios de orientación
    // window.addEventListener("orientationchange", function() {
    // Hacer algo cuando cambia la orientación
    // if(event.orientationchange == 'portrait'){
    //     $("#js-landscape").hide();
    //     alert(window.orientationchange);
    // }else if(event.orientationchange == 'landscape') {}
    //     $("#js-landscape").show();
    //     alert(window.orientationchange);
    // }, false);
    // $( window ).orientationchange();*/


    
    
});
