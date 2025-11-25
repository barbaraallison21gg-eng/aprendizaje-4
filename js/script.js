$(document).ready(function () {
  // Validación y mensaje en el formulario
  $('#formulariocontacto').on('submit', function (e) {
    e.preventDefault();
    let nombre = $('#nombre').val();
    let email = $('#email').val();
    let telefono = $('#telefono').val();
    let mensajeDiv = $('#mensaje');

    if (nombre !== "" && email !== "" && telefono !== "") {
      mensajeDiv
        .text("¡Gracias por contactarte, " + nombre + "!")
        .removeClass()
        .addClass("alert alert-success mt-3")
        .fadeIn();
      $(this)[0].reset();
    } else {
      mensajeDiv
        .text("Por favor, completa todos los campos del formulario.")
        .removeClass()
        .addClass("alert alert-warning mt-3")
        .fadeIn();
    }
  });

  // Smooth Scroll para enlaces internos
  $('a[href^="#"]').on('click', function (event) {
    event.preventDefault();
    let destino = $(this.getAttribute('href'));
    if (destino.length) {
      $('html, body').animate({
        scrollTop: destino.offset().top
      }, 800);
    }
  });
});