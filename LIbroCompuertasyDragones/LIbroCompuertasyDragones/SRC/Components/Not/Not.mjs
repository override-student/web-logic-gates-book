import { putButton } from "../Button/Putbuttonpandn.mjs";
// Not.mjs
export class Not {
  constructor(data) {
    this.data = data;
    this.isActive = false; // Estado de activación
    // Almacenar las funciones vinculadas
    this.handleKeyDownBound = this.handleKeyDown.bind(this);
    this.handleKeyUpBound = this.handleKeyUp.bind(this);
    this.handleButtonDownBound = this.handleButtonDown.bind(this);
    this.handleButtonUpBound = this.handleButtonUp.bind(this);
  }

  NotLogic(confirm) {
    this.isActive = confirm; // Actualiza el estado de activación
    const btn_display = document.getElementById("A");

    // Si se activa la función
    if (confirm) {
      document.body.style.opacity = "0.8";
      document.addEventListener("keydown", this.handleKeyDownBound);
      document.addEventListener("keyup", this.handleKeyUpBound);

      // Añadir eventos de mousedown y mouseup al botón btn_display
      btn_display.addEventListener("mousedown", this.handleButtonDownBound);
      btn_display.addEventListener("mouseup", this.handleButtonUpBound);
      btn_display.addEventListener("mouseleave", this.handleButtonUpBound); // Para manejar el caso de que el mouse salga del botón
    } else {
      document.body.style.opacity = "0.5";
      // Si se desactiva, eliminamos los event listeners
      document.removeEventListener("keydown", this.handleKeyDownBound);
      document.removeEventListener("keyup", this.handleKeyUpBound);
      btn_display.removeEventListener("mousedown", this.handleButtonDownBound);
      btn_display.removeEventListener("mouseup", this.handleButtonUpBound);
      btn_display.removeEventListener("mouseleave", this.handleButtonUpBound);
    }
  }

  handleKeyDown(event) {
    if (this.isActive && event.key === "a") {
      putButton("next-btn");
      // Verifica si la tecla es "a"
      document.body.style.opacity = "0.5";
    }
  }

  handleKeyUp(event) {
    if (this.isActive && event.key === "a") {
      // Verifica si la tecla es "a"
      document.body.style.opacity = "0.8";
    }
  }

  handleButtonDown() {
    putButton("next-btn");
    // Al hacer clic en btn_display, se comporta como si se presionara la tecla "a"
    document.body.style.opacity = "0.5";
  }

  handleButtonUp() {
    // Al soltar el botón, se restaura la opacidad
    document.body.style.opacity = "0.8";
  }
}

// Crear una instancia de Not y exportar la función NotLogic
const Instance = new Not();
export const Notlogic = Instance.NotLogic.bind(Instance);
