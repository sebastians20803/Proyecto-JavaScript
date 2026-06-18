let examenes = []

function adjuntarExamen(examen){
    const contenedor = document.getElementById('examenes')
    const section  = document.createElement('section');
    section.classList.add ('card-examen');
    section.innerHTML =
    `
    <div class="linea-superior" id="divSeleccion"></div>

        <h3>${examen.titulo} / Codigo ${examen.codigo} </h3>

        <p class="descripcion">
            ${examen.descripcion}
        </p>

        <div class="detalles">
            <span> ${examen.tiempo} min </span>
            <span> ${examen.porcentaje}% aprueba</span>
            <span> ${examen.preguntas.length} preguntas </span>
        </div>

    <nav class="nav">
        <a href="./FundamentosJS/indexFundamentos.html?examen=${examenes.indexOf(examen)}">Presentar</a>
    </nav>
    
    `
    contenedor.append(section);
};

function cargarExamenes() {
    const data = localStorage.getItem('examenes');
    if (data) {
        examenes = JSON.parse(data);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    cargarExamenes()
    examenes.forEach(examen => adjuntarExamen(examen))
    
});

