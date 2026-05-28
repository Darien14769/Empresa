function ENRUTADOR_SPA() {
  const rutaActual = window.location.hash || "#inicio";

  const banner = document.getElementById("vista-banner");
  const tiktok = document.getElementById("vista-tiktok");
  const productos = document.getElementById("vista-productos");
  const contacto = document.getElementById("vista-contacto");

  if (rutaActual === "#inicio") {
    banner.style.display = "flex";
    tiktok.style.display = "block";
    productos.style.display = "none";
    contacto.style.display = "none";
  } else if (rutaActual === "#productos") {
    productos.style.display = "block";
    banner.style.display = "none";
    tiktok.style.display = "none";
    contacto.style.display = "none";
  } else if (rutaActual === "#contacto") {
    contacto.style.display = "block";
    banner.style.display = "none";
    tiktok.style.display = "none";
    productos.style.display = "none";
  }

  // NUEVA LÍNEA: Sube la pantalla al inicio automáticamente al cambiar de sección
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", ENRUTADOR_SPA);
window.addEventListener("DOMContentLoaded", ENRUTADOR_SPA);
