noseX =0;
noseY =0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
video=createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(550,550);
canvas.position(560,150);

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Pose is intualized');
}
function draw(){
    document.getElementById("circle_radius").innerHTML="radius of the circle="+difference+"px";
    background('#FFC0CB');
    fill('#FF0000');
    stroke('#FF0000');
    circle(noseX,noseY,difference);
}
function gotPoses(results){
    if(results.length > 0 )
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseX = results[0].pose.nose.y;
        console.log("noseX =" + noseX + "noseY=" + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftwristX=" + leftWristX + "rightWristX=" + rightWristX+ "difference="+ difference);
    }
}