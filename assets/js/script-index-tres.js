   

function seleccionarEingresar(){
    valor1 = Number(document.getElementById('valor1').value) 
    valor2 = Number(document.getElementById('valor2').value) 
    valor3 = Number(document.getElementById('valor3').value) 
    mensaje = document.getElementById('mensaje')
}

function ingresar(){
    if(valor1 == 9 && valor2 == 1 && valor3 == 1 ){
        mensaje.innerHTML = 'password 1 correcto';

    } else if (valor1 == 7 && valor2 == 1 && valor3 == 4){
        mensaje.innerHTML = 'password 2 correcto';
    } else {
        mensaje.innerHTML = 'password incorrecto';
    }
}

