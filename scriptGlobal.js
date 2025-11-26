function atualizarInterfaceLogin() {
    const logado = localStorage.getItem("usuarioLogado");

    const logArea = document.querySelector(".Log-area");
    const userArea = document.querySelector(".User-area");
    const comofunciona = document.querySelector(".como-funciona");
    const stories = document.querySelector(".stories-container");

    if (logado === "true") {
        if (logArea) logArea.style.display = "none";
        if (userArea) userArea.style.display = "flex";
        if (comofunciona) comofunciona.style.display = "none";
        if (stories) stories.style.display = "flex";
    } else {
        if (logArea) logArea.style.display = "flex";
        if (userArea) userArea.style.display = "none";
        if (comofunciona) comofunciona.style.display = "flex";
        if (stories) stories.style.display = "none";
    }

}

// chama quando a página carrega
document.addEventListener("DOMContentLoaded", atualizarInterfaceLogin);

// Evento de clique para abrir o popup
document.addEventListener("click", (e) => {
    if (e.target.closest(".perfil-sair")) {
        document.getElementById("logoutPopup").style.display = "flex";
    }
});

const cancelBtn = document.getElementById("cancelLogout");
const confirmBtn = document.getElementById("confirmLogout");
const popup = document.getElementById("logoutPopup");

if (cancelBtn && popup) {
    cancelBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });
}

if (confirmBtn && popup) {
    confirmBtn.addEventListener("click", () => {
        localStorage.removeItem("usuarioLogado");
        atualizarInterfaceLogin();
        window.location.href = "/Paginas/index.html";
    });
}