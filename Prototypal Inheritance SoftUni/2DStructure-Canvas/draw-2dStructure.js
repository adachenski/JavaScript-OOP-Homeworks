/**
 * Created by Just Nasko on 4/23/2016.
 */

function ifButtonPushed(div) {

    var x = document.getElementById(div);
    if (x.style.display == "none") {
        return x.style.display = "block"
    }
    else {
        return x.style.display = "none"
    }

}
function drawDivRectangle(){
    ifButtonPushed("rectangle-div")
}
function drawDivTriangle() {
    ifButtonPushed("triangle-div")
}

function drawDivLine() {

    ifButtonPushed("line-div");
}

function drawDivCircle() {

    ifButtonPushed("circle-div");
}
function drawRectangle() {

    var ax = document.getElementById("rect-Ax").value,
        ay = document.getElementById("rect-Ay").value,
        width = document.getElementById("rect-width").value,
        height = document.getElementById("rect-height").value,
        color = document.getElementById("rect-color").value;
    return new Shape.rectangle().A(ax,ay).w(width).h(height).c(color).draw();

}
function drawTriangle() {
    var ax = document.getElementById("tri-Ax").value,
        ay = document.getElementById("tri-Ay").value,
        bx = document.getElementById("tri-Bx").value,
        by = document.getElementById("tri-By").value,
        cx = document.getElementById("tri-Cx").value,
        cy = document.getElementById("tri-Cy").value,
        color = document.getElementById("tri-color").value;
    return new Shape.triangle().A(ax, ay).B(bx, by).C(cx, cy).col(color).draw();

}

function drawLine() {
    var ax = document.getElementById("line-Ax").value,
        ay = document.getElementById("line-Ay").value,
        bx = document.getElementById("line-Bx").value,
        by = document.getElementById("line-By").value,
        color = document.getElementById("line-color").value;
    return new Shape.line().A(ax, ay).B(bx, by).col(color).draw();

}

function drawCircle() {
    var ox = document.getElementById("cir-Ox").value,
        oy = document.getElementById("cir-Oy").value,
        radius = document.getElementById("cir-radius").value,
        color = document.getElementById("cir-color").value;
    return new Shape.circle().O(ox, oy).rad(radius).col(color).draw();
}