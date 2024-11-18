// Buttonanimated.mjs
export class Buttonanimated {
  constructor(elementId) {
    this.elementId = elementId;
  }

  putButtonanimated(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("animated-text");
  }

  putButtonanimatedgame(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("animated-textgame");
  }
}

// Exportar la función putButtonanimated
export const putButtonanimated = (elementId) => {
  const instance = new Buttonanimated();
  instance.putButtonanimated(elementId);
};

export const putButtonanimatedgame = (elementId) => {
  const instance = new Buttonanimated();
  instance.putButtonanimatedgame(elementId);
};
