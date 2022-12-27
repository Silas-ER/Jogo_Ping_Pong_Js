//caracteristicas da bolinha
let bolinhaX = 400;
let bolinhaY = 200;
let tamanhoBolinha = 26;
let diametro = tamanhoBolinha;
let raio = diametro/2;

//movimento da bolinha
let movimentaX = 5;
let movimentaY = 5;

//caracteristicas das raquetes
let Xraquete1 = 10;
let Xraquete2 = 770;
let Yraquete1 = 150;
let Yraquete2 = 150;
let larguraRaquete = 20;
let comprimentoRaquete = 100;

//movimentação das raquetes
let movimentacaoRaquete = 5;
let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let trilha;
let raquete;
let ponto;

function preload(){
  trilha = loadSound("js/sons/trilha.mp3");
  raquete = loadSound("js//sons/raquetada.mp3");
  ponto = loadSound("js//sons/ponto.mp3");
}

function setup() {
  createCanvas(800, 400);
  trilha.loop();
}

function draw() {
  background(0);
 
  mostrarBolinha();
  movimentarBolinha();
  verificarTabuleiro();
 
  mostrarRaquetes();
  movimentarRaquete1();
  movimentarRaquete2();
  verificarColisaoRaquete(Xraquete1, Yraquete1);
  verificarColisaoRaquete(Xraquete2, Yraquete2);
 
  incluirPlacar();
  marcarPonto();
 
}

function mostrarBolinha(){
  circle(bolinhaX, bolinhaY, tamanhoBolinha);
}

function movimentarBolinha(){
  bolinhaX = bolinhaX + movimentaX;
  bolinhaY = bolinhaY + movimentaY;
}

function verificarTabuleiro(){
  if(bolinhaX + raio > width || bolinhaX - raio < 0){
     movimentaX *= -1;
     }
  if(bolinhaY + raio > height || bolinhaY - raio < 0){
     movimentaY *= -1;
     }
}

function mostrarRaquetes(){
  rect(Xraquete1, Yraquete1, larguraRaquete, comprimentoRaquete, 5);
  rect(Xraquete2, Yraquete2, larguraRaquete, comprimentoRaquete, 5);
}

function movimentarRaquete1(){
  if(keyIsDown(87)){
    if(Yraquete1 == 0){
      Yraquete1 = 0;
    }else{
      Yraquete1 -= 10;
    }
  }
  if(keyIsDown(83)){
    if(Yraquete1 + 100 == 400){
      Yraquete1 == 250;
    }else{
      Yraquete1 += 10;
    }
  }
}

function movimentarRaquete2(){
  if(keyIsDown(UP_ARROW)){
    if( Yraquete2 == 0){
      Yraquete2 = 0;
    }else{
      Yraquete2 -= 10;
    }
  }
  if(keyIsDown(DOWN_ARROW)){
    if(Yraquete2 + 100 == 400){
      Yraquete2 == 250;
    }else{
      Yraquete2 += 10;
    }
  }
}

function verificarColisaoRaquete(x,y){
  colidiu = collideRectCircle(x, y, larguraRaquete, comprimentoRaquete, bolinhaX, bolinhaY, raio);
  if(colidiu){
    movimentaX *= -1;
    raquete.play();
  }
}

function incluirPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 140, 0));
  rect(330, 11, 40, 20);
  fill(255);
  text(meusPontos, 350, 30);
  fill(color(255, 140, 0));
  rect(430, 11, 40, 20);
  fill(255);
  text(pontosOponente, 450, 30);
}

function marcarPonto(){
  if(bolinhaX > 785){
     meusPontos++;
     ponto.play();
     bolinhaX = 780;
  }else if(bolinhaX < 15){
     pontosOponente++;
     ponto.play();
     bolinhaX = 15;
  }
}
