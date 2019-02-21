var cx, cy;
const rMolde = 500
const rRelogio = 230;
const rPonteiroH = 150;
const rPonteiroM = 180;
const anguloPonteiroH = 90;
const anguloPonteiroM = 180;
const bH = 10;
const hH = 5;
const bM = 10;
const hM = 5;
var numeros;
function setup() {
    createCanvas(600, 600)
    textAlign(CENTER, CENTER);
    cx = width / 2
    cy = height / 2
    numeros = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2]
    textSize(20)
    strokeWeight(5)

}

function draw() {
    background(222)
    ellipse(cx, cy, rMolde)
    for (var angulo = 0; angulo <= 360; angulo += 6) {
        var x1 = cos(radians(angulo)) * rRelogio;
        var y1 = sin(radians(angulo)) * rRelogio
        var x2 = cos(radians(angulo)) * (rRelogio - 10);
        var y2 = sin(radians(angulo)) * (rRelogio - 10)
        if (angulo % 30 == 0) {
            text(numeros[int(angulo / 30)], cx + x2, cy + y2)
        }
        else {
            line(cx + x2, cy + y2, cx + x1, cy + y1)
        }
    }
    
    push()
    strokeWeight(6)
    stroke(255, 0, 0)
    var mx = cos(radians(anguloPonteiroM)) * rPonteiroM;
    var my = sin(radians(anguloPonteiroM)) * rPonteiroM;
    line(cx, cy, cx + mx, cy + my)
    triangle(cx + mx, cy + my + bM/2, cx + mx - hM, cy + my, cx + mx, cy + my - bM/2)
    pop()
    
    push()
    strokeWeight(10)
    var hx = cos(radians(anguloPonteiroH)) * rPonteiroH;
    var hy = sin(radians(anguloPonteiroH)) * rPonteiroH;
    line(cx, cy, cx + hx, cy + hy)
    triangle(cx + hx - bH/2, cy + hy, cx + hx, cy + hy + hH, cx + hx + bH/2, cy + hy)
    pop()
    ellipse(cx, cy, 20)
    


}