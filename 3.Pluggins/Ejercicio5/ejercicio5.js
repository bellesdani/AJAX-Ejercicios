$(document).ready(function(){
    $("#iniciar").click(function(){
        $("#cubo").animate({left:"+="+300}, 1000);
        $("#cubo").queue(function(){$(this).css('background-color','green').dequeue()});
        $("#cubo").animate({top: "+="+300}, 1000);
        $("#cubo").queue(function(){$(this).css('background-color','blue').dequeue()});
        $("#cubo").animate({left:"-="+300}, 1000);
        $("#cubo").queue(function(){$(this).css('background-color','pink').dequeue()});
        $("#cubo").animate({top: "-="+300}, 1000);
    });

    $("#parar").click(function(){
        $("#cubo").stop(true);
    })
});