function start_classification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/P8s56B34_/',modelready);
}
function modelready()
{
    classifier.classify(gotresults);
}
function gotresults(error,results)
{
    if(error){
        console.error(error);
    }
    else{
        console.log("Got the results");
        console.log(results);
        random_number_r=Math.floor(Math.random() * 255) + 1;
        random_number_g=Math.floor(Math.random() * 255) + 1;
        random_number_b=Math.floor(Math.random() * 255) + 1;
        console.log("r color"+ random_number_r);
        console.log("g color"+ random_number_g);
        console.log("b color"+ random_number_b);
        document.getElementById("result_label").innerHTML='I can hear : ' + results[0].label;
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").innerHTML='Accuracy : ' + (results[0].confidence * 100).toFixed(2)+"%";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        img1=document.getElementById("bark.gif");
        img2=document.getElementById("cow.gif");
        img3=document.getElementById("meow.gif");
        img4=document.getElementById("listen.gif");
        img5=document.getElementById("lion-roar.gif");

        f(results[0].label == "barking")
        {
            img1.src='bark.gif';

        }else if(results[0].label == "mooing"){

            img2.src='cow.gif';
           
        }else if(results[0].label == "roar"){
           
            img5.src='lion-roar.gif';
            
        }else{
           
            img4.src='listen.gif';

        }
    }
}