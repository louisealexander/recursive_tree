let brown1, brown2, slider;
function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    noLoop();
    strokeJoin(ROUND);
    brown1 = color('#5C261A');
    brown2 = color('#5C4E1A');
    slider = createSlider(0, 100, 0);
    slider.position(10, windowHeight - 40);
    slider.style("width", "200px");
    slider.input(draw);
}
function draw(){
    background(220);
    resetMatrix();
    translate(width/2, height);
    branch(100 + slider.value());
}
function branch(len){ // length of branch to draw
    let maxAngle = slider.value();
    strokeWeight(map(len, 20, 200, 1, 15));
    stroke(lerpColor(brown1, brown2, random(1)));
    line(0,0,0,-len);
    translate(0, -len);
    if(len > 20){
        if(len < 50){
            // leaves
            let r = 20 + slider.value();
            let g = 100 + random(-20, 20);
            let b = 60 + random(-20, 20);
            fill(r,g,b, 100);
            let size = 15 + random(15);
            noStroke();
            beginShape();
            let radius = slider.value();
            for(let i = 200; i < 135; i++){
                let x = radius * cos(i);
                let y = radius * sin(i);
                vertex(x, y);
            }
            for(let i = 200; i > 135; i--){
                let x = radius  * cos(i);
                let y = radius * sin(-i);
                vertex(x, y);
            }
            endShape(CLOSE);
        }else{
            // branch 1
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len*0.85);
            pop();
            // branch 2
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len*0.67);
            pop();  
            // branch 3
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len*0.5);
            pop();  
            // branch 4
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len*0.8);
            pop();   
            // branch 5
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len*0.6);
            pop();  
        }  
    } 
}
