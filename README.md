# Classificador-do-Heroi# README: Projeto "Criador de Herói"

## 1. Visão Geral

Este projeto é uma aplicação web interativa desenvolvida para um exercício prático de programação. Ele simula a criação de um personagem de jogo, permitindo ao usuário definir o nome, idade e classe do herói. A funcionalidade principal é demonstrar o conceito de Programação Orientada a Objetos (POO) em JavaScript, utilizando uma classe para representar o herói e seus comportamentos.

## 2. Tecnologias Utilizadas

O projeto foi construído usando as tecnologias fundamentais do desenvolvimento web front-end:

* **HTML5:** Usado para estruturar a página e criar os elementos de interface (formulário, campos de entrada, botão).
* **CSS3:** Usado para estilizar a aplicação, tornando-a visualmente agradável e responsiva.
* **JavaScript (ES6):** A linguagem principal que implementa a lógica do projeto, incluindo a classe `Heroi` e a manipulação do DOM (Document Object Model) para interagir com a interface.

## 3. Estrutura de Arquivos

O projeto é composto por três arquivos principais, que devem estar na mesma pasta para funcionar corretamente:

* `index.html`: O ponto de entrada da aplicação. Este arquivo define a estrutura da página, incluindo o título, a conexão com o CSS e o JavaScript, e o formulário para a entrada de dados do herói.
* `style.css`: Contém todas as regras de estilo. Ele controla o layout, cores, fontes e o design geral da interface do usuário.
* `jogo.js`: O cérebro da aplicação. Este arquivo contém a lógica de programação. Nele, você encontrará a definição da classe `Heroi` e o código que "escuta" o clique do botão para criar e exibir o ataque do personagem.

## 4. Como o Projeto Funciona

### 4.1. Lógica em JavaScript

A lógica do projeto é centralizada na classe `Heroi` (dentro do arquivo `jogo.js`).

* **Classe `Heroi`:** Esta classe é um "molde" para criar heróis.
    * **Propriedades:** `nome`, `idade`, e `tipo`. Elas são definidas no método `constructor` quando um novo herói é criado.
    * **Método `atacar()`:** É uma função associada à classe. Ela contém a lógica para determinar o tipo de ataque com base na propriedade `tipo` do herói. Um `switch-case` é utilizado para associar cada classe (`mago`, `guerreiro`, etc.) a uma ação de ataque específica (`magia`, `espada`, etc.).

### 4.2. Interação com o Usuário

A interação do usuário com a página é controlada por JavaScript:

1.  O código JavaScript espera o evento de "clique" no botão "Criar e Atacar!".
2.  Quando o botão é clicado, o código obtém os valores inseridos nos campos do formulário (nome, idade e tipo).
3.  Uma nova instância da classe `Heroi` é criada com os valores coletados.
4.  O método `atacar()` da nova instância é chamado.
5.  A mensagem de ataque retornada pelo método é então exibida em uma área de texto na própria página, permitindo ao usuário ver o resultado da sua criação.

## 5. Como Executar

Para rodar este projeto, siga estes passos simples:

1.  Certifique-se de que os três arquivos (`index.html`, `style.css`, e `jogo.js`) estão na mesma pasta.
2.  Abra o arquivo `index.html` em qualquer navegador web (como Google Chrome, Mozilla Firefox, Microsoft Edge, etc.).
3.  A interface do usuário será carregada. Basta preencher as informações do seu herói e clicar no botão para ver o resultado.

## 6. Autor

Arthur Alves
