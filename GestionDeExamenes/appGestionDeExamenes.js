

function crearPregunta (){
    const preguntas = document.getElementById('preguntas');
    const div = document.createElement('div');

    div.classList.add('pregunta-item');
    div.innerHTML = `
        <div class="pregunta-header">
            <label>Pregunta</label>
            <button class="btn-eliminar">Eliminar</button>
        </div>

        <input type="text" class="preguntaQuestion"placeholder="Escribe la pregunta aquí">

        <div class="opcion">
            <input type="radio" name="respuesta1" id="r1a">
            <input type="text" id="text-respuesta" placeholder="Descripcion de la respuesta">
            <button class="btn-quitar">Quitar</button>
        </div>

        <div class="opcion">
            <input type="radio" name="respuesta1" id="r1b">
            <input type="text" id="text-respuesta" placeholder="Descripcion de la respuesta">
            <button class="btn-quitar">Quitar</button>
        </div>

        <div class="agregarRespuesta" id="agregarRespuestaButton">
            <button>Agregar Respuesta</button>
        </div>

    `;

    const btnEliminar = div.querySelector('.btn-eliminar');
    btnEliminar.addEventListener('click', () => { 
        div.remove();
        actualizarNumeracion();
    });


    const btnQuitar=div.querySelectorAll('.btn-quitar');

    btnQuitar.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.opcion').remove();    
    });
    });


    const btnAgregar = div.querySelector('.agregarRespuesta button');
    btnAgregar.addEventListener('click', () => agregarRespuestas(div));

    preguntas.append(div);
    actualizarNumeracion(); 
    
}

function agregarRespuestas(preguntaDiv) {

    const divAgregarRespuesta = preguntaDiv.querySelector('.agregarRespuesta');

    const nuevaOpcion = document.createElement('div');
    nuevaOpcion.classList.add('opcion');
    nuevaOpcion.innerHTML = `
        <input type="radio" name="respuesta1">
        <input type="text" id="text-respuesta"  placeholder="Descripcion de la respuesta">
        <button class="btn-quitar">Quitar</button>
    `;

    nuevaOpcion.querySelector('.btn-quitar').addEventListener('click', () => {
        nuevaOpcion.remove();
    });

    preguntaDiv.insertBefore(nuevaOpcion, divAgregarRespuesta);
}


function actualizarNumeracion() {
    
    const todasLasPreguntas = document.querySelectorAll('.pregunta-item');
    todasLasPreguntas.forEach((pregunta, index) => {
        pregunta.querySelector('.pregunta-header label').textContent = `Pregunta ${index + 1}`;
    });

    console.log(todasLasPreguntas);
}

function limpiarExamen(){8 

    const formExamen = document.querySelector('.formExamen');
    formExamen.reset();

    document.querySelectorAll('.pregunta-item').forEach(pregunta => {
        pregunta.remove();
    });
    crearPregunta();
}

let examenes = []

function crearExamen(){
    const codigo = document.getElementById('codigo').value;
    const titulo = document.getElementById('titulo').value;
    const tiempo = document.getElementById('tiempo').value;
    const porcentaje = document.getElementById('porcentaje').value;
    const descripcion = document.getElementById('descripcion').value;


    const preguntas = document.querySelectorAll('.pregunta-item');
    const preguntasExamen = [];

    preguntas.forEach(pregunta=> {
        const numeroPregunta = pregunta.querySelector('.pregunta-header label').textContent;
        const preguntaQuestion = pregunta.querySelector('.preguntaQuestion').value;

        const opciones = pregunta.querySelectorAll('.opcion');

        const respuestasExamen = [];

        opciones.forEach(respuesta => {
            const textRespuesta = respuesta.querySelector('input[type="text"]').value;
            const esCorrecta = respuesta.querySelector('input[type="radio"]').checked;

            respuestasExamen.push({
                respuesta: textRespuesta,
                correcta: esCorrecta
            })

        });

        preguntasExamen.push({
            numeroPregunta: numeroPregunta,
            preguntaQuestion: preguntaQuestion,
            respuestas: respuestasExamen

        });

    });

    const examen = {

        codigo: codigo,
        titulo: titulo,
        tiempo:tiempo,
        porcentaje:porcentaje,
        descripcion:descripcion,
        preguntas: preguntasExamen

    };
    console.log(examen);
    examenes.push(examen);
    guardarExamenes(); 
    agregarFilaTabla(examen);
    
}


function agregarFilaTabla(examen){
    const tbody = document.getElementById('tbody');
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${examen.codigo}</td>
        <td>
            <strong>${examen.titulo}</strong><br>
            <span>${examen.descripcion}</span>
        </td>
        <td>${examen.tiempo} min</td>
        <td>${examen.porcentaje}%</td>
        <td>${examen.preguntas.length}</td>
        <td>
            <button class="btn-editar">Editar</button>
            <button class="btn-eliminar-examen">Eliminar</button>
        </td>
        `
    ;

    fila.querySelector('.btn-editar').addEventListener('click', () => {
            editarExamen(examen);
        });

    fila.querySelector('.btn-eliminar-examen').addEventListener('click', () => {
            fila.remove();
        });

    tbody.append(fila);
}

function editarExamen(examen) {
    document.getElementById('codigo').value = examen.codigo;
    document.getElementById('titulo').value = examen.titulo;
    document.getElementById('tiempo').value = examen.tiempo;
    document.getElementById('porcentaje').value = examen.porcentaje;
    document.getElementById('descripcion').value = examen.descripcion;

    document.querySelector('.preguntasDiv .pregunta-item').innerHTML = '';
    
    const preguntas = document.querySelectorAll('.pregunta-item');

    preguntas.forEach(element => {
        element.remove()
    });
}



function guardarExamenes() {
    localStorage.setItem('examenes', JSON.stringify(examenes));
}

function cargarExamenes() {
    const data = localStorage.getItem('examenes');
    if (data) {
        examenes = JSON.parse(data);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    cargarExamenes(); 
    examenes.forEach(examen => agregarFilaTabla(examen));
    crearPregunta();
});