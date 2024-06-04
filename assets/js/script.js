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
    const output = document.getElementById('output');
    output.innerHTML= `<img src = "${imageURL}">`;
} 

extraerDatos();