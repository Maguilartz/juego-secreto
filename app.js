let numSecret=0;
let intentos=1;
let listaNumeroSorteado=[];
let numeroMaximo=10;

function asignarTextoElemento (elemento, texto){
    let elementohtml=document.querySelector(elemento);
    elementohtml.innerHTML=texto;
}

function generarNumeroSecreto(){
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumeroSorteado.length==numeroMaximo){  //si ya se sortearon todos los números posibles sin repetición
        asignarTextoElemento('p','Se han sorteado todos los números posibles');
    }else{
        if (listaNumeroSorteado.includes(numeroGenerado)){ //si el num generado ya existe (se incluye en la lista)
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteado.push(numeroGenerado); //incluye el numero generado en la lista para que no vuelva a salir (restricción ya delimitada)
            return numeroGenerado;
        }
    }
}



function verificarIntento(){
    let numeroDelUsuario=parseInt(document.getElementById('valorUsuario').value); //por id, que debería ser el id del elemento a seleccionar en html; value obtiene el valor del elemento (contenido del input en este caso)
    if (numSecret===numeroDelUsuario){  //acertó
        asignarTextoElemento('p', `¡Acertaste! Lograste el número en ${intentos} ${(intentos===1 ? 'vez': 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{  //no acertó
        if(numeroDelUsuario>numSecret){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        } 
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value=''; 
}

function condicionesIniciales(){
    asignarTextoElemento ('h1', 'Juego del número secreto');
    asignarTextoElemento ('p', `Indica un número del 1 al ${numeroMaximo}`);
    numSecret=generarNumeroSecreto();
    console.log(numSecret);
    console.log(listaNumeroSorteado);
    intentos=1;
}

function reinicioJuego(){
    //limpiar caja
    limpiarCaja();
    //Rescribir mensajes de inicio, reiniciar número de intentos realizados, generar número aleatorio
    condicionesIniciales();
    //deshabilitar nuevamente el botón
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();


