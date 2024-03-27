//console.log("Hola")
console.log(localStorage)

/* localStorage.setItem('bienvenida', "Holca Curso") No hay problema
localStorage.setItem('numero', 5) // Podemos guardar pero cuando recibimos solo recicimos cadena de cartacteres
localStorage.setItem('booleano', true) // podemos guardarlo pero obtenemos una cadena de caracteres
localStorage.setItem('alumnos', ["Maria", "Nicolas", "Diego", "Agustin"]) // podemos guardarlo pero lo recibimos como una cadena
localStorage.setItem('producto', {nombre: "Play Station", precio: 700000}) // se guarda mal y se recibe mal 
localStorage.setItem("basura", "cualquier cosa que vamos a borrar"); */

//sessionStorage.setItem('bienvenida', "Hola Alumnos")
//console.log(localStorage)
//localStorage.clear()


/* console.log(localStorage.length)
localStorage.removeItem('basura')

for(let i=0; i < localStorage.length; i+=1){
    let clave = localStorage.key(i);
    //console.log(clave)
    console.log(`la clave es ${clave}`)
    console.log(`El valor es ${localStorage.getItem(clave)}`)
} */

localStorage.setItem("booleano", true);

//localStorage.setItem("numero", 22);
let numero = Number(localStorage.getItem("numero"));
let bandera = localStorage.getItem("booleano");
bandera = bandera === "true";
console.log(bandera)
console.log(typeof bandera);


let resultado = document.querySelector('#valor')
resultado.textContent = numero + numero;

/* let alumnos = localStorage.getItem("alumnos")
resultado.textContent = alumnos;  */

const alumnos = localStorage.getItem('alumnos').split(',')
console.log(alumnos);
console.log(alumnos[2])

const item = { nombre: "Play Station", precio: 700000 };
console.log(item)
console.log(item.nombre)

//localStorage.setItem('producto', JSON.stringify(item)) // se guarda mal y se recibe mal 

let objProducto = JSON.parse(localStorage.getItem('producto'))
console.log(objProducto);
console.log(objProducto.nombre)

localStorage.setItem("usr", "adrgon");
localStorage.setItem("pas", "1234")
