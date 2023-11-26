class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".menu-mobile",
    ".nav-itens",
    ".nav-itens li",
  );
  mobileNavbar.init();



  // CONTADOR 
  
  const valor = document.getElementById('valor')
  const mais = document.getElementById('mais')
  const menos = document.getElementById('menos')
  const numero = document.getElementById('numero')
  const dividir = document.getElementById('dividir')
  
  const valorAtualizado = () => {
    valor.innerHTML = contador
  }

  const precoAtualizado = () => {
    numero.innerHTML = (contador * valorOriginal).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
  }

  const dividirAtualizado = () => {
    dividir.innerHTML = (contador * valorDividirOriginal).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
  }


  let contador = 1
  let intervalo = 1
  let valorOriginal = parseFloat(numero.innerHTML.replace('.', '').replace(',', '.'))
  let valorDividirOriginal = parseFloat(dividir.innerHTML.replace('.', '').replace(',', '.'))


  mais.addEventListener('mousedown', () => {
    intervalo = setInterval(() => {
      contador += 1
      valorAtualizado()
      precoAtualizado()
      dividirAtualizado()
    }, 50)
  })

  menos.addEventListener('mousedown', () => {
    intervalo = setInterval(() => {
      if (contador > 1) {
        contador -= 1
        valorAtualizado()
        precoAtualizado()
        dividirAtualizado()
      }
    }, 50)
  })


  document.addEventListener('mouseup', () => clearInterval(intervalo))

 