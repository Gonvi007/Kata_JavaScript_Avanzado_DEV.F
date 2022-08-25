"use strict"

const d = document;

// para capturar nodos de html con JS
const galleryContainer = d.getElementById('gallery-container')

const url_base = "https://picsum.photos/v2/list"

const printGallery = () => {
    const div = d.createElement('div')
    div.classList.add("grid-item")
    
    galleryContainer.appendChild(div)
}
printGallery();

const getImages = async () => {
    const response = await fetch(url_base)
    const data = await response.json()

    data.forEach(element => {
        printGallery();
    });
}
getImages();

// // Funcion para obtener datos de la API
// const getData = () => {
//     return fetch(url_base)
//         .then(response => response.json())
//         .then(data => {
//             data.forEach(element => {
//                 printGallery(element.div, element.id)
//             });
//         })
//         .catch(error => console.error(error))
// }
// getData();

// // Funcion para enviar datos a la API
// const postData = (img) => {
//     return fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             'id': uuidv4(),
//             'img': img
//         })
//     })
// }

// getData()
