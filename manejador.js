let pais = prompt(
  "ingrese un país, y te diremos si pertenece al MERCOSUR, sino ESC"
).toUpperCase();

while (pais.toUpperCase() != "ESC") {
  switch (pais.toUpperCase()) {
    case "ARGENTINA":
      console.log(pais + " pertenece al MERCOSUR");
      document.write(pais + " pertenece al MERCOSUR 😁");
      break;
    case "URUGUAY":
      console.log(pais + " pertenece al MERCOSUR");
      document.write(pais + " pertenece al MERCOSUR 😁");
      break;
    case "BRASIL":
      console.log(pais + " pertenece al MERCOSUR");
      document.write(pais + " pertenece al MERCOSUR 😁");
      break;
    case "PARAGUAY":
      console.log(pais + " pertenece al MERCOSUR");
      document.write(pais + " pertenece al MERCOSUR 😁");
      break;
    default:
      console.log(pais + " no pertenece al MERCOSUR 😒");
      document.write(pais + " no pertenece al MERCOSUR 😒");
      break;
  }
  pais = prompt(
    "ingresa otro país, para saber si pertenece al MERCOSUR🦗🍉, sino ESC"
  );
}
