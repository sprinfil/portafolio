  $(document).ready(function() {

    $("#boton-menu-responsive").click(function() {
      abrir_menu();
    });

    $("#icono-nav-responsive").click(function(){
      cerrar_menu();
    })

  });

  function abrir_menu(){
    $(".nav").removeClass("nav-cerrado");
    $(".nav").addClass("nav-abierto");
  }
  function cerrar_menu(){
    $(".nav").removeClass("nav-abierto");
    $(".nav").addClass("nav-cerrado");
  }