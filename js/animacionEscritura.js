

$(document).ready(function() {
    let textoCompleto = `Hola \n soy Jeremy, Web Developer.`;

    let indice = 0;
    let intervalo = setInterval(function() {
      $('#hola').text(textoCompleto.slice(0, indice));
      indice++;
      
      if (indice > textoCompleto.length) {
        $('.boton-contactame').removeClass('ocultar');
        $('.boton-contactame').addClass('fadeIn');
        $('.boton-cv').removeClass('ocultar');
        $('.boton-cv').addClass('fadeIn');
        $('.icono-rocket').removeClass('ocultar');
        $('.icono-rocket').addClass('moveUpDown');
        clearInterval(intervalo); // Detener el intervalo cuando se completa el texto
      }
    }, 50); // Ajusta la velocidad según tus preferencias


  });