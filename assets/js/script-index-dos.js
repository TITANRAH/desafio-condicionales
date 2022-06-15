function verificarStickers(){

    cantidadAceptada = 10;
    parrafoSobreDiez = '<i class="bi bi-x-square"></i> LLEVAS DEMASIADOS STICKERS :(';
    parrafoBajoDiez = ' <i class="bi bi-bag-check"></i> BUENA ELECCION, DISFRUTA TUS STICKERS !';
    parrafoCantidadCero = '<i class="bi bi-emoji-frown"></i> ¿EN SERIO ,NO LLEVARAS NINGUNO? <i class="bi bi-emoji-frown"></i>'
    

    inputUno = Number(document.getElementById('input-uno').value);
    inputDos = Number(document.getElementById('input-dos').value);
    inputTres = Number(document.getElementById('input-tres').value);
   
    totalStickers = inputUno + inputDos + inputTres;
    numeroStickers = document.querySelector('.numero-stickers');
    parrafoFinal = document.querySelector('.mensaje-demasiados');
    
    alertaSobreDiez = `<i class="bi bi-x-square"></i> HOLA LLEVAS ${totalStickers} STICKERS, PERO MAXIMO SON ${cantidadAceptada}`;
    alertaBajoDiez = `<i class="bi bi-bag-check"></i> HOLA, LLEVAS ${totalStickers} STICKER(S) ;)`;
    alertaCantidadCero = `<i class="bi bi-emoji-frown"></i> HOLA, LLEVAS ${totalStickers} STICKER(S) <i class="bi bi-emoji-frown"></i>`;

  
    if(totalStickers > 10){
        numeroStickers.innerHTML = alertaSobreDiez;  
        parrafoFinal.innerHTML = parrafoSobreDiez;

    } else if(totalStickers <= 0){
        numeroStickers.innerHTML = alertaCantidadCero;  
        parrafoFinal.innerHTML = parrafoCantidadCero;

    } else {
        numeroStickers.innerHTML = alertaBajoDiez;
        parrafoFinal.innerHTML = parrafoBajoDiez;
    } 

}