jQuery(document).ready(() => {  
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
                $('nav a').css({
                    "color": "rgb(255,255,255)"
                });
                $(this).html('&#9728').css({
                        "backgroundColor": "rgb(0, 0, 0)",
                        "color": "rgb(255, 255, 255)"
                });

                if(Math.floor($(window).scrollTop()) > 60){
                    $('.navbar-container').removeClass("lightBg").addClass("darkBg");
                }  
        }else{
            $('body').css({
                "backgroundColor": "rgb(255, 255, 255)",
                "color": "rgb(0, 0, 0)"
            });
            $('.btn').css({
                "backgroundColor": "rgb(0, 0, 0)",
                "color": "rgb(255, 255, 255)"   
            });
            $('nav a').css({
                "color": "rgb(0,0,0)"
            });
            $(this).html('&#9790').css({
                "backgroundColor": "rgb(255, 255, 255)",
                "color": "rgb(0, 0, 0)"
            });
            if(Math.floor($(window).scrollTop()) > 60){
                $('.navbar-container').removeClass("darkBg").addClass("lightBg");    
            }
        }
    });
    $(window).scroll(() => {
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
        }
    });
});

  