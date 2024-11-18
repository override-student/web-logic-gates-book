function killBoton(Butttoninit) {
  const Button = document.getElementById(Butttoninit);
  if (Button) {
    Button.style.display = "none";
  } else {
    console.error(`Button with id "${Butttoninit}" not found.`);
  }
}

killBoton("prev-btn");
