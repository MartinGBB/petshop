# PetShop

Este projeto é um site de uma PetShop, onde os usuários podem acessar informações de compras de produtos e serviços para animais de estimação, fazer login, cadastrar usuários e pets, visualizar seus perfis e entrar em contato com suporte (os itens de cadastro são estaticos).
Para este projeto desenvolví a interface no [figma](https://www.figma.com/design/Rt2uX5AOlg5sdgn9tVrTiF/PetShop?node-id=5-534&t=wioegJM8SK5SE2cQ-1). 

## Funcionalidades

- **Página Inicial**: Apresenta uma visão geral do PetShop, com links para navegação.
- **Login**: Os usuários podem fazer login para acessar funcionalidades exclusivas. Não é necessário email, nem senha especifica para entrar.
- **Cadastro**: Permite que novos usuários se cadastrem no site (estatico).
- **Perfil de Usuário**: Apresenta informações básicas do usuário e do pet cadastrado.
- **Carrinho de Compras**: A funcionalidade de carrinho de compras ainda não foi implementada.
- **Suporte**: Modal para suporte ao cliente.
- **Visualização**: detalhada de produtos e serviços.

## Tecnologias Utilizadas

- **HTML5**: Para a estrutura do site.
- **CSS3**: Estilização do site, utilizando Bootstrap para facilitar o design responsivo e componentes prontos.
- **JavaScript**: Para adicionar funcionalidades dinâmicas.
- **GitHub Pages**: Para hospedagem do site.

## Responsividade

O site é completamente responsivo, adaptando-se automaticamente a diferentes tamanhos de tela e dispositivos, incluindo smartphones, tablets e desktops. Utilizei princípios de design responsivo e o framework Bootstrap para garantir uma experiência de usuário consistente em todos os dispositivos. Para smartphones, foi considerado deixar o menu de links como normalmente seria em dispositivos móveis e caroussel nos itens do home, para garantir melhor experiência.

## Estrutura do Projeto

- **index.html**: Página inicial do site.
- **pages/**: Contém páginas adicionais como `login.html`, `register.html`, `profile.html`, etc.
- **assets/**: Diretório para imagens, estilos CSS e scripts JavaScript. Este diretório contém o arquivo global do CSS e JS que é usado em toda a aplicação; os outros arquivos de estilos estão importados no principal.
- **partials/**: Componentes reutilizáveis como header, footer, menu e botão do modal de suporte.

Dentro de cada página foi criada uma estrutura de componente para carregamento mais fluido. Exemplo com serviços:
- `/services`: Pasta principal.
- `/services/index.html`: Arquivo genérico.
- `/services/service.html`: Arquivo que será renderizado no `services/index.html`, assim como suporte, menu, header e footer.

## Como Executar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone git@github.com:MartinGBB/petshop.git
   ```
2. Abra o arquivo index.html da raiz do projeto clonado.

3. Utilize a extensão live server no VSCode para executar o projeto.

## Funcionamento do Script.js
O arquivo `script.js` gerencia o comportamento dinâmico do site:

- Login Simulado: Utiliza localStorage para verificar se o usuário está logado.
- Carregamento Dinâmico: Carrega conteúdo das páginas utilizando fetch.
- Navegação: Configura navegação com base em atributos data-role nos links.

## Login
Para realizar o login, pode ser colocado qualquer texto nos campos e clicar no botão. O botão de login apenas cadastrará no `localStorage` um valor booleano como `true`, este valor será necessário para que o fetch seja chamado e renderize a página `home.html`. Para deslogar ou voltar para a página de login, será necessário abrir o perfil no ícone da foto do header, e no final estará o botão de deslogar. Ao clicar neste botão, o valor booleano será colocado como false e carregará o componente de login.

## Carrinho de Compras
A funcionalidade de carrinho de compras ainda não foi implementada.

***

Este projeto foi desenvolvido como parte de um trabalho acadêmico individual. Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou reportar problemas através das issues.

## Autor

<a>
  <img src="https://github.com/MartinGBB.png" width="100px;" alt=""/>
  <sub><b>Martin Brazón</b></sub></a> <a href="https://github/MartinGBB" title="GitHub">
</a>

 [![Linkedin Badge](https://img.shields.io/badge/-MartinGBrazon-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/martinbrazon/)](https://www.linkedin.com/in/martinbrazon/) [![Gmail Badge](https://img.shields.io/badge/-escorpmartin97@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:escorpmartin97@gmail.com)](mailto:escorpmartin97@gmail.com)
 
