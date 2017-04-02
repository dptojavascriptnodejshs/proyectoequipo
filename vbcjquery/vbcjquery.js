$(function(){ 
    $('#app-body') 
        .find('form') 
        .submit (function onsubmit (ev){
//         alert ('Se hizo Submit')
        var busqueda= $(this)
            .find('input[type="text"]')
            .val();
        alert ('Se BUSCO BUSQUEDA')
    })
})

