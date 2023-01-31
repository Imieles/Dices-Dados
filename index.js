function dado(dadoNumber){
    var randomNumber1 = (Math.floor(Math.random() * 6)+1);//Genera un numero aleatorio.
    var imgDado = "images/dice"+randomNumber1+".png"//Selecciona la imagen correspondiente al numero aleatorio.
    console.log(imgDado);//Linea de prueba
    return [document.querySelector(".img"+dadoNumber).setAttribute("src", imgDado), randomNumber1];//Retorna una Array con el query de la imagen y el numero aleatorio.
}

function dadoComparator (fundado1, fundado2) {
    var comparator = "none";
    var dado1 = fundado1[0];//Query de la imagen dentro del array de la función dado.
    var dado2 = fundado2[0];//Query de la imagen  dentro del array de la función dado.
    if(fundado1[1] === fundado2[1]){//Comparación de los dos numero aleatorios dentro del array dado. 
        comparator = document.querySelector("h1").innerHTML = "Draw! &#127765";
    }else if(fundado1[1] > fundado2[1]){
        comparator = document.querySelector("h1").innerHTML = "&#127764 Player 1 Wins";
    }else {
        comparator = document.querySelector("h1").innerHTML = "Player 2 Wins &#127766";
    }
    return [dado1, dado2, comparator];//Retorna un array con las dos querys de las imagenes y la query producto de la comparación de los numero aleatorios.
}