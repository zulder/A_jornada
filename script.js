function mostrarCena(id) {
    // Oculta todas as seções
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => section.classList.add('oculto'));

    // Mostra a seção correspondente
    const section = document.getElementById(id);
    section.classList.remove('oculto');
}
