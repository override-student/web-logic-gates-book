export class putbuttonpandn {
  constructor(elementId) {
    this.elementId = elementId;
  }

  putButton(elementId) {
    const button = document.getElementById(elementId);
    button.style.display = "block";
  }
}

// Exportar la función putButtonanimated
export const putButton = (elementId) => {
  const instance = new putbuttonpandn();
  instance.putButton(elementId);
};
