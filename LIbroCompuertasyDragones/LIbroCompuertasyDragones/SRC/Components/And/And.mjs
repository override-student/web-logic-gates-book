import { putButton } from "../Button/Putbuttonpandn.mjs";
export class And {
  constructor(data) {
    this.isActive = false; // Estado de activación
    this.btn3 = document.getElementById("ledAnd");
    this.btn3_2 = document.getElementById("ledAnd2");
    this.btn_display1 = document.getElementById("A"); // Primer botón adicional
    this.btn_display2 = document.getElementById("B"); // Segundo botón adicional
    this.keysPressed = {}; // Objeto para rastrear las teclas presionadas

    // Bindings para event listeners
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleButtonDown = this.handleButtonDown.bind(this);
    this.handleButtonUp = this.handleButtonUp.bind(this);
  }

  AndLogic(confirm) {
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
    if (this.isActive) {
      this.keysPressed[event.key] = true; // Marca la tecla como presionada

      // Verifica si ambas teclas "a" y "b" están presionadas
      if (this.keysPressed["a"] && this.keysPressed["b"]) {
        this.showButtons();
      }
    }
  }

  handleKeyUp(event) {
    if (this.isActive) {
      delete this.keysPressed[event.key]; // Marca la tecla como no presionada

      // Si se suelta cualquiera de las teclas "a" o "b", oculta los botones
      if (!this.keysPressed["a"] || !this.keysPressed["b"]) {
        this.hideButtons();
      }
    }
  }

  handleButtonDown() {
    this.showButtons();
  }

  handleButtonUp() {
    this.hideButtons();
  }

  showButtons() {
    putButton("next-btn");
    this.btn3.style.display = "block";
    this.btn3_2.style.display = "block";
    document.body.style.opacity = "0.8";
  }

  hideButtons() {
    this.btn3.style.display = "none";
    this.btn3_2.style.display = "none";
    document.body.style.opacity = "0.5";
  }
}

// Crear una instancia de And y exportar la función AndLogic
const instance = new And();
export const AndLogic = instance.AndLogic.bind(instance);
