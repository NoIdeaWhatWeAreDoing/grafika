$(function() {
    //main container size

    let size = ()=>{
        let innerWidth = window.innerWidth;
        if($("#menu-switch").prop("checked"))
        {
            $("#wrap").css("width", innerWidth - 300);
        }
        else{
            $("#wrap").css("width", innerWidth);
        }
    }
    $(window).resize(size);
    $("#menu-toggle").click(function(){
        setTimeout(function(){
            size();
        },0); 
    });
});