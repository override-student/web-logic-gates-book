import { putButton } from "../Button/Putbuttonpandn.mjs";
// Wire.mjs
export class Wire {
  constructor(data) {
    this.data = data;
    this.isActive = false; // Estado de activación
    this.handleKeyDownBound = this.handleKeyDown.bind(this);
    this.handleKeyUpBound = this.handleKeyUp.bind(this);
    this.handleButtonDownBound = this.handleButtonDown.bind(this);
    this.handleButtonUpBound = this.handleButtonUp.bind(this);
  }

  wireLogic(confirm) {
    this.isActive = confirm; // Actualiza el estado de activación

    const btn2 = document.getElementById("led");
    const btn_display = document.getElementById("A");

    // Si se activa la función
    if (confirm) {
      document.addEventListener("keydown", this.handleKeyDownBound);
      document.addEventListener("keyup", this.handleKeyUpBound);

      // Añadir eventos de mousedown y mouseup al botón btn_display
      btn_display.addEventListener("mousedown", this.handleButtonDownBound);
      btn_display.addEventListener("mouseup", this.handleButtonUpBound);
      btn_display.addEventListener("mouseleave", this.handleButtonUpBound); // Para manejar el caso de que el mouse salga del botón
    } else {
      // Si se desactiva, eliminamos los event listeners
      document.removeEventListener("keydown", this.handleKeyDownBound);
      document.removeEventListener("keyup", this.handleKeyUpBound);
      btn_display.removeEventListener("mousedown", this.handleButtonDownBound);
      btn_display.removeEventListener("mouseup", this.handleButtonUpBound);
      btn_display.removeEventListener("mouseleave", this.handleButtonUpBound);
      btn2.style.display = "none"; // Asegúrate de ocultar el botón si se desactiva
    }
  }

  handleKeyDown(event) {
    const btn2 = document.getElementById("led");
    if (this.isActive && event.key === "a") {
      putButton("next-btn");
      // Verifica si la tecla es "a"
      btn2.style.display = "block";
      document.body.style.opacity = "0.8";
    }
  }

  handleKeyUp(event) {
    const btn2 = document.getElementById("led");
    if (this.isActive && event.key === "a") {
      // Verifica si la tecla es "a"
      btn2.style.display = "none";
      document.body.style.opacity = "0.5";
    }
  }

  handleButtonDown() {
    const btn2 = document.getElementById("led");
    putButton("next-btn");
    // Al hacer clic en btn_display, se comporta como si se presionara la tecla "a"
    btn2.style.display = "block";
    document.body.style.opacity = "0.8";
  }

  handleButtonUp() {
    const btn2 = document.getElementById("led");
    // Al soltar el botón, se oculta el botón btn2
    btn2.style.display = "none";
    document.body.style.opacity = "0.5";
  }
}

// Crear una instancia de Wire y exportar la función wireLogic
const Instance = new Wire();
export const wireLogic = Instance.wireLogic.bind(Instance);
