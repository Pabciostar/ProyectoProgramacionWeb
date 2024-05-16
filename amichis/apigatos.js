
// const div= document.getElementById("contenedor-gatos")



// $.ajax({

//     url:"https://api.thecatapi.com/v1/images/search?limit=10",
//     method:"get",
//     headers:{ 'x-api-key' : 'live_b4fnTUMDRqSxQ5qDdikgLIqafBit6PCk7vBbMixqN6IGW2mhKKV0B74tCf6WiXTL' },
//     success: function(response){
//         console.log("holi",response)
//         const html= document.createElement("div")
//         html.className="col-4"
//         const img= document.createElement("img")
//         img.src= response[0].url
//         html.append(img)
//         div.append(html)
//     }



// })


// const div = document.getElementById("contenedor-gatos");

// $.ajax({
//     url: "https://api.thecatapi.com/v1/images/search?limit=10",
//     method: "get",
//     headers: { 'x-api-key': 'live_b4fnTUMDRqSxQ5qDdikgLIqafBit6PCk7vBbMixqN6IGW2mhKKV0B74tCf6WiXTL' },
//     success: function(response) {
//         console.log("Respuesta de la API:", response);
        
//         // Recorrer el array response con un foreach
//         response.forEach(function(item) {
//             // Por cada item crear un html (const html = document.createElement("div"))
//             const html = document.createElement("div");
//             html.className = "col-4";
            
//             // Por cada item crear un elemento img y setear el src con el url del item
//             const img = document.createElement("img");
//             img.src = item.url;
            
//             // Agregar la img al elemento html
//             html.append(img);
            
//             // agregar el elemento html al elemento div (el que tienes en la linea uno) -> div.append(html)
//             div.append(html);
//         });
//     }
// });
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
