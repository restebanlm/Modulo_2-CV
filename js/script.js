function enviarFormulario(){
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("textmensaje").value;

    if (!correo || !mensaje){
        alert("Complete los campos.");
    }else{
        alert("¡Muchas gracias por ponerse en contacto!");
    }
}

function volverPrincipal(){
    window.open("index.html", "_self"); 
}