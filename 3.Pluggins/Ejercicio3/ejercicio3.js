$(document).ready(function(){
    let posicion = 0;
        $("#iniciar").click(function(){
            posicion = 300-posicion;
            $("#cubo").animate({left:"+="+300}, 1000);
            $("#cubo").animate({top: "+="+300}, 1000);
            $("#cubo").animate({left:"-="+300}, 1000);
            $("#cubo").animate({top: "-="+300}, 1000);
        });
    
        $("#parar").click(function(){
            $("#cubo").stop(true);
            
        })
    });