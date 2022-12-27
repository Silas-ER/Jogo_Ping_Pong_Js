<h1 align="center">Ping Pong</h1>

<h2 align="center">Jogo desenvolvido nos estudos de lógica de programação, utilizando Java Script.</h2> 
<p align="center">    
    Jogo multiplayer com marcador de pontos e efeitos sonoros, feito no editor P5.js.<br>
    O espaço de de jogo foi dimensionado em 400x800px, a bolinha e raquetes com as seguintes dimensões respectivamente. A movimentação da bolinha é de 5px para ambos os eixos, enquanto as raquetes se movem 1px para cada clique dos jogadores.<br>
    A organização do código foi feita através de funções que são carregadas no draw(), exceto o tabuleiro que é carregado no e também temos um pre-load dos sons que são utilizados no jogo.<br> 
</p>

<h3> Dificuldades </h3>
<p>
    A primeira dificuldade encontrada foi relacionada a detectar a colisão entre a bolinha e a raquete, onde importei uma solução do p5.collide2d.<br>
    A segunda dificuldade foi relacionada a um bug que fazia a bolinha se manter atrás da raquete colidindo com a borda da tela diversas vezes e fazendo um dos jogadores ganhar diversos pontos numa unica jogada. A solução encontrada por mim foi, 
