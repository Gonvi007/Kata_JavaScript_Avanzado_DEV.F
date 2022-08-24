"use strict"

const d = document

// Capturando los nodos de html con JS
const input_todo = d.getElementById('input-todo')
const btn_add = d.getElementById('btn-add')
const content_w = d.getElementById('content-wrapper')

// URL base para consumir API
const url = 'http://localhost:3000/data'

// Funcion que imprime li y button en el DOM
const printTask = (task) => {
  let li = d.createElement('li')
  li.textContent = task

  const btn_1 = d.createElement('button')
  const btn_2 = d.createElement('button')
  btn_1.textContent = 'Editar'
  btn_2.textContent = 'Eliminar'

  btn_1.addEventListener('click', () => {
    console.log('Editando...');
  })

  btn_2.addEventListener('click', () => {
    console.log('Eliminando...');
  })

  li.append(btn_1, btn_2)

  content_w.appendChild(li)
}

// Funcion que obtine datos de la API
const getData = () => {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      data.array.forEach(element => {
        printTask(element.task)        
      });
      // return console.log(data); 
    })
    .catch(error => console.error(error))
}

// // Funcion que envia datos a la API
// const postData = (task) => {
//   return fetch(url, {
//     method: 'POST',
//     header: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       'task': task
//     })
//   })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .chatch(error => console.error(error))
// }
// postData();
// getData();

// btn_add.addEventListener('click', () => {
//   postData(input_todo.value);
// })