let nota = prompt ("Insira uma nota de 0 a 100");
switch (true) {
    case nota >= 90 && nota <= 100:
        Conceito = "A";
        break;
    case nota >= 80 && nota <= 90:
        Conceito = "B";
        break;
    case nota >= 70 && nota <= 80:
        Conceito = "c";
        break;
    case nota >= 60 && nota <= 70:
        Conceito = "D";
        break;
    case nota >= 0 && nota <= 60:
       Conceito =  "F";
        break;
    default:
        conceito = "Nota inválida";
}

console.log("Conceito:" + conceito);

