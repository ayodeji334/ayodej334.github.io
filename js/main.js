$(document).ready(function(){  
    $("#toggleThemeBtn").click(function(){
        const bgColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color'); 
        if(bgColor === "rgb(255, 255, 255)" || bgColor === "rgba(0, 0, 0, 0)"){
            $('body').css({
                "backgroundColor": "rgb(0, 0, 0)",
                "color": "rgb(255, 255, 255)"
            });
            $('.btn').css({
                "backgroundColor": "rgb(255, 255, 255)",
                "color": "rgb(0, 0, 0)"   
            });
            $('nav a, .sidenav a, .contact-detail a span').css({
                "color": "rgb(255,255,255)"
            });
            $(this).html('&#9728').css({
                "backgroundColor": "rgb(0, 0, 0)",
                "color": "rgb(255, 255, 255)"
            });
            $('.menu-btn, .sidenav').css({
                "backgroundColor": "rgb(0, 0, 0)"
            });
            $('.bar').css({
                "backgroundColor": "rgb(255, 255, 255)"
            });
            $('.contact-detail svg').css({
                "fill": "rgb(255, 255, 255)"
            })
            if(Math.floor($(window).scrollTop()) > 60){
                $('.navbar-container').removeClass("lightBg").addClass("darkBg");
            }; 
        }else{
            $('body').css({
                "backgroundColor": "rgb(255, 255, 255)",
                "color": "rgb(0, 0, 0)"
            });
            $('.contact-detail svg').css({
                "fill": "rgb(0, 0, 0)"
            })
            $('.btn').css({
                "backgroundColor": "rgb(0, 0, 0)",
                "color": "rgb(255, 255, 255)"   
            });
            $(this).html('&#9790').css({
                "backgroundColor": "rgb(255, 255, 255)",
                "color": "rgb(0, 0, 0)"
            });
            $('.menu-btn, .sidenav').css({
                "backgroundColor": "rgb(255, 255, 255)"
            });
            $("nav a, .sidenav a").css({
                'color': "rgb(0, 0, 0)"
            })
            $('.bar').css({
                "backgroundColor": "rgb(0, 0, 0)"
            })
            if(Math.floor($(window).scrollTop()) > 60){
                $('.navbar-container').removeClass("darkBg").addClass("lightBg");    
            }
        }
    });
    $(".menu-btn").click(function(){
        $(".bar1").toggleClass("bar1_transform");
        $(".bar3").toggleClass("bar3_transform");
        $(".bar2").toggleClass("bar2_transform");
        $(".sidenav").toggleClass("open_sidenav");
    });
    $(window).scroll(function(){
        const bgColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
        const scrollHeight = Math.floor($(window).scrollTop());
        if(scrollHeight === 0 || scrollHeight < 60){
            if(bgColor === "rgb(255, 255, 255)" || bgColor === "rgba(0, 0, 0, 0)"){
                $(".navbar-container").removeClass("lightBg");
            }else{
                $(".navbar-container").removeClass("darkBg");
            }
        }else{
            if(bgColor === "rgb(255, 255, 255)" || bgColor === "rgba(0, 0, 0, 0)"){
                $(".navbar-container").addClass("lightBg");
            }else{
                $(".navbar-container").addClass("darkBg");
            }
        };
        // Fade in effect
        // $("section").each(function(i){
        //     const bottom_of_item = $(this).position().top() + $(this).outerHeight();
        //     const bottom_of_window = $(window).scrollTop() + $(window).height();

        //     if(bottom_of_window > bottom_of_item){
        //         $(this).animate({
        //             "opacity": "1"
        //         }, 1000);
        //     };
        // });
    });
});

  