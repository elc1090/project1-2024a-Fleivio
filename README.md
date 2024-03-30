# Projeto: Remake de site/app web

![imgs/remake_01.png](imgs/remake_01.png)
![imgs/remake_02.png](imgs/remake_02.png)


Acesso: [Site publicado](https://fleivio.github.io/src/)


#### Desenvolvedor(a)
Flávio Borin Júnior, Ciência da Computação

#### Site/app escolhido

##### Link
[Navi](https://www.navi.com.ai/)

##### Descrição
O site escolhido foi o site de uma startup, a Navi, que busca unir empreendedores à outras startups que trabalhem com inteligência artificial. O site é desenvolvido na plataforma No-Code/Low-Code Wix.

Em uma primeira análise, o site é relativamente bonito, possuindo efeitos de paralaxe bem interessantes, um header retrátil, e uma paleta de cores consistente.

Porém, o site apresenta seus problemas:
- O carregamento dos elementos conforme o usuário scrolla demora muito;
- A maioria dos links para suas startups e redes sociais não funcionam;
- A navbar apresenta um dropdown que é ao mesmo tempo um botão;
- Os patrocinadores/colaboradores estão todos espalhados em lugares diferentes do site;
- Não há alguma explicação sobre o que suas startups fazem;
- Diversos botões como "Saiba Mais" ou "Conheça o Espaço" apenas levam de volta para o início da página;
- Os botões na navbar não possuem um efeito hover, causando certa estranhesa nos dropdowns;

#### Desenvolvimento

O principal objetivo do remake foi enxugar o site, condensando suas informações. A seção de noticias foi removida, e criada uma seção apenas para os colaboradores/patrocinadores. 

| Antes  | Depois |
| ------------- | ------------- |
|  ![imgs/original.png](imgs/parceiros_original.png)  ![imgs/patroci.png](imgs/patrocionio_original.png) |  ![imgs/remake.png](imgs/parceiros.png) |

Também, apra tantar deixar mais claro as suas iniciativas, um carrossel das startups relacionadas foi adicionado. Para cada startup foi consertado o seu link e adicionando uma breve descrição do que ela se propõe.

| Antes  | Depois |
| ------------- | ------------- |
|  ![imgs/original.png](imgs/startups_original.png) |  ![imgs/remake.png](imgs/startups_remake.png) |

Sobre a navbar, separou-se o botão-dropdown em dois botões diferentes, e adicionado um efeito hover. Também foi removida a navbar redundante do footer do site, e adicionado informações sobre o endereço em que a empresa se encontra e suas redes sociais.

Foram removidos botões e links redundantes, como aqueles que apenas retornavam para o início. Em suma, o site ficou menor, e dividido nas seguintes seções:
- Header com logo e navbar;
- Seção com o logo maior;
- Seção explicativa, com vídeo sobre o que a empresa se propõe;
- Carrossel com as suas startups;
- Lista de parceiros;
- Footer com endereço e contato;

Para a extração das imagens, foi utilizado o site [Image Extractor](https://extract.pics/), que me retornou as imagens do site para download. Acredito que ele também tenha gerado as imagens de background, as quais eu não consegui encontrar analisando o código do site.

| Antes  | Depois |
| ------------- | ------------- |
|  ![imgs/original.png](imgs/original.png) |  ![imgs/remake.png](imgs/remake_01.png) ![imgs/remake.png](imgs/remake_02.png) |

#### Tecnologias

Para o desenvolvimento do site foram utilizadas:
- HTML;
- CSS;
- Bootstrap;
- Javascript;

Foi utilizado HTML semântico para organizar as informações no site. 

O Bootstrap foi utilizado principalmente para alterações rápidas e oraganização de displays, margens e padding.

O CSS foi utilizado para estilização (fontes, cores, bordas etc.) e efeitos como hover, transform etc. 

O JavaScript foi utilizado para fazer o carrossel, atribuindo event listenners aos botões que passam de slide. O carrossel também passa automaticamente a cada 10 segundos.

#### Ambiente de desenvolvimento

Para o desenvolvimento do site, foram utilizados

- VsCode;
- Extensão Live Server;
- GitHub Copilot Chat;

#### Referências e créditos

- [Image Extractor](https://extract.pics/)
- [How to create a Slideshow/Carousel using HTML, CSS & JS.](https://medium.com/@algopoint.ltd/how-to-create-a-slideshow-carousel-using-html-css-js-7ab0561b39b3)
- Pedro Hinerasky, que me deu a ideia de adicionar descrição para cada startup
- Deivis Felipe, que me ajudou a perceber que o botão não estava clicável por que seu z-index era negativo
- W3Schools e MDN para pesquisas sobre o que certos atributos e tags significam
- ChatGPT:
  - Me ensinou sobre background-attachment: fixed; para paralaxe simples;
      ```
      como faço um elemento q possua uma imagem de background que se move conforme o usuário scrolla
      ```
  - Me ensinou sobre .container-fluid do Bootstrap;
    ```
    qual classe bootstrap devo utilizar para que os filhos dum elemento nao ocupem toda width
    ```
  - Me forneceu o [link](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css) para ícones de redes sociais
  - Fez a base do meu footer e header (que depois eu mudei)
    ```
    com bootstrap, faça um footer que tenha, nessa ordem:
    
    uma linha com as redes sociais, cada um representada por um icone clicável
    um linha para uma navbar centralizada com botões
    uma linha com copyright
    ```

    ```
    faça em bootstrap um header que contenha:
    uma pequena imagem da logo do site na esquerda, uma navbar maior, com menus dropdown e botões normais também, e dois botões extra na direita, estes com borda
    ```




---
Projeto entregue para a disciplina de [Desenvolvimento de Software para a Web](http://github.com/andreainfufsm/elc1090-2024a) em 2024a
