function buscar() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Este script redirigirá a la página correspondiente según la búsqueda
    switch (searchTerm) {
        case 'inicio':
            window.location.href = 'inici.html';
            break;
        case 'audios':
            window.location.href = 'audios.html';
            break;
        case 'videos':
            window.location.href = 'videos.html';
            break;
        default:
            mensaje.innerHTML = 'Página no encontrada';
    }
}