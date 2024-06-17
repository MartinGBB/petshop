document.addEventListener("DOMContentLoaded", function () {
   // Verificar se o usuário está logado
   const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
 
   // Função para carregar o conteúdo
   function loadContent(url, containerId, callback) {
     fetch(url)
       .then(response => response.text())
       .then(data => {
         document.getElementById(containerId).innerHTML = data;
         if (callback) {
           callback();
         }
       });
   }
 
   // Função para carregar o cabeçalho e rodapé
   function loadPartials() {
     fetch("partials/header.html")
       .then(response => response.text())
       .then(data => {
         document.getElementById("header").innerHTML = data;
         setupNavigation();
       });
 
     fetch("partials/footer.html")
       .then(response => response.text())
       .then(data => {
         document.getElementById("footer").innerHTML = data;
       });
 
     fetch("partials/menu.html")
       .then(response => response.text())
       .then(data => {
         document.getElementById("menu").innerHTML = data;
       });
   }
 
   // Função para configurar o formulário de login
   function setupLoginForm() {
     const loginForm = document.getElementById('login-form');
     if (loginForm) {
       loginForm.addEventListener('submit', function (event) {
         event.preventDefault();
         // Simulação de login - em um cenário real, você faria uma verificação de credenciais
         localStorage.setItem('isLoggedIn', 'true');
         loadContent("pages/home.html", "content", loadPartials);
       });
     }
   }
 
   // Função para configurar a navegação
   function setupNavigation() {
     document.querySelectorAll('a.nav-link').forEach(link => {
       link.addEventListener('click', function (event) {
         event.preventDefault();
         const targetPage = this.getAttribute('href');
         loadContent(`pages/${targetPage}`, "content");
       });
     });
   }
 
   // Carregar a página correta com base no estado de login
   if (isLoggedIn) {
     loadContent("pages/home.html", "content", loadPartials);
   } else {
     loadContent("pages/login.html", "content", setupLoginForm);
   }
 });
 