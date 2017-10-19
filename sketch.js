function Punto(x,y,tam){
    this.x=x;
    this.y=y;
    this.tam=tam;
    this.show=function(){
        noStroke();
        ellipse(this.x,this.y,this.tam,this.tam);
    }
}
var puntos=[];
var tam=1
var p=new Punto(0,0,tam);
function setup() {
    createCanvas(800,800);
    background(51);
    puntos[0]=new Punto(400,20,tam*2);
    puntos[1]=new Punto(100,700,tam*2);
    puntos[2]=new Punto(700,700,tam*2);
    for(var i=0;i<puntos.length;i++){
        puntos[i].show();
    }   
}
function draw() {
    fill(random(0,255),random(0,255),random(0,255))
    p.show()
    rnd=Math.floor(random(0,3));
    p.x+=(puntos[rnd].x-p.x)/2
    p.y+=(puntos[rnd].y-p.y)/2
}