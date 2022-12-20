Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

var camara = document.getElementById("camara");
Webcam.attach("#camara");

function capturarImagen() {
    Webcam.snap(function (data_uri) {
        document.getElementById("resultado").innerHTML = '<img id="imagenCapturada" src="' + data_uri + '">';
    });
}
reconocerObjeto = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/kD6xUSwJS/model.json", interlistador);

function interlistador() {
    console.log("listo, modelo cargado🎅");
}

function identificarImagen() {
    imagen = document.getElementById("imagenCapturada");
    reconocerObjeto.classify(imagen, obtenerResultado);
}

function obtenerResultado(error, resultados) {
    console.log(resultados)
    if (!error) {
        if (resultados[0].confidence < 0.3) {
            document.getElementById("ObjetoDetectado").innerHTML = "es algo que esta hecho de atomos";
        } else {
            document.getElementById("ObjetoDetectado").innerHTML = resultados[0].label;
            document.getElementById("PrecisiónDetectada").innerHTML = resultados[0].confidence.toFixed(2) + "%";
        }
    }
}
