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
];

const dom = document;

function validarInputs() {
    const email = dom.getElementById("emailInput").value.trim();
    const password = dom.getElementById("passwordInput").value.trim();
    const mensaje = dom.querySelector(".form__texto");


    mensaje.textContent = "";

    if (!email || !password) {
        mensaje.textContent = "Por favor completa todos los campos";
        mensaje.style.color = "red";
        return;
    }

    const usuarioEncontrado = users.find(u => u.email === email);

    if (!usuarioEncontrado) {
        mensaje.textContent = "Contraseña o contraseña incorrecto";
        mensaje.style.color = "red";
        return;
    }

    if (usuarioEncontrado.password !== password) {
        mensaje.textContent = "Contraseña o contraseña incorrecto";
        mensaje.style.color = "red";
        return;
    }

    window.location.href = "../GestionUsuarios/usuarios.html";
}