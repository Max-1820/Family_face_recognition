//https://teachablemachine.withgoogle.com/models/0yrofDQh_/
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
var Camera=document.getElementById("camera");
Webcam.attachc('#camera');
function takePicture()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
        });        
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('//https://teachablemachine.withgoogle.com/models/0yrofDQh_/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model Is loaded")
}
function check(){
    image=document.getElementById("selfie_image");
    model.classify(image, gotResult);
    
}
function gotResult(error, results){
    if (error){
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("objectresult").innerHTML=results[0].label;
        document.getElementById("accuracyResult").innerHTML=results[0].confidence.toFixed(3);
    }
}