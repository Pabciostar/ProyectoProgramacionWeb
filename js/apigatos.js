// Obtener el contenedor donde se agregarán las imágenes
const contenedorGatos = document.getElementById("contenedor-gatos");

// Array de URLs de imágenes
const imagenes = [
    "https://cdn2.thecatapi.com/images/25.gif",
    "https://cdn2.thecatapi.com/images/10h.jpg",
    "https://cdn2.thecatapi.com/images/1ms.jpg",
    "https://cdn2.thecatapi.com/images/baf.jpg",
    "https://cdn2.thecatapi.com/images/bjp.jpg",
    "https://cdn2.thecatapi.com/images/bpk.jpg",
    "https://cdn2.thecatapi.com/images/brh.jpg",
    "https://cdn2.thecatapi.com/images/c78.jpg",
    "https://cdn2.thecatapi.com/images/e03.jpg",
    "https://cdn2.thecatapi.com/images/MTU1MTM1Mg.jpg"
];

// Función para agregar las imágenes al contenedor
function agregarImagenes() {
    // Variable para almacenar el HTML generado dinámicamente
    let html = '';

    // Iterar sobre el array de imágenes
    for (let i = 0; i < imagenes.length; i++) {
        // Agregar la etiqueta de imagen al HTML
        html += `<div class="col-4"><img src="${imagenes[i]}"></div>`;

        // Si el índice es divisible por 3 y no es el último índice, agregar una nueva fila
        if ((i + 1) % 3 === 0 && i !== imagenes.length - 1) {
            html += '</div><div class="row">';
        }
    }

    // Agregar el HTML al contenedor
    contenedorGatos.innerHTML = html;
}

// Llamar a la función para agregar las imágenes al cargar la página
agregarImagenes();
