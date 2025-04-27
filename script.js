class ResponsiveMenu {
    constructor(toggleId, linksSelector) {
      this.menuToggle = document.getElementById(toggleId);
      this.menuLinks = document.querySelectorAll(linksSelector);
  
      this.init();
    }
  
    init() {
      this.menuLinks.forEach(link => {
        link.addEventListener("click", () => this.closeMenu());
      });
    }
  
    closeMenu() {
      if (this.menuToggle.checked) {
        this.menuToggle.checked = false;
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    new ResponsiveMenu("menu-toggle", ".menu-links a");
  });