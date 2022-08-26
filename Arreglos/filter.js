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

const filtro1 = productos.filter(producto => productos.precio === 150);

console.log(filtro1);