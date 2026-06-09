const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const parametros = {

        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        telefono: document.getElementById("telefono").value,
        servicio: document.getElementById("servicio").value,
        mensaje: document.getElementById("mensaje").value

    };

    emailjs.send(
        "TU_SERVICE_ID",
        "TU_TEMPLATE_ID",
        parametros
    )

    .then(function(){

        Swal.fire({
            icon: "success",
            title: "Solicitud enviada",
            text: "Gracias por contactarnos. Te responderemos a la brevedad."
        });

        formulario.reset();

    })

    .catch(function(error){

        Swal.fire({
            icon: "error",
            title: "Error",
            text: "No fue posible enviar la solicitud."
        });

        console.log(error);

    });

});