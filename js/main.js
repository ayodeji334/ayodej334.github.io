$(document).ready(function(){
    //set bg color and scroll height on page load 
    let bgColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
    let scrollHeight = Math.floor($(window).scrollTop());
    let currentlocationHash = window.location.hash;

    //Scrolling event
    $(window).scroll(function(){
        toggleNavbarClassOnScroll();
        fadeInEffect();
    });

    //Toggle Theme Btn
    $("#toggleThemeBtn").click(function(){ 
        bgColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
        $('body').toggleClass('dark-mode');
           
        if(bgColor === "rgb(255, 255, 255)" || bgColor === "rgba(0, 0, 0, 0)"){
            // $('body').addClass("dark-mode");
            
            $('.btn').css({
                "backgroundColor": "rgb(255, 255, 255)",
                "color": "rgb(0, 0, 0)"   
            });

            $('.contact-detail a span').css({
                "color": "rgb(255,255,255)"
            });

            $(".navbar-container span.material-icons").html("&#xe518;").css({ "color": "#ffffff"});
            
            $(this).css({
                "backgroundColor": "rgb(12, 11, 11)",
                "color": "rgb(255, 255, 255)"
            });

            $('.menu-btn, .sidenav').css({
                "backgroundColor": "rgb(7, 7, 7)"
            });

            $('.bar').css({
                "backgroundColor": "rgb(255, 255, 255)"
            });
             
            if(Math.floor($(window).scrollTop()) > 60){
                $('.navbar-container').removeClass("lightBg").addClass("darkBg");
            }; 

        }else{
            // $('body').removeClass("dark-mode")

            $('.btn').css({
                "backgroundColor": "rgb(0, 0, 0)",
                "color": "rgb(255, 255, 255)"   
            });

            $(".navbar-container span.material-icons").html(`&#xe51c;`).css({ "color": "rgb(0, 0, 0)"});
            
            $(this).css({
                "backgroundColor": "rgb(255, 255, 255)",
                "color": "rgb(0, 0, 0)"
            });

            $('.menu-btn, .sidenav').css({
                "backgroundColor": "rgb(255, 255, 255)"
            });

            $(".contact-detail a span").css({
                'color': "rgb(0, 0, 0)"
            });

            $('.bar').css({
                "backgroundColor": "rgb(0, 0, 0)"
            });

            if(Math.floor($(window).scrollTop()) > 60){
                $('.navbar-container').removeClass("darkBg").addClass("lightBg");    
            }
        }
    });

    //Toggle Menu Btn
    $(".menu-btn").click(function(){
        $(".bar1").toggleClass("bar1_transform");
        $(".bar3").toggleClass("bar3_transform");
        $(".bar2").toggleClass("bar2_transform");
        $(".sidenav").slideToggle(400);
    });

    //Fade in
    function fadeInEffect() {
        $(".slide").each(function(){
            const currentElementBottom = $(this).offset().top + 4;
            const windowBottom = $(window).scrollTop() + $(window).height();
            
            if(windowBottom > currentElementBottom){
                $(this).css({ "opacity": 1, "top": 0})
            }
        });
    };

    //Scroll Effect
    function toggleNavbarClassOnScroll(){
        bgColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
        scrollHeight = Math.floor($(window).scrollTop());

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

    };

    //Call Functions on page load
    toggleNavbarClassOnScroll();
    fadeInEffect();
});