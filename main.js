difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550 , 500);

    canvas = createCanvas(550 , 550);
    canvas.position(560 , 150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX" + rightWristX + "difference" + difference)
    }

}

function draw() {
    background('#808080');

    document.getElementById("font_size").innerHTML = "Font Size of the Text will be = " + difference + "px";
    textSize(difference);
    fill('FFE787');
    text('Bipul' , 50 , 400);
}