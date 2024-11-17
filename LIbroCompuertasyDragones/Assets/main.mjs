import { showTextByLetter } from "../SRC/Components/Showletters/letters.mjs";
import { wireLogic } from "../SRC/Components/Wire/Wire.mjs";
import { Notlogic } from "../SRC/Components/Not/Not.mjs";
import { OrLogic } from "../SRC/Components/Or/Or.mjs";
import { AndLogic } from "../SRC/Components/And/And.mjs";
import { XorLogic } from "../SRC/Components/Xor/Xor.mjs";
import { LatchLogic } from "../SRC/Components/Latch/Latch.mjs";
// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn"),
  nextBtn = document.querySelector("#next-btn"),
  book = document.querySelector("#book");

const paper1 = document.querySelector("#p1"),
  paper2 = document.querySelector("#p2"),
  paper3 = document.querySelector("#p3"),
  paper4 = document.querySelector("#p4"),
  paper5 = document.querySelector("#p5"),
  paper6 = document.querySelector("#p6"),
  paper7 = document.querySelector("#p7"),
  paper8 = document.querySelector("#p8");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
  switch (event.key) {
    case "ArrowLeft": // Flecha izquierda
      goPrevPage();
      break;
    case "ArrowRight": // Flecha derecha
      goNextPage();
      break;
    default:
      break; // Ignorar otras teclas
  }
}

function putButton(btn) {
  const button = document.getElementById(btn);
  button.style.display = "block";
}

function killBoton(btn) {
  const Button = document.getElementById(btn);
  Button.style.display = "none";
}

function putButtonAyB(btn, btn2) {
  const button = document.getElementById(btn);
  const button2 = document.getElementById(btn2);
  const i = document.getElementById("info-btn");
  button.style.display = "block";
  button2.style.display = "block";
  i.style.display = "block";
}

function killBotonAyB(btn, btn2) {
  const button = document.getElementById(btn);
  const button2 = document.getElementById(btn2);
  const i = document.getElementById("info-btn");
  button.style.display = "none";
  button2.style.display = "none";
  i.style.display = "none";
}

// Business Logic
let currentLocation = 1;
let numOfPapers = 8;
let maxLocation = numOfPapers + 1;

function openBook() {
  book.style.transform = "translateX(50%)";
  prevBtn.style.transform = "translateX(-180px)";
  nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
  if (isAtBeginning) {
    book.style.transform = "translateX(0%)";
  } else {
    book.style.transform = "translateX(100%)";
  }

  prevBtn.style.transform = "translateX(0px)";
  nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        openBook();

        putButton("prev-btn");
        showTextByLetter("Juan Manuel Moreno G Designer web", "colab");
        showTextByLetter("Zabdiel Diseñador grafico", "colab2");
        showTextByLetter("Christhopher Maldonado C Diseñador App", "colab3");
        showTextByLetter(
          "Los rumores eran ciertos en el reino Itsu. Una cueva más antigua que la tierra del hombre misma existe en las profundidades de la montaña llamada Sistema que guarda un tesoro más valioso que todo el oro de los reyes de la tierra. Este lugar es llamado Lógica. Pero las leyendas sobre las cueva abundan pues se dice que hay una terrible oscuridad causada por una maldición inquebrantable y la luz solo puede ser creada por los más sabios de los 9 reinos. Pero dos caballeros de Itsu con valentía después de haber escuchado la terrible historia de la cueva Lógica decidieron afinar su templanza y adentrarse a el gran peligro...",
          "info"
        );
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;

        break;
      case 2:
        putButtonAyB("A", "B");
        wireLogic(true);

        showTextByLetter(
          "La cueva Lógica tenía muchas subcuevas malditas; la cueva wire era la primera de ellas...justo en la entrada. La cueva wire no permitía que la luz fuera hecha a menos que la antorcha fuera tomada por el portador.",
          "Wireinfo"
        );
        paper2.classList.add("flipped");
        paper2.style.zIndex = 2;
        break;
      case 3:
        wireLogic(false);
        Notlogic(true);
        showTextByLetter(
          "La siguiente subcueva maldita era la cueva not, donde el ojo led brillaba con una fuerza cegadora y solo podía ser apagado si el portador de la antorcha sostenía con firmeza su antorcha.",
          "Notinfo"
        );
        paper3.classList.add("flipped");
        paper3.style.zIndex = 3;
        break;
      case 4:
        Notlogic(false);
        OrLogic(true);
        showTextByLetter(
          "La cueva or era simple. Al menos uno o ambos valientes debía sostener la antorcha para que la luz fuera creada.",
          "Orinfo"
        );
        paper4.classList.add("flipped");
        paper4.style.zIndex = 4;
        break;
      case 5:
        OrLogic(false);
        AndLogic(true);
        showTextByLetter(
          "La cueva and la maldición de esta cueva se rompía cuando ambos valientes tomaban sus antorchas. Los dos caballeros se acercaban cada vez más a un destino fatal...",
          "Andinfo"
        );
        paper5.classList.add("flipped");
        paper5.style.zIndex = 5;
        break;
      case 6:
        AndLogic(false);
        XorLogic(true);
        showTextByLetter(
          "Cerca de su destino se encuentran la cueva xor. Los dos valientes no podían sostener la antorcha al mismo tiempo para que la luz fuera creada.",
          "Xorinfo"
        );
        paper6.classList.add("flipped");
        paper6.style.zIndex = 6;
        break;
      case 7:
        XorLogic(false);
        LatchLogic(true);
        showTextByLetter(
          "La última cueva... la cueva latch. Una cueva peligrosa y tramposa, pues los valientes debían de ser astutos con sus antorchas. Un valiente es el que deberá sostener la antorcha para que la luz sea creada pero el otro deberá soltarla hasta el final de la cueva.",
          "latchinfo"
        );
        paper7.classList.add("flipped");
        paper7.style.zIndex = 7;
        break;
      case 8:
        LatchLogic(false);
        document.body.style.opacity = "0.5";
        showTextByLetter(
          "Atravesando la cueva, llegaron al tesoro más valioso que se ha visto nunca, pero pronto se dieron cuenta del porqué no debieron olvidar sus espadas en aquella taberna..",
          "endInfo"
        );
        paper8.classList.add("flipped");
        paper8.style.zIndex = 8;
        killBoton("next-btn");
        killBotonAyB("A", "B");
        closeBook(false);
        break;
      default:
        throw new Error("unkown state");
    }
    currentLocation++;
  }
}

function goPrevPage() {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        closeBook(true);
        killBoton("prev-btn");
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 8;
        break;
      case 3:
        wireLogic(false);
        killBotonAyB("A", "B");
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 7;
        break;
      case 4:
        wireLogic(true);
        Notlogic(false);
        paper3.classList.remove("flipped");
        paper3.style.zIndex = 6;
        break;
      case 5:
        OrLogic(false);
        Notlogic(true);
        paper4.classList.remove("flipped");
        paper4.style.zIndex = 5;
        break;
      case 6:
        OrLogic(true);
        AndLogic(false);
        paper5.classList.remove("flipped");
        paper5.style.zIndex = 4;
        break;
      case 7:
        XorLogic(false);
        AndLogic(true);
        paper6.classList.remove("flipped");
        paper6.style.zIndex = 3;
        break;
      case 8:
        XorLogic(true);
        LatchLogic(false);
        paper7.classList.remove("flipped");
        paper7.style.zIndex = 2;
        break;
      case 9:
        openBook();
        LatchLogic(true);
        putButton("next-btn");
        putButtonAyB("A", "B");
        paper8.classList.remove("flipped");
        paper8.style.zIndex = 1;
        break;
      default:
        throw new Error("unkown state");
    }

    currentLocation--;
  }
}
