document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

	const hostName = window.location.hostname
	const isLocalhost = hostName === "localhost" || hostName === "127.0.0.1";
	const BASE_URL = isLocalhost ? "/" : "/petshop/";

  function loadContent(url, containerId, callback) {
    fetch(`${BASE_URL}${url}`)
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
    loadContent("partials/header.html", "header", redirectPage);
    loadContent("partials/support.html", "support");
    loadContent("partials/footer.html", "footer");
    loadContent("partials/menu.html", "menu", redirectPage);
  }
	

  function setupLoginForm() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        localStorage.setItem('isLoggedIn', 'true');
				window.location.reload()
      });
    }
  }


	// navegação da aplicação
  function setupNavigation(tag_id) {
    document.querySelectorAll(`[data-role="${tag_id}"]`).forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetPage = this.getAttribute('href') || this.getAttribute('data-redirect-to') || "";

        if (tag_id === 'redirect-page') {
					window.location.href = window.location.origin + BASE_URL + targetPage + "/"
        } else if (tag_id === 'load-component') {
					console.log(tag_id)
          // loadContent(`pages/${targetPage}`, "main-content", loadPartials);
        }
      });
    });	
  }

	function redirectPage() {
		setupNavigation("redirect-page")
	}

	// routeador do site
  function loadPageContent() {
    const bodyClass = document.body.classList[0];
    console.log(bodyClass);
    switch (bodyClass) {
      case 'products-page':
        loadContent("pages/products/product.html", "main-content", loadPartials);
        break;
      case 'brinqueido-mordedor-page':
        loadContent("pages/products/product-detail/brinqueido-mordedor/product.html", "main-content", loadPartials);
        break;
      case 'armazenador_racao-page':
        loadContent("pages/products/product-detail/armazenador_racao/product.html", "main-content", loadPartials);
        break;
      case 'shampoo-page':
        loadContent("pages/products/product-detail/shampoo/product.html", "main-content", loadPartials);
        break;
      case 'sache-page':
        loadContent("pages/products/product-detail/sache/product.html", "main-content", loadPartials);
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
