switch (true) {
    case nota >= 90 && nota <= 100:
        conceito = "Conceito A";
        break;
    case nota >= 80 && nota <= 89:
        conceito = "Conceito B";
        break;
    case nota >= 70 && nota <= 79:
        conceito = "Conceito C";
        break;
    case nota >= 60 && nota <= 69:
        conceito = "Conceito D";
        break;
    case nota >= 0 && nota <= 59:
        conceito = "Conceito F";
        break;
    default:
        conceito = "Nota inválida";
}

console.log("Conceito: " + conceito);

