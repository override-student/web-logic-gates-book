export class Xor {
  constructor() {
    this.isActive = false; // Estado de activación
    this.btnXor = document.getElementById("ledXor");
    this.btn_display1 = document.getElementById("A"); // Primer botón adicional
    this.btn_display2 = document.getElementById("B"); // Segundo botón adicional
    this.keysPressed = {}; // Objeto para rastrear las teclas presionadas

    // Bindings para event listeners
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleButtonDown = this.handleButtonDown.bind(this);
    this.handleButtonUp = this.handleButtonUp.bind(this);
  }

  XorLogic(confirm) {
    this.isActive = confirm; // Actualiza el estado de activación

    if (confirm) {
      document.addEventListener("keydown", this.handleKeyDown);
      document.addEventListener("keyup", this.handleKeyUp);

      // Añadir listeners para los botones adicionales
      this.addButtonListeners(this.btn_display1);
      this.addButtonListeners(this.btn_display2);
    } else {
      // Si se desactiva, eliminamos los event listeners
      document.removeEventListener("keydown", this.handleKeyDown);
      document.removeEventListener("keyup", this.handleKeyUp);

      // Eliminar listeners de los botones adicionales
      this.removeButtonListeners(this.btn_display1);
      this.removeButtonListeners(this.btn_display2);

      this.hideButton(); // Asegúrate de ocultar el botón si se desactiva
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
    if (this.isActive) {
      this.keysPressed[event.key] = true; // Marca la tecla como presionada

      // Verifica si "a" o "b" están presionadas, pero no ambas al mismo tiempo
      const isADown = this.keysPressed["a"] || false;
      const isBDown = this.keysPressed["b"] || false;

      if (isADown !== isBDown) {
        // XOR lógico
        this.showButton();
      } else {
        this.hideButton();
      }
    }
  }

  handleKeyUp(event) {
    if (this.isActive) {
      delete this.keysPressed[event.key]; // Marca la tecla como no presionada

      // Recalcula la lógica XOR al soltar una tecla
      const isADown = this.keysPressed["a"] || false;
      const isBDown = this.keysPressed["b"] || false;

      if (isADown !== isBDown) {
        // XOR lógico
        this.showButton();
      } else {
        this.hideButton();
      }
    }
  }

  handleButtonDown() {
    this.showButton();
  }

  handleButtonUp() {
    this.hideButton();
  }

  showButton() {
    this.btnXor.style.display = "block";
    document.body.style.opacity = "0.8";
  }

  hideButton() {
    this.btnXor.style.display = "none";
    document.body.style.opacity = "0.5";
  }
}

// Crear una instancia de Xor y exportar la función XorLogic
const xorInstance = new Xor();
export const XorLogic = xorInstance.XorLogic.bind(xorInstance);
