    async function extraerDatos(){
    const url = `https://random.dog/woof.json`;

    try{
        const response = await fetch(url);
        const data = await response.json();
        const imageURL = data.url;
        mostrarDatos(imageURL);
    } catch(error){
        console.log('Error', error);
    }
}

function mostrarDatos(imageURL){
    const imagen = document.getElementById('imagen'); //Obtiene al contenedor de la imagen
    imagen.innerHTML= `<img src = "${imageURL}">`; // Se coloca la imagen en el contenedor
} 

extraerDatos(); //Se ejecuta la función