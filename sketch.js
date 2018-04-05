const tam=2
const width=800;
const height=600;
const space=10;

let p,t1,bStart_stop,bClean,bRand,pInpX,aInpX,bInpX,cInpX,pInpY,aInpY,bInpY,cInpY;
let puntos=[];
let isLooping=false

function setup() {
    createCanvas(width,height);
    background(0);

    t1=createElement("h1","Sierpinski");
    t1.position(width+space,0);

    bStart_stop=createButton("Start/Stop");
    bStart_stop.position(t1.x,t1.y+t1.height+space*3)
    bStart_stop.mousePressed(start_stop)

    bClean=createButton("Clean");
    bClean.position(bStart_stop.x+bStart_stop.width+space,bStart_stop.y);
    bClean.mousePressed(clean)

    bRand=createButton("Random");
    bRand.position(bClean.x+bClean.width+space,bClean.y);
    bRand.mousePressed(rand)

    pInpX=createInput("0","number");
    pInpX.position(bStart_stop.x,bStart_stop.y+bStart_stop.height+space)

    aInpX=createInput("400","number");
    aInpX.position(pInpX.x,pInpX.y+pInpX.height+space)

    bInpX=createInput("100","number");
    bInpX.position(aInpX.x,aInpX.y+aInpX.height+space)

    cInpX=createInput("700","number");
    cInpX.position(bInpX.x,bInpX.y+bInpX.height+space)
    
    pInpY=createInput("0","number");
    pInpY.position(pInpX.x+pInpX.width+space,pInpX.y)

    aInpY=createInput("20","number");
    aInpY.position(aInpX.x+aInpX.width+space,aInpX.y)

    bInpY=createInput("500","number");
    bInpY.position(bInpX.x+bInpX.width+space,bInpX.y)

    cInpY=createInput("500","number");
    cInpY.position(cInpX.x+cInpX.width+space,cInpX.y)
    noLoop();
}

function draw() {
    fill(random(0,255),random(0,255),random(0,255))
    if(p!=undefined){
        p.show()
        rnd=Math.floor(random(0,3));
        p.x+=(puntos[rnd].x-p.x)/2
        p.y+=(puntos[rnd].y-p.y)/2
    }
}

function start_stop(){
    puntos[0]=new Punto(int(aInpX.value()),int(aInpY.value()),tam*2);
    puntos[1]=new Punto(int(bInpX.value()),int(bInpY.value()),tam*2);
    puntos[2]=new Punto(int(cInpX.value()),int(cInpY.value()),tam*2);
    p=new Punto(int(pInpX.value()),int(pInpY.value()),tam)

    for (let i = 0; i < puntos.length; i++) {
        puntos[i].show()
    }

    if(isLooping){
        noLoop()
        isLooping=false
    } 
    else{
        loop()
        isLooping=true
    }
}

function clean(){
    background(0)
    noLoop()
    isLooping=false
    background(0)
}

function rand(){
    pInpX.value(Math.floor(random(0,width)))
    pInpY.value(Math.floor(random(0,height)))
    aInpX.value(Math.floor(random(0,width)))
    aInpY.value(Math.floor(random(0,height)))
    bInpX.value(Math.floor(random(0,width)))
    bInpY.value(Math.floor(random(0,height)))
    cInpX.value(Math.floor(random(0,width)))
    cInpY.value(Math.floor(random(0,height)))
}

function Punto(x,y,tam){
    this.x=x;
    this.y=y;
    this.tam=tam;
    this.show=function(){
        noStroke();
        ellipse(this.x,this.y,this.tam,this.tam);
    }
}