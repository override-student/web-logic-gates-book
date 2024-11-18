export class Killbuttonpandn {
  constructor(elementId) {
    this.elementId = elementId;
  }

  killBoton(elementId) {
    const Button = document.getElementById(elementId);
    Button.style.display = "none";
  }
}

// Exportar la función putButtonanimated
export const killBoton = (elementId) => {
  const instance = new Killbuttonpandn();
  instance.killBoton(elementId);
};
