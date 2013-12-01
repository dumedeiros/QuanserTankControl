var KEYCODE_ESC = 27;
var KEYCODE_ENTER = 13;
 
function maskare(id, mask){
    jQuery(function($){
        jQuery(id).mask(mask);
    });
    
}

function disableInput(id){
    jQuery(id).attr("disabled", true);
    jQuery(id).addClass("inputDisabled");
}

function enableInput(id){
    jQuery(id).attr("disabled", false);
    jQuery(id).removeClass("inputDisabled");
}

function createGraphs(){
    
    
}
