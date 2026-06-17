function iniciarExamen() {
    const params = new URLSearchParams(window.location.search);
    const indice = params.get('examen');
    window.location.href = `../RealizarExamen/indexRealizarExamen.html?examen=${indice}`;
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