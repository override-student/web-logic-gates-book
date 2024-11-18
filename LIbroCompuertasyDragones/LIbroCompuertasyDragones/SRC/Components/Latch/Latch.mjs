import { putButton } from "../Button/Putbuttonpandn.mjs";
export class Latch {
  constructor() {
    this.isActive = false; // Estado de activación
    this.isKeyADown = false;
    this.isKeyBDown = false;
    this.btn_display1 = document.getElementById("A"); // Primer botón adicional
    this.btn_display2 = document.getElementById("B"); // Segundo botón adicional

    // Bindings para event listeners
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleButtonDown = this.handleButtonDown.bind(this);
    this.handleButtonUp = this.handleButtonUp.bind(this);
  }

  LatchLogic(confirm) {
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
      if (event.key === "a" || event.key === "A") {
        this.isKeyADown = true;
        document.body.style.opacity = "0.8"; // Cambia la opacidad si "a" está presionada
      } else if (event.key === "b" || event.key === "B") {
        putButton("next-btn");
        this.isKeyBDown = true;
        document.body.style.opacity = "0.5"; // Cambia la opacidad si "b" está presionada
      }
    }
  }

  handleKeyUp(event) {
    if (this.isActive) {
      if (event.key === "a" || event.key === "A") {
        this.isKeyADown = false;
        if (!this.isKeyBDown) {
          // Reinicia el estado si "b" no está presionada
        }
      } else if (event.key === "b" || event.key === "B") {
        this.isKeyBDown = false;
        if (!this.isKeyADown) {
          // Reinicia el estado si "a" no está presionada
        }
      }
    }
  }

  handleButtonDown(event) {
    if (this.isActive) {
      if (event.target === this.btn_display1) {
        this.isKeyADown = true;
        document.body.style.opacity = "0.8"; // Cambia la opacidad si el botón A está presionado
      } else if (event.target === this.btn_display2) {
        this.isKeyBDown = true;
        putButton("next-btn");
        document.body.style.opacity = "0.5"; // Cambia la opacidad si el botón B está presionado
      }
    }
  }

  handleButtonUp(event) {
    if (this.isActive) {
      if (event.target === this.btn_display1) {
        this.isKeyADown = false;
        if (!this.isKeyBDown) {
        }
      } else if (event.target === this.btn_display2) {
        this.isKeyBDown = false;
        if (!this.isKeyADown) {
        }
      }
    }
  }
}

// Crear una instancia de Latch y exportar la función LatchLogic
const latchInstance = new Latch();
export const LatchLogic = latchInstance.LatchLogic.bind(latchInstance);
