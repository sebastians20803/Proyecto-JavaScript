const usuario = sessionStorage.getItem("usuarioLogueado");

if (!usuario) {
    alert("Debes iniciar sesión");
    window.location.href = "../Login/login.html";
}