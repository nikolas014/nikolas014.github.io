var nombre = document.getElementById("nombre");
var correo = document.getElementById("email");
var mensaje = document.getElementById("mensaje");
var boton = document.getElementById("boton");
boton.addEventListener("click", enviar_alerta);

function enviar_alerta()
{
    if (nombre.value || correo.value || mensaje.value) {
        if (nombre.value) {
            alert(`Hola, ${nombre.value}!. \n Este formulario de contacto es solo estético`) 
        }else(
           alert(`Hola, Este formulario de contacto es solo estético`) 
        )
    }
}