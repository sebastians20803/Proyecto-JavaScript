
let intervalo = null;

function temporizador(examenTimer) {
    const minutos = examenTimer.tiempo;
    const display = document.getElementById('displayTimer')
    clearInterval(intervalo);

    display.textContent = minutos;

    let tiempoRestante = minutos * 60;

    actualizarDisplay();

    intervalo = setInterval(() => {
        tiempoRestante--;
        actualizarDisplay();
        if (tiempoRestante === 0) {
            clearInterval(intervalo);
            display.textContent = '¡Tiempo cumplido!';
        }
        
    }, 1000);


    function actualizarDisplay() {
        let mins = Math.floor(tiempoRestante / 60);
        let segs = tiempoRestante % 60;

        display.textContent =
            `${String(mins).padStart(2, '0')}:${String(segs).padStart(2, '0')}`;
    }
}

function tituloExamen(examen){

    const main = document.getElementById('main');
    const section  = document.createElement('section');
    const codigo = examen.codigo;
    section.classList.add ('titulo_examen');
    section.innerHTML =
    `
        <div class="izquierda" id="divSeleccion">
            <p> ${codigo} </p>
            <h3>${examen.titulo}  </h3>

            <p> ${examen.preguntas.length} preguntas - Aprueba con ${examen.porcentaje}%  </p>

        </div>    

        <div class="derecha">

            <div class="timer" id="displayTimer">
                --
            </div>
        </div>
    
    `
    main.append(section);

}

function preguntasExamen(examenPreguntas){

    const main = document.getElementById('main');
    const preguntas = examenPreguntas.preguntas;

    const section = document.createElement('section');
    section.classList.add('preguntas-examen');

    preguntas.forEach((i, indice) =>{

        const numeroPregunta = indice+1;
        const question = i.preguntaQuestion;
        const respuestas = i.respuestas;

        
        const div = document.createElement('div');
        div.classList.add('caja-pregunta');
        div.innerHTML =
        `
            <p>${numeroPregunta}. ${question} </p>

        `

        respuestas.forEach((respuestaI, index) =>{
            const rta = respuestaI.respuesta;
            div.innerHTML+= 
            `
            <label class="option" >
                <input type="radio" name="q${indice+1}" id="opt-let">
                ${rta}
            </label>

             `
        })

        section.append(div)

    })
        
    main.append(section)
    
   

}


function cargarExamenSeleccionado() {
    const indice = new URLSearchParams(window.location.search).get('examen');
    const examenes = JSON.parse(localStorage.getItem('examenes'));
    const examen = examenes[indice];
    return examen;
}


document.addEventListener('DOMContentLoaded', () => {
    const examen = cargarExamenSeleccionado();
    tituloExamen(examen);
    preguntasExamen(examen);
    temporizador(examen);
   
});
