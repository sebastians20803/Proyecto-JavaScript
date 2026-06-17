
let users = [

    { 
        email: "brayanstevenriano@gmail.com",
        password: "Sebastian123!"
    }, 
     {
        email: "sebastians20803@gmail.com",
        password: "Sebastian123!"
    },
     { 
        email: "sebastiancampus@gmail.com",
        password: "Sebastian123!"
    },

] 

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

    window.location.href = "../GestionUsuarios/usuarios.html";

}