const prompt = require('prompt-sync')();

function addition() {
    let nm1 = Number(prompt("enter num 1:"));
    let nm2 = Number(prompt("entrer num 2:"));

    console.log(`\nle résultat est ${nm1 + nm2}\n`);
}
function moins() {
    let nm1 = Number(prompt("enter num 1:"));
    let nm2 = Number(prompt("entrer num 2:"));

    console.log(`\nle résultat est ${nm1 - nm2}\n`);
}
function multipation() {
    let nm1 = Number(prompt("enter num 1:"));
    let nm2 = Number(prompt("entrer num 2:"));

    console.log(`\nle résultat est ${nm1 * nm2}\n`);
}
function devision() {
    let nm1 = Number(prompt("enter num 1:"));

    let nm2 = Number(prompt("entrer num 2:"));

    if (nm2 == 0) {
        console.log("erreur");
    } else {
        console.log("resulta" + nm1 / nm2);

    }
}
function puisance() {
    let nm1 = Number(prompt("enter num 1:"));
    let nm2 = Number(prompt("entrer num 2:"));

    let puissence = Math.pow(nm1, nm2);
    console.log(puissence)

}
function racine() {
    let nm1 = Number(prompt("enter num 1:"));
    let racine = Math.sqrt(nm1);
    console.log("resu" + "  " + racine);

}
function factorual() {

    let n = Number(prompt("enter un nombre: "));
    if (n === 0 || n === 1) {//0!=1&& 1!=1.
        return 1;
    }
    if (n < 0) {
        console.error("la foctorielle n'est pas définie pour les nombres négatifs.");
    return null;
    }
    let resultat = 1;
    let i;
    for (i = n; i >= 1; i--) {
        resultat *= i;
    }
    console.log("resultat" + "  " + resultat);
}
while (true) {
    console.log("1 - addition");
    console.log("2 - sustraction");
    console.log("3 - multiplication");
    console.log("4 - devision");
    console.log("5- puisance");
    console.log("6 - racine");
    console.log("7 - factorual");
    console.log("8- quitter");
    const op = prompt("entrer votre choix :");


    switch (op) {
        case '1':
            addition();
            break;
        case '2':
            moins();
            break;

        case '3':
            multipation()
            break;
        case '4':
            devision()
            break;
        case '5':
            puisance();
            break;
        case '6':
            racine()
            break;
            case '7':
                factorual()
                break;
        case '8':
            return;
        default:
            console.log("erreur");
            break;
    }
}
