"use strict"

const d = document

const input_todo = d.getElementById('input-todo') 
const btn_add = d.getElementById('btn-add') 
const content_w = d.getElementById('content-wrapper')

const url = 'http://localhost:3000/data'

const printTask = () => {
  let li = d.createElement('li')
  li.textContent = "Hola, soy una tarea"

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

printTask()
