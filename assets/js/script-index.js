



function mostrarOcultarBorde(){

    imagen = document.querySelector("img");

    if(imagen.style.border == ""){
        imagen.style.border = "solid 2px red"
    }else {
        imagen.style.border = ""
    }

}

