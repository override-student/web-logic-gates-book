// letters.mjs
export class letters {
  constructor(text, elementId) {
    this.text = text;
    this.elementId = elementId;
  }

  showTextByLetter(text, elementId) {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Element with ID ${elementId} not found.`);
      return;
    }

    element.innerHTML = ""; // Limpiar el contenido previo
    let index = 0; // Índice para rastrear la posición de la letra
    const duration = 6000; // Duración total en milisegundos
    const interval = duration / text.length; // Tiempo entre cada letra

    const intervalId = setInterval(() => {
      if (index < text.length) {
        element.innerHTML += text[index]; // Agregar la letra al div
        index++;
      } else {
        clearInterval(intervalId); // Limpiar el intervalo cuando se complete
      }
    }, interval);
  }
}

// Exportar la función showTextByLetter
export const showTextByLetter = (text, elementId) => {
  const instance = new letters();
  instance.showTextByLetter(text, elementId);
};
