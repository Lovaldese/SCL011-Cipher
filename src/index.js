/*Acá va tu código*/

//Crear condicional para la edad//

let edad = parseInt(prompt("¡Hola!,ingresa tu edad"));

//Solo mayores de 18 pueden ingresar//
if( edad >=18){
alert ("Puedes ingresar al sitio")
   
} else {(edad <18)
    alert ("No puedes ingresar al sitio")

//crear funcion para que si no es mayor de edad no se muestre la pagina//
document.getElementById("root").style.display= "none";
document.getElementById("cuerpo2").style.display= "none";
    
}



// ** declarar variable donde guardar boton
const buttonCifrar = document.getElementById("cifrar");
// ** dar evento al boton con var guardada
buttonCifrar.addEventListener ("click", ()=>{



// Dentro del click declarar variable que guarde mensaje ingresado
let texto = document.getElementById ("texto").value.toUpperCase();
console.log (texto);

// Otra variable que guarde numero ingresado
let codigo1 = parseInt(document.getElementById("codigo").value);
console.log (codigo1);



let cipher="";
for (let i= 0; i < texto.length; i++){
    console.log (texto[i]);
    
    let mensaje = texto.charCodeAt(i);
    console.log(mensaje);
    let formula1 = (mensaje- 65 + codigo1)%26 + 65;
    console.log(formula1);

    let cipher2=String.fromCharCode(formula1);
     cipher+=cipher2;

    
    console.log(cipher);



    texto2.innerHTML= cipher;

}
})

// for toma una serie de condiciones que nosotros le daremos
// se crea un let + un i (indice o index, puede ser valor que yo quiera,es una variable que puede tener cualquier nombre.
// al colocar 0 yo le digo que comience en ese valor
//la condicion se escribe luego del ; para indicarle hasta donde quiero que cumpla y ejecute el codigo que colocare
//yo quiero que la condicion parta desde 0 y la variable i sea menor a la variable.length
//i++ incrementa en uno el valorlet cipher= texto.charCodeAt(i) ;
     
// estamos diciendo que la variable i empiece en 0,luego le digo que mientras i sea menor que texto.lenght ejecuta el codigo de adentro  de las llaves{}
//en console log le digo que me muestre el texto que escribe el cliente.
//PARA HACER EL RECORRIDO DEBO COLOCAR DENTRO DEL [] LA VARIABLE i PARA QUE ME EJECUTE TODO LO QUE ESTA ESCRITO EN TEXTO Y 
//SEA RECORRIDO.




//Descifrar

const buttonDescifrar = document.getElementById("descifrar");
// ** dar evento al boton con var guardada
buttonDescifrar.addEventListener ("click", ()=>{



// Dentro del click declarar variable que guarde mensaje ingresado
let texto = document.getElementById ("texto").value.toUpperCase();
console.log (texto);

// Otra variable que guarde numero ingresado
let codigo1 = parseInt(document.getElementById("codigo").value);
console.log (codigo1);



let descipher="";
for (let i= 0; i < texto.length; i++){
    console.log (texto[i]);
    
    let mensaje = texto.charCodeAt(i);
    console.log(mensaje);
    let formula1 = (mensaje- 65 - codigo1)%26 + 65;
    console.log(formula1);

    let descipher2=String.fromCharCode(formula1);
     descipher+=descipher2;

    
    console.log(descipher);



    texto2.innerHTML= descipher;

}
})
// ** evento click y decirle que me cambie de html


//Que aparezca el nombre del usuario en la bienvenida
// ** declarar variable donde guardar nombre


// ** rescatar valor de input que ingreso el Usuario

// ** imprimir en html // voy a imprimir en consola primero


// que el boton ir a variedades me envie a sativa e indica
// que al seleccionar la especie aparezca en la siguiente pagina los 3 tipos de especie
// que al seleccionar la especie coloque continuar y pueda escribir mensaje


//que al rescatar mensaje escoja y el numero
//
//que al mandar el mensaje le llegue al dealer cifrado
//que el dealer puedra descifrar el mensaje oculto