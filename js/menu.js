let activo = "#sobre-mi";
let boton = "#sobre-mi-btn"

function cambiarVentana(nuevoActivo) {

    $(activo).addClass("fadeOut");
    $(activo).removeClass("fadeIn");
    $(activo).addClass("ocultar");

    $(nuevoActivo).removeClass('ocultar');
    $(nuevoActivo).addClass("fadeIn");
    $(activo).removeClass("fadeOut"); 

    $(activo+"-btn").removeClass('boton-focus');
    $(nuevoActivo+"-btn").addClass('boton-focus');

    activo = nuevoActivo
    
}