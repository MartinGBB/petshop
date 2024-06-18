document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  function loadContent(url, containerId, callback) {
    fetch(`https://martingbb.github.io/petshop/${url}`)
      .then(response => response.text())
      .then(data => {
        document.getElementById(containerId).innerHTML = data;
        if (callback) {
          callback();
        }
      })
      .catch(error => console.error(`Error loading content from ${url}`, error));
  }

  function loadPartials() {
    loadContent("partials/header.html", "header", setupNavigation);
    loadContent("partials/footer.html", "footer");
    loadContent("partials/menu.html", "menu", setupNavigation);
  }

  function setupLoginForm() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        localStorage.setItem('isLoggedIn', 'true');
        loadContent("pages/home.html", "content", loadPartials);
      });
    }
  }

  function setupNavigation() {
    document.querySelectorAll('.redirect').forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetPage = this.getAttribute('data-redirect-to');
        loadContent(`pages/${targetPage}.html`, "content");
      });
    });

    // Adiciona manipuladores de eventos para links de produtos
    document.querySelectorAll('.product-link').forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const productId = this.getAttribute('data-product-id');
        loadProductPage(productId);
      });
    });
  }

  function loadPageContent() {
    const bodyClass = document.body.classList[0];
    console.log(bodyClass);
    switch (bodyClass) {
      case 'products-page':
        loadContent("pages/products/product.html", "main-content", loadPartials);
        break;
      case 'services-page':
        loadContent("pages/services/services.html", "main-content", loadPartials);
        break;
      case 'register-page':
        loadContent("pages/register/register.html", "main-content", loadPartials);
        break;
      case 'profile-page':
        loadContent("pages/profile/profile.html", "main-content", loadPartials);
        break;
      default:
        loadContent("pages/home.html", "content", loadPartials);
        break;
    }
  }

  if (isLoggedIn) {
    loadPageContent();
  } else {
    loadContent("pages/login.html", "content", setupLoginForm);
  }
});
