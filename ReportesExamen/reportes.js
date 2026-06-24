const dom=document

// const usuario = sessionStorage.getItem("usuarioLogueado");

// if (!usuario) {
//      alert("Inicia sesion");
//     window.location.href = "../Login/login.html";
//  }

let examenes=JSON.parse(localStorage.getItem("examenes"))

for(examen of examenes){
    const idExamen=dom.getElementById("codigoExamen")
    const tituloExamne=getElementById("tituloExamne")
    const porcentaje=getElementById("porcentaje")
    const numEstudiantes=getElementById("numEstudiantes")
    const promedio=getElementById("promedio");

    
const section=getElementById("section")

buttonMostrar.addEventListener("click", ()=>{
    section.innerHTML+=
        `<p id="codigoExamen">${examen.codigo}</p>
        <p id="tituloExamen">${examen.titulo}</p>
        <p id="porcentaje">${examen.porcentaje}</p>
        <p id="numEstudiantes">${examen.veces_realizado}</p>
        <p id="promedio">${examen.veces_realizado}</p>`

})

}

const buttonMostrar=dom.getElementById("mostrar")

