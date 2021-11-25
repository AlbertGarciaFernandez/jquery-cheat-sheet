var elementschange = $('.functions').children("ul").children();
console.log(elementschange);

elementschange.each(function(i, element){
    $(element).on("click",function(){
        vanillaJavaScript(i);
        jQueryScript(i);
    });

})