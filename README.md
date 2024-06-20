# PetShop

Este projeto é um site básico para um PetShop, onde os usuários podem acessar informações sobre produtos para animais de estimação, fazer login, cadastrar novos usuários e visualizar seus perfis.

## Funcionalidades

- **Página Inicial**: Apresenta uma visão geral do PetShop, com links para navegação.
- **Login**: Os usuários podem fazer login para acessar funcionalidades exclusivas. Não é necessário email nem senha para entrar.
- **Cadastro**: Permite que novos usuários se cadastrem no site.
- **Perfil de Usuário**: Apresenta informações básicas do usuário e do pet cadastrado.
- **Carrinho de Compras**: A funcionalidade de carrinho de compras ainda não foi implementada.

## Tecnologias Utilizadas

- HTML5
- CSS3 (Bootstrap para estilos)
- JavaScript (para funcionalidades dinâmicas)
- GitHub Pages (para hospedagem)

## Responsividade

O site é completamente responsivo, adaptando-se automaticamente a diferentes tamanhos de tela e dispositivos, incluindo smartphones, tablets e desktops. Utilizamos princípios de design responsivo e o framework Bootstrap para garantir uma experiência de usuário consistente em todos os dispositivos.

## Estrutura do Projeto

- **index.html**: Página inicial do site.
- **pages/**: Contém páginas adicionais como login.html, register.html, profile.html, etc.
- **assets/**: Diretório para imagens, estilos CSS e scripts JavaScript.
- **partials/**: Componentes reutilizáveis como header, footer, menu, etc.

## Como Executar o Projeto Localmente

1. Clone o repositório:
   ``git clone git@github.com:MartinGBB/petshop.git``


2. Abra o arquivo `index.html` no seu navegador web.

3. Utilize a extensão `live server` no VSCode para executar o projeto.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou reportar problemas através das issues.

## Funcionamento do Script.js

O arquivo `script.js` gerencia o comportamento dinâmico do site:

- **Login Simulado**: Utiliza `localStorage` para verificar se o usuário está logado.
- **Carregamento Dinâmico**: Carrega conteúdo das páginas utilizando `fetch`.
- **Navegação**: Configura navegação com base em atributos `data-role` nos links.

### Segurança Futura

Para maior segurança, considere a implementação de um sistema de login mais robusto, como autenticação com tokens.

### Carrinho de Compras

A funcionalidade de carrinho de compras ainda não foi implementada.

Espero que essas informações sejam úteis para entender e contribuir com o projeto PetShop!