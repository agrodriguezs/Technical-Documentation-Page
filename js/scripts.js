document.getElementById("cerrar").style.display = "none";
function mostrar() {
    document.getElementById("navbar").style.width = "300px";
    document.getElementById("navbar").style.display = "inline";
    document.getElementById("main-doc").style.marginLeft = "300px";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
}

function ocultar() {
    document.getElementById("navbar").style.display = "none";
    document.getElementById("navbar").style.width = "0";
    document.getElementById("main-doc").style.marginLeft = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
}
