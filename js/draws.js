
function draw() {
        ctx.strokeStyle = "#0A3871";
        ctx.fillStyle = "#0A3871";
        ctx.lineWidth = 5;

        switch (lifes) {
            case 8:
                drawBottomBase(ctx);
                break;
            case 7:
                drawBase(ctx);
                break;
            case 6:
                drawTopBase(ctx);
                break;
            case 5:
                drawBody(ctx);
                break;
            case 4:
                drawRightArm(ctx);
                break;
            case 3:
                drawLeftArm(ctx);
                break;
            case 2:
                drawRightLeg(ctx);
                break;
            case 1:
                drawLeftLeg(ctx);
                break;
            case 0:
                drawHead(ctx);
                break;
        }

    }

function drawBase(ctx) {
    ctx.beginPath();
    ctx.moveTo(90, 445);
    ctx.lineTo(90, 5);
    ctx.stroke();
}

function drawBottomBase(ctx) {
    ctx.beginPath();
    ctx.moveTo(88, 445);
    ctx.lineTo(370, 445);
    ctx.lineTo(0, 445);
    ctx.stroke();
}

function drawTopBase(ctx) {
    ctx.beginPath();
    ctx.moveTo(88, 5);
    ctx.lineTo(280, 5);
    ctx.lineTo(280, 60);
    ctx.stroke();
}

function drawHead(ctx) {
    ctx.beginPath();
    ctx.arc(280, 98, 40, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(280, 128, 20, 1.1 * Math.PI, 1.9 * Math.PI, false);
    ctx.stroke();

    drawRightEye(ctx);
    drawLeftEye(ctx);

}

function drawRightEye(ctx) {
    ctx.beginPath();
    ctx.moveTo(255, 78);
    ctx.lineTo(275, 98);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(275, 78);
    ctx.lineTo(255, 98);
    ctx.stroke();
}

function drawLeftEye(ctx) {
    ctx.moveTo(285, 78);
    ctx.lineTo(305, 98);
    ctx.stroke();

    ctx.moveTo(305, 78);
    ctx.lineTo(285, 98);
    ctx.stroke();

}

function drawBody(ctx) {
    ctx.beginPath();
    ctx.moveTo(280, 140);
    ctx.lineTo(280, 300);
    ctx.stroke();
}

function drawRightArm(ctx) {
    ctx.beginPath();
    ctx.moveTo(280, 140);
    ctx.lineTo(200, 250);
    ctx.stroke();
}

function drawLeftArm(ctx) {
    ctx.beginPath();
    ctx.moveTo(280, 140);
    ctx.lineTo(350, 250);
    ctx.stroke();
}

function drawRightLeg(ctx) {
    ctx.beginPath();
    ctx.moveTo(280, 300);
    ctx.lineTo(200, 400);
    ctx.stroke();
}

function drawLeftLeg(ctx) {
    ctx.beginPath();
    ctx.moveTo(280, 300);
    ctx.lineTo(350, 400);
    ctx.stroke();
}
