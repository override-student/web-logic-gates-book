export class Or {
  constructor(data) {
    this.isActive = false; // Estado de activación
    this.btn3Or = document.getElementById("ledOr");
    this.btn3Or2 = document.getElementById("ledOr2");
    this.btn_display = document.getElementById("A"); // Primer botón
    this.btn_display2 = document.getElementById("B"); // Segundo botón

    // Bindings para event listeners
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleButtonDown = this.handleButtonDown.bind(this);
    this.handleButtonUp = this.handleButtonUp.bind(this);
  }

  OrLogic(confirm) {
    this.isActive = confirm; // Actualiza el estado de activación

    if (confirm) {
      document.addEventListener("keydown", this.handleKeyDown);
      document.addEventListener("keyup", this.handleKeyUp);
      this.addButtonListeners(this.btn_display);
      this.addButtonListeners(this.btn_display2);
    } else {
      document.removeEventListener("keydown", this.handleKeyDown);
      document.removeEventListener("keyup", this.handleKeyUp);
      this.removeButtonListeners(this.btn_display);
      this.removeButtonListeners(this.btn_display2);
      this.hideButtons(); // Asegúrate de ocultar los botones si se desactiva
    }
  }

  addButtonListeners(button) {
    button.addEventListener("mousedown", this.handleButtonDown);
    button.addEventListener("mouseup", this.handleButtonUp);
    button.addEventListener("mouseleave", this.handleButtonUp);
  }

  removeButtonListeners(button) {
    button.removeEventListener("mousedown", this.handleButtonDown);
    button.removeEventListener("mouseup", this.handleButtonUp);
    button.removeEventListener("mouseleave", this.handleButtonUp);
  }

  handleKeyDown(event) {
    if (this.isActive && (event.key === "a" || event.key === "b")) {
      this.showButtons();
    }
  }

  handleKeyUp(event) {
    if (this.isActive && (event.key === "a" || event.key === "b")) {
      this.hideButtons();
    }
  }

  handleButtonDown() {
    this.showButtons();
  }

  handleButtonUp() {
    this.hideButtons();
  }

  showButtons() {
    this.btn3Or.style.display = "block";
    this.btn3Or2.style.display = "block";
    document.body.style.opacity = "0.8";
  }

  hideButtons() {
    this.btn3Or.style.display = "none";
    this.btn3Or2.style.display = "none";
    document.body.style.opacity = "0.5";
  }
}

// Crear una instancia de Or y exportar la función OrLogic
const instance = new Or();
export const OrLogic = instance.OrLogic.bind(instance);
