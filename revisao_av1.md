REVISÃO PCSW AV1
===========

1. Defina o HTTP.

  *R - Hiper Text Transfer Protocol - protocolo de transferência de hipertexto.*

2. Qual a definição de POST e GET e suas diferenças. Dê exemplo de uso.

  *R - O método GET é usado quando queremos pesquisar ou passar dados para uma outra página usando a URL da página.*

3. Em que consiste tecnologias Server Pages?

  *R - São scripts embutidos em códigos HTML que são processados no servidor antes da página ser enviada ao cliente.*

4. O que é um comportamento assíncrono?

  *R - Permite que o controlador possa executar outras tarefas enquanto aguarda a resposta de uma anterior.*

5. Em uma linha, qual a sintaxe de saída padrão Javascript no HTML?

        document.write("Alô Mundo!");

6. Liste os valores que podem ser armazenados em uma variável Javascript.

  * inteiros;
  * decimais;
  * booleanos;
  * strings;
  * arrays;
  * objetos.

7. Quais são as estruturas de decisão (condicional) no Javascript?

  *R - if...else, switch.*

8. Como fazer entrada de dados no Javascript?

        windows.prompt("Digite a sua idade");

9. Qual o conceito e utilização de eventos?

  *R - Eventos são ações capazes de reagir aos cliques, movimentos de mouse, preenchimentos de campos de formulários, ao carregar a página, etc. Servem para melhorar a experiência do usuário com o sistema.*

10. Descreva os seguintes eventos javascript: onclick, onkeyup, onchange, onfocus, onload.

  *onclick - executado ao clicar no elemento.*
  *onkeyup - executado ao liberar o botão do mouse.*
  *onchange - executado quando houver modificações.*
  *onfocus - executado quando o mouse está sobre o elemento.*
  *onload - executado juntamente com o carregamento da página.*

11. Escreva duas estruturas de repetição (diferentes) em uma contagem até 10.

        a = 1;
        while(a <= 10){
          document.write(a);
          a++;
        }

        for(i=1; i <=10:i++){
          document.write(i);
        }

12. Escreva uma função que exiba uma alerta: “Olá mundo!”

        function hello(){
          document.write("Olá mundo!");
        }

13. Escreva um vetor Javascript com suas notas av1, av2 e av3 para duas disciplinas.

        notas = [av1, av2, av3];

14. Escreva um alerta que exiba a nota av2 da segunda disciplina do vetor acima.

        alert(notas[1]);

15. Escreva uma função em duas linhas para abrir um Popup.

      function alerta(){
        function alert("Pop Up");
      }

16. Qual a definição de uma classe Javascript.

  *R - É uma estrutura que contém a descrição dos atributos e das ações de um objeto.*

17. Qual a sintaxe para criar um novo objeto em Javascript.

        palio = new Carro();

18. Escreva um objeto “Aeronave” com duas propriedades e dois atributos.

          function Aeronave(){
            this.modelo;
            this.vMax;

            tecoteco = new Aeronave();

            tecoteco.vMax = 500;
            tecoteco.modelo = "jw500";
          }

19. Qual a definição do modelo de objeto DOM.

  *R - É uma interface de programação (API) para documentos HTML e XML.*

20. Escreva duas propriedades e dois métodos do DOM.

    *Propriedades:Id, value*

    *Métodos:*
        document.getElementyById()
        window.onload

21. A propriedade appName do navigator retorna que informação?

  *R - O nome do navegador.*

22. Qual a definição do modelo de objeto DOM.

  *R - É uma interface de programação (API) para documentos HTML e XML.*

23. Escreva uma função anônima que possua uma função que exiba uma alerta.

        var somar = function(a, b){
          alert(eval(a+b));
        }

24. Descreva qual é o retorno do método: getElementById().

  *R - O value do elemento com o id solicitado.*

25. Quais os dois outros métodos semelhantes ao getElementById() ?

  *R - getElementByTag() e getElementByName()*

26. Em um formulário de name=”f” existe um textarea com id=”t” que só pode receber 255 caracteres. Escreva uma validação que satisfaça esse critério.

  *R - *

27. Quais as diferenças entre HTML e XML?

  *R - HTML é utilizada para apresentar dados, já XML é utilizada para transportar e armazenar dados.*
