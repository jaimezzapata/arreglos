/* Una colección de datos, variables, funciones, objetos, etc */
// let arreglo = []
// let nuevoArreglo = new Array(3,4,5,3)
// console.log(arreglo);
// console.log(nuevoArreglo);
// function saludar() {
//     console.log('Hola Mundo');
// }
// let variasCosas = [1, 1.4, "hola", [2, 2], true, saludar]
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// let numeros = [2, 4, 6, 8, 10]
// let letras = ['A', 'B', 'C', 'D']
/*
    Tamaño: -> Cantidad de elementos dentro del arreglo
    Posiciones: -> Ubicación donde está cada elemento (posición 0)
*/
// console.log(variasCosas[5]());
// variasCosas[5]
/* Recorrido de un arreglo o llenado de un arreglo */

/* Métodos de los arreglos */

/*
    Métodos mutables -> Modifican el arreglo original
        .pop() -> Elimina la última posición de un arreglo
        .push() -> Agrega un elemento a la ultima posición
        .shift() -> Elimina la primera posición de un arreglo
        .unshift() -> Agrega un elemento a la primera posición
        .slice() -> Elimina un elemento X (se aplica la condición)
        .sort() -> Ordena los valores de un arreglo
    Métodos no mutables -> No modifican el arreglo original y devuelven un nuevo arreglo
        Nota: Reciben como argumento una función anónima (callBack)
        .map() -> Método que recorre, transforma y devuelve un nuevo arreglo
        .filter() -> Método que recorre y devuelve un nuevo arreglo con TODOS los elementos que cumplan con una condición
        .find() -> Método que recorre y devuelve un ÚNICO ( el primero que encuentra) elemento que cumpla una condición
        .some() -> Método que recorre y devuelve un ÚNICO elemento (true o false) si cumple una condición
        .forEach() -> Método que recorre y transforma un arreglo
        .every() -> Método que recorre un arreglo y retorna tue o false si todos los elementos cumplen una condición o no
        .reduce()
    Métodos de consulta
        .include() -> Método que valida si se incluye dentro de un arreglo
        .length() -> Define el tamaño de un arreglo
*/
// for (let index = 0; index < numeros.length; index++) {
//     if (numeros[index] % 2 == 0) {
//         console.log(numeros[index] + " numero par");
//     } else {
//         console.log(numeros[index] + " numero impar");
//     }
// }
// console.log(numeros.length);

/* map() */
// let nuevoArreglo = numeros.map(function (numero) {
//     return numero * 4
// })
// let nuevoArregloMap = numeros.map((numero) => numero * 4)
// console.log(nuevoArregloMap);

// let numerosforEach = numeros.forEach((numero)=> {
//     console.log(numero * 4);
// })
// console.log(numerosforEach);

// let numeroPares = numeros.filter((numero) => {
//     if (numero % 2 == 0) {
//         return numero
//     }
// })

// console.log(numeroPares);
// console.log(numeros);

// console.log(numeros);
// numeros.pop()
// console.log(numeros);
// numeros.pop()
// console.log(numeros);

// console.log(numeros)
// numeros.shift()
// console.log(numeros);
// numeros.shift()
// console.log(numeros);

// console.log(numeros)
// numeros.push("A")
// console.log(numeros);
// numeros.push(true)
// console.log(numeros);
// numeros.push(function saludar(){})
// console.log(numeros);

// console.log(numeros);
// numeros.unshift('A')
// console.log(numeros);
// numeros.unshift(false)
// console.log(numeros);

// console.log(numeros);
// numeros.splice(1, 1)
// console.log(numeros);


/* ...: operador de propagación o Spread Operator */
/* Desestructuración de datos (objetos y arreglos) */

/* Objetos de JavaScript */
/*
    Objeto es una colección de datos (atributos y métodos) (uno o muchos)
    Los objetos se construyen con: llave y valor
    llave: atributo (nombre, telefono, correo, etc)
    valor: es el contenido de la llave: (Jaime Zapata, 13452345234, correo@correo.com)
    - Objeto Literal
    - Objeto Constructor
 */

// let persona = {
//     nombre: "Jaime",
//     edad: 33,
//     correo: "correo@correo.com",
//     trabajando: true,
//     programar: function () {
//         console.log("Estoy programando....");
//     },
//     gustos: ["Programar", "Leer", "Ver peliculas", "Ver series"],
//     amigos: {
//         nombre: "Juan",
//         edad: 28,
//     }
// }
// console.log(persona);
// console.log(persona.nombre);
// if (persona.trabajando) {
//     console.log("La persona " + persona.nombre + " está trabajando");
// }
// console.log(persona.gustos[2]);
// persona.programar()

// let personas = []
// let persona = {}
// let repetir = true
// while (repetir) {
//     let nombre = prompt("Ingrese el nombre de la persona")
//     let edad = prompt("Ingrese la edad de la persona")
//     let salario = prompt("Ingrese el salario de la persona")
//     persona = {
//         nombre,
//         edad,
//         salario
//     }
//     personas.push(persona)
//     console.log(personas);
//     let menoresEdad = personas.filter((element) => element.edad < 18)
//     console.log(menoresEdad);
//     let opcion = prompt("Desea agregar otra persona? (s/n)")
//     if (opcion == "n") {
//         repetir = false
//     }
// }


/* 
Desarrollar un sistema de notas para un grupo de estudiantes
-Registrar un estudiante
-Buscar un estudiante (documento y/o por nombre)
-Mostrar listado de estudiantes que aprueban
-Mostrar listado de estudiantes que reprueban
-Eliminar un estudiante
-Ordernar los estudiantes por nombre
-Validar si un estudiante está matriculado
-Modificar un estudiante

El sistema se debe desarrollar con funciones
*/



let estudiantes = [
    {
        nombre: "Jaime Zapata",
        documento: 10203040,
        estado: "M",
        nota: 1
    },
    {
        nombre: "Daniela Aguiar",
        documento: 12345677,
        estado: "M",
        nota: 2
    },
    {
        nombre: "Daniela Aguiar",
        documento: 56745676,
        estado: "N",
        nota: 5
    },
]

let estudiante = {}
let repetir = true
let nombreEstudiante, documentoEstudiante, notaMateria, estadoMatricula

while (repetir) {
    let opcion = prompt("Seleccione:\n1 - Registrar un estudiante\n2 - Buscar estudiante (documento)\n3 - Buscar estudiante (nombre)\n4 - Estudiantes que pierden\n5 - Estudiantes que ganan\n6 - Eliminar un estudiante\n7 - Ordenar estudiantes\n8 - Validar matricula\n9 - Editar estudiante\n10 - Salir")
    switch (opcion) {
        case "1":
            registrarEstudiante()
            break;
        case "2":
            buscarPorDocumento()
            break;
        case "3":
            buscarPorNombre()
            break;
        case "4":
            estudiantesReprobados()
            break;
        case "5":
            estudiantesAprobados()
            break;
        case "6":
            eliminarEstudiante()
            break;
        case "7":
            break;
        case "8":
            break;
        case "9":
            break;
        case "10":
            repetir = false
            break;
    }
}

function registrarEstudiante() {
    nombreEstudiante = prompt("Ingrese el nombre del Estudiante")
    documentoEstudiante = prompt("Ingrese el documento del estudiante: ")
    notaMateria = Number(prompt('Ingrese la nota del estudiante: '))
    estadoMatricula = prompt("Seleccione:\nM - Matriculado\nN - No matriculado")
    estudiante = {
        nombre: nombreEstudiante,
        documento: documentoEstudiante,
        nota: notaMateria,
        estado: estadoMatricula
    }
    estudiantes.push(estudiante)
    console.log(estudiantes);
}

function buscarPorDocumento() {
    documentoEstudiante = prompt("Ingrese el documento del estudiante: ")
    estudiantes.find((estudiante) => {
        if (documentoEstudiante === estudiante.documento) {
            console.log(estudiante);
        }
    })

    /* arreglo.metodo((variable)=> condición) */
    /* arreglo.map((variable)=> condición) */
    /* arreglo.find((variable)=> condición) */
    /* arreglo.filter((variable)=> condición) */
}

function buscarPorNombre() {
    nombreEstudiante = prompt("Ingrese un nombre: ")
    estudiantes.filter((estudiante) => {
        if (nombreEstudiante === estudiante.nombre) {
            console.log(estudiante);
        }
    })
}

function estudiantesReprobados() {
    let reprobados = estudiantes.filter((estudiante) => estudiante.nota < 3)
    console.log(reprobados);
}

function estudiantesAprobados() {
    let aprobados = estudiantes.filter((estudiante) => estudiante.nota >= 3)
    console.log(aprobados);
}


function eliminarEstudiante() {
    documentoEstudiante = prompt("Ingrese el documento del estudiante: ")
    let estudianteEncontrado = estudiantes.find((estudiante) => documentoEstudiante == estudiante.documento)
    let posicion = estudiantes.indexOf(estudianteEncontrado)
    estudiantes.splice(posicion, 3)
    console.log(estudiantes);    
}


function editarEstudiante(){
    documentoEstudiante = prompt("Ingrese el documento del estudiante: ")
    let estudianteEncontrado = estudiantes.find((estudiante) => documentoEstudiante == estudiante.documento)
    /* condicional */
}

function ordenarPorNombre(){
    estudiantes.sort(/* valorUno, valorDos */)
}
/* Editar */