const formularioAgendar = document.getElementById("formulario-agendar");

if (formularioAgendar) {

    formularioAgendar.addEventListener("submit", function(evento) {

        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const vehiculo = document.getElementById("vehiculo").value.trim();
        const servicio = document.getElementById("servicio").value;
        const mensaje = document.getElementById("mensaje").value.trim();

        const mensajeFormulario =
            document.getElementById("mensaje-formulario");


        if (
            nombre === "" ||
            telefono === "" ||
            vehiculo === "" ||
            servicio === "" ||
            mensaje === ""
        ) {

            mensajeFormulario.textContent =
                "Por favor, completa todos los campos.";

            mensajeFormulario.style.color = "#d62828";

            return;
        }


        const numeroWhatsApp = "573116218230";


        const textoWhatsApp =
            "Hola, soy " + nombre + ".\n\n" +

            "Quiero solicitar información sobre un servicio.\n\n" +

            "Teléfono: " + telefono + "\n" +

            "Vehículo: " + vehiculo + "\n" +

            "Servicio: " + servicio + "\n" +

            "Descripción: " + mensaje;


        const enlaceWhatsApp =
            "https://api.whatsapp.com/send?phone=" +
            numeroWhatsApp +
            "&text=" +
            encodeURIComponent(textoWhatsApp);


        mensajeFormulario.textContent =
            "¡Perfecto! Abriendo WhatsApp...";

        mensajeFormulario.style.color = "#198754";


        window.open(enlaceWhatsApp, "_blank");

    });

}

const parametros = new URLSearchParams(window.location.search);
const servicioSeleccionado = parametros.get("servicio");

const campoServicio = document.getElementById("servicio");

if (servicioSeleccionado && campoServicio) {
    campoServicio.value = servicioSeleccionado;
}