
const formulario = document.querySelector("#formulario-contacto");
const respuesta = document.querySelector("#respuesta-formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = document.querySelector("#nombre").value.trim();

  respuesta.textContent =
    `¡Gracias, ${nombre}! Tu formulario se completó correctamente. ` +
    "Esta demostración aún no envía el mensaje.";

  formulario.reset();
});
