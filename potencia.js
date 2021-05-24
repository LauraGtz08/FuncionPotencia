//    EJERCICIO:
//
// 1.- CREAR UNA FUNCIÓN LLAMADA "potencia()"
// 2.- SIMULAR SINCRONÍA DE LA FUNCIÓN MEDIANTE UN setTimeout de 10000
// 3.- setTimeout QUE PERMITA MEDIANTE UN CICLO FOR ELEVAR AL CUADRADO LOS NÚMEROS DEL 1 AL 1 000 000 EN UN ARREGLO
// 4.- USANDO LA FUNCIÓN Mat.pow() PARA INGRESAR LOS ELEMENTOS DEL ARREGLO
// 5.- PASAR LA LISTA A LA FUNCIÓN CALLBACK (callback(list))
// 6.- AGREGAR LOS console.log() NECESARIOS PARA MOSTRAR EL ORDEN DE EJECUCIÓN
// 7.- MOSTRAR EL RESULTADO MEDIANTE UN VIDEO CORTO EN LA ACTIVIDAD DEL CLASSROOM
// 8.- ANEZAR EL ENLACE A GITHUB

//ESTILO DE PROGRAMACIÓN: CONTINUATION-PASSIN STYLE
//CALLBACK ASÍNCRONA

const potencia = (n, callback4) => {
    var list = []; //ARREGLO

    setTimeout(() => {
        for (let i = 1; i<=1000000; i++){
            list.push(Math.pow(i, n))
        }
        callback4(list)
    }, 10000)
}

const miCallback4 = (resultado4) => { //FUNCIÓN ARGUMENTO
    console.log("RESULTADO DE LA FUNCIÓN CALLBACK: "+ resultado4)
}

console.log("ANTES DE LA FUNCIÓN CALLBACK")
potencia(2, miCallback4) //PILA DE LLAMADAS
console.log("DESPUÉS DE LA FUNCIÓN CALLBACK")

//PUSH: El método push () agrega nuevos elementos al final de una matriz y devuelve la nueva longitud
//MATH.POW: La función  Math.pow() devuelve la  base elevada al exponente , esto es, baseexponente. (base, exponente)