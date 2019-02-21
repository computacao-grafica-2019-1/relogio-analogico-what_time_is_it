var cx, cy;
const rMolde = 500
const rRelogio = 230;
const rPonteiroH = 150;
const rPonteiroM = 180;
const anguloPonteiroH = 90;
const anguloPonteiroM = 180;
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
    ellipse(cx, cy, 20)
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
    strokeWeight(10)
    var hx = cos(radians(anguloPonteiroH)) * rPonteiroH;
    var hy = sin(radians(anguloPonteiroH)) * rPonteiroH;
    line(cx, cy, cx + hx, cy + hy)
    // triangle()
    pop()
    push()
    strokeWeight(6)
    var mx = cos(radians(anguloPonteiroM)) * rPonteiroM;
    var my = sin(radians(anguloPonteiroM)) * rPonteiroM;
    line(cx, cy, cx + mx, cy + my)
    // triangle()
    pop()


}