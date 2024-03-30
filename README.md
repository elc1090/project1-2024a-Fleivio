# Projeto: Remake de site/app web

> 1. Baixe este arquivo e edite o texto em formato Markdown conforme as instruções a seguir.
> 2. Substitua todos os trechos de texto iniciados com "Substitua" por informações do seu projeto, conforme solicitado em cada trecho.
> 3. Substitua a imagem por um screenshot do projeto (arquivo pode ser armazenado no repositório ou em URL externa). GIFs animados também são permitidos!
> 4. Remova todas as instruções de entrega.
> 5. Double-check: Certifique-se de que seu README.md não contenha instruções de entrega!
> 6. Entregue este README.md dentro da pasta raiz do seu repositório de entrega. Peça ajuda se não souber como editar ou entregar!
> Opcional: você pode alterar a formatação do README, mas mantenha todas as informações solicitadas

![Substitua a imagem ao lado por um screenshot do seu projeto](https://mdswanson.com/static/chops-ux-step-4.png "Screenshot do projeto")


Acesso: Substitua este texto pela URL para acesso ao site publicado


#### Desenvolvedor(a)
Flávio Borin Júnior, Ciência da Computação


#### Site/app escolhido

##### Link
https://www.navi.com.ai/

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

O principal objetivo do remake foi enxugar o site, condensando suas informações. A seção de noticias foi removida, e criada uma seção apenas para os colaboradores/patrocinadores. Também, apra tantar deixar mais claro as suas iniciativas, um carrossel das startups relacionadas foi adicionado. Para cada startup foi consertado o seu link e adicionando uma breve descrição do que ela se propõe.

Sobre a navbar, separou-se o botão-dropdown em dois botões diferentes, e adicionado um efeito hover. Também foi removida a navbar redundante do footer do site, e adicionado informações sobre o endereço em que a empresa se encontra e suas redes sociais.

Foram removidos botões e links redundantes, como aqueles que apenas retornavam para o início. Em suma, o site ficou menor, e dividido nas seguintes seções:
- Header com logo e navbar;
- Seção com o logo maior;
- Seção explicativa, com vídeo sobre o que a empresa se propõe;
- Carrossel com as suas startups;
- Lista de parceiros;
- Footer com endereço e contato;

Para a extração das imagens, foi utilizado o site Image Extractor https://extract.pics/, que me retornou as imagens do site para download. Acredito que ele também tenha gerado as imagens de background, as quais eu não consegui encontrar analisando o código do site.

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

Substitua este trecho por uma lista bem detalhada de todo material que você consultou para ajudar no projeto, por exemplo:  URL de templates usados, URL de icon kits usados, créditos para colegas que colaboraram, geradores de código (incluindo alguns prompts usados para o ChatGPT, se for o caso)
- ...
- ...




---
Projeto entregue para a disciplina de [Desenvolvimento de Software para a Web](http://github.com/andreainfufsm/elc1090-2024a) em 2024a
