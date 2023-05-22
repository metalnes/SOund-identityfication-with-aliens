//https://teachablemachine.withgoogle.com/models/IoD3JaUUl/
function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/IoD3JaUUl/model.json",modelReady)
}

function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error,results){
console.log(results)
    if(error){
        console.error(error);
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
    } random_number_b = Math.floor(Math.random() * 255) + 1;
document.getElementById("result_label").innerHTML = 'I can hear -'+
results[0].label;
document.getElementById("result_confidence").innerHTML = 'Accuracy -'+
(results[0].confidence *  100).toFixed(2)+"%";
document.getElementById("result_label").style.color = "rgb("+
random_number_r+","+random_number_g+","+random_number_r+")";
document.getElementById("result_confidence").style.color = "rgb("+
random_number_r+","+random_number_g+","+random_number_r+")";



img = document.getElementById('alien1');
img1 = document.getElementById('alien2');
img2 = document.getElementById('alien3');
img3 = document.getElementById('alien4');
 
if(results[0].label == "Clap"){
    img.src = 'alens-01.gif';
    img1.src = 'alens-02.png';
    img2.src = 'alens-03.png';
    img3.src = 'alens-04.png';
}else if (resluts[0].label == "Bell"){
    img.src = 'alens-01.png';
    img1.src = 'alens-02.gif';
    img2.src = 'alens-03.png';
    img3.src = 'alens-04.png';
}else if (results[0].label == "Snapping"){
    img.src = 'alens-01.png';
    img1.src = 'alens-02.png';
    img2.src = 'alens-03.gif';
    img3.src = 'alens-04.png';
}else{
    img.src = 'alens-01.png';
    img1.src = 'alens-02.png';
    img2.src = 'alens-03.png';
    img3.src = 'alens-04.gif';
}
}



