/*Transforma los elementos de una arreglo,
por cada iteracion y nos devuelve un arreglo*/
const numbers = [1, 2, 3,4 ,5]
// la funcion se llama con notacion de punto, esto seria un metodo
const numbers2 = numbers.map(number => {
    return number*2;
});

const productos = [
    {
        id: 1,
        nombre: "llanta",
        precio: 50
    },
    {
        id: 2,
        nombre: "balon",
        precio: 100
    },
    {
        id: 3,
        nombre: "zapato",
        precio: 150
    }
]
console.log(numbers2);

const precioPorDos = productos.map(producto => {
    producto.id = producto.id + 4
    return producto.precio *2;
});

productos[0].id = 1

console.log(productos);
console.log(precioPorDos);
