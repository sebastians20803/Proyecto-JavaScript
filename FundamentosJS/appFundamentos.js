function validacionInfo() {

    const identificacion = document.getElementById("identificacion").value.trim();
    const nombre = document.getElementById("nombre").value.trim();

    const errorIdentificacion = document.getElementById("errorIdentificacion");
    const errorNombre = document.getElementById("errorNombre");

    errorIdentificacion.textContent = "";
    errorNombre.textContent = "";

    let valido = true;


    if (!identificacion) {
        errorIdentificacion.textContent = "La identificación es obligatoria.";
        valido = false;
    } else if (isNaN(identificacion) || identificacion.length !== 10) {
        errorIdentificacion.textContent = "Debe contener exactamente 10 números.";
        valido = false;
    }

    if (!nombre) {
        errorNombre.textContent = "El nombre es obligatorio.";
        valido = false;
    } else if (!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
        errorNombre.textContent = "El nombre solo puede contener letras.";
        valido = false;
    }

    return valido;

    console.log("Formulario válido");
}

function iniciarExamen() {

    if (!validacionInfo()){
        return
    }

    const params = new URLSearchParams(window.location.search);
    const indice = params.get('examen');
    window.location.href =` ../RealizarExamen/indexRealizarExamen.html?examen=${indice}`;
}

function cargarExamenSeleccionado() {
    const indice = new URLSearchParams(window.location.search).get('examen');
    const examenes = JSON.parse(localStorage.getItem('examenes'));
    const examen = examenes[indice];
    return examen;
}

function cambiarTitulo(examen){
   const tituloExamen = document.getElementById('tituloExamen');
   tituloExamen.textContent =  examen.titulo;
}

document.addEventListener('DOMContentLoaded', () => {

    const examen = cargarExamenSeleccionado();
    cambiarTitulo(examen);

});