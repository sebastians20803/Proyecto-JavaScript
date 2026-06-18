let users = [];


function cargarUsers() {
    
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];



    if (usuarios.length === 0) {
    usuarios.push({
        identificacion: "1",
        nombre: "Administrador",
        email: "admin",
        password: "admin",
        cargo: "Administrador"
    });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}
users = usuarios;

}



document.addEventListener('DOMContentLoaded', () => {
    
    cargarUsers()
    
});


const dom = document;

function validarInputs() {
    const email = dom.getElementById("emailInput").value.trim();
    const password = dom.getElementById("passwordInput").value.trim();

    if (!email || !password) {
        alert("Por favor completa todos los campos");
        return
    }

    const usuarioEncontrado = users.find(u => u.email === email);

    if (!usuarioEncontrado) {
        alert("Correo equivocado");
        return
    }

    if (usuarioEncontrado.password !== password) {
        alert("Contraseña incorrecta");
        return;
    }

    
    sessionStorage.setItem("usuarioLogueado", JSON.stringify({
    identificacion: usuarioEncontrado.identificacion,
    nombre: usuarioEncontrado.nombre,
    email: usuarioEncontrado.email,
    cargo: usuarioEncontrado.cargo
    }));


    window.location.href = "../GestionUsuarios/usuarios.html";

}

