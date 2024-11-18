export class ButtonKillanimated {
  constructor(elementId) {
    this.elementId = elementId;
  }

  KillButtonanimated(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("animated-text");
  }
}

// Exportar la función putButtonanimated
export const KillButtonanimated = (elementId) => {
  const instance = new ButtonKillanimated();
  instance.KillButtonanimated(elementId);
};
