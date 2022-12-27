<h1 align="center">Ping Pong</h1>

<h2 align="center">Jogo desenvolvido nos estudos de lógica de programação, utilizando Java Script.</h2> 

<h3>Características do Jogo</h3>
<p>    
    Jogo multiplayer com marcador de pontos e efeitos sonoros, feito no editor P5.js.<br>
    O espaço de de jogo foi dimensionado em 400x800px, a bolinha e raquetes com as seguintes dimensões 26, 20x100 respectivamente.<br>
    A organização do código foi feita através de funções que são carregadas no draw(), exceto o tabuleiro que é carregado no canvas() e também temos um pre-load dos sons que são utilizados no jogo.<br> 
 </p>
 <h4>Movimentação dos componentes e funcionamento do jogo</h4>
 <p>
    A movimentação da bolinha é de 5px para ambos os eixos partindo inicialmente do meio, enquanto as raquetes se movem 5 + 1px para cada clique dos jogadores para cima ou para baixo (W e S para o jogador 1 e ↑ e ↓ para o jogador 2.<br>
    <br>
    Entre as movimentações fazemos a verificação se a bolinha alcança algum extremo da tela, e assim se ela alcança algum desses pontos atribuimos o x(-1) a movimentação da bolinha assim ela se move para o lado oposto.<br>
    <br>
    Também realizamos a verificação das raquetes, que quando alcançam as bordas da tela, calculadas a partir do seu tamanho, também param de se movimentar se mantendo dentro do campo de visão do jogador.<br> 
    <br>
    A pontuação do jogo é atribuida assim que a bolinha toca alguma das bordas da tela laterais do oponente e é mostrada acima da tela, em um placar! (Obs. A bolinha não interage com o placar).<br> 
</p>

<h3>Dificuldades do projeto</h3>
<p>
    A primeira dificuldade encontrada foi relacionada a detectar a colisão entre a bolinha e a raquete, onde tentei usar uma função de colisão entre quadrado e circulo da propria biblioteca do P5.js mas acabei optando por importar uma solução mais completa do p5.collide2d.<br>
    <br>
    A segunda dificuldade foi relacionada a um bug que fazia a bolinha se manter atrás da raquete colidindo com a borda da tela diversas vezes e fazendo um dos jogadores ganhar diversos pontos numa unica jogada. A solução encontrada por mim foi, dentro da função de marcar pontos, caso a bolinha depois da pontuação se mantenha na posição que coincida com atrás da raquete e não se movimentar ela é teleportada para a posição que coincide com a da raquete gerando assim um efeito de raquetada, saindo do bug. 
</p>
