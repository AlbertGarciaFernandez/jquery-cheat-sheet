var functionschangeselect = $('.functions').children("ul").children();
var selectorschangeselect = $('.selectors').children("ul").children();
var eventschangeselect = $('.events').children("ul").children();

//case 0-18
functionschangeselect.each(function(i, element){
    $(element).on("click",function(){
        vanillaJavaScript(i);
        jQueryScript(i);
    });
});

//case 0-9
selectorschangeselect.each(function(i, element){
    $(element).on("click",function(){
        vanillaJavaScriptselectors(i);
        jQueryScript(i);
    });
});

//case 0-12
eventschangeselect.each(function(i, element){
    $(element).on("click",function(){
        vanillaJavaScriptevents(i);
        jQueryScript(i);
    });
});