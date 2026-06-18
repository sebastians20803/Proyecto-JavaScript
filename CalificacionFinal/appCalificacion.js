
document.addEventListener("DOMContentLoaded", () => {

    const examen = cargarExamenSeleccionado();
    porcentajeObtenido(examen);
});
     
function cargarExamenSeleccionado() {
    const indice = new URLSearchParams(window.location.search).get('examen');
    const examenes = JSON.parse(localStorage.getItem('examenes'));
    const examen = examenes[indice];
    return examen;
}

function porcentajeObtenido(examen){
    const respuestasUsuario = JSON.parse(sessionStorage.getItem("respuestasExamen") ) || {};
    let preguntasCorrectas = 0;

    const totalPreguntas = examen.preguntas.length;

    examen.preguntas.forEach((pregunta, i) => {
        
        let indiceSeleccionado = respuestasUsuario[i];
        let respuestaElegida = pregunta.respuestas[indiceSeleccionado];

        if (respuestaElegida.correcta === true){
            preguntasCorrectas++;

        }
    });
    const porcentaje = (preguntasCorrectas/totalPreguntas) * 100
    document.getElementById("porcetajeResultado").textContent =`${porcentaje}%`;
    
    document.getElementById("preguntasAcertadas").textContent = preguntasCorrectas;

    
    document.getElementById("totalPreguntas").textContent = totalPreguntas;

    document.getElementById('porcentajeMinimo').textContent = `${examen.porcentaje}`

    
    const estadoExamen = document.getElementById("estadoExamen");
        if (porcentaje >= Number(examen.porcentaje)) {

        estadoExamen.innerHTML = `
            <p class="aprobado">Aprobó el examen</p>`;

    } else {

        estadoExamen.innerHTML = `
            <p class="reprobado">No aprobó el examen</p>`;
    }
}

function eliminarSession(){
    sessionStorage.removeItem('respuestasExamen')
}









