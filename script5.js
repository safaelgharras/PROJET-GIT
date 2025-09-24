let competences = ["C1", "C3", "C2", "C1", "C8", "C2", "C1", "C4"];

function compterOccurrences(tableau, code) {
  let compteur = 0;
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] === code) {
      compteur++;
    }
  }
  return compteur;
}

console.log("Nombre de C1 : " + compterOccurrences(competences, "C1"));
console.log("Nombre de C2 : " + compterOccurrences(competences, "C2"));
console.log("Nombre de C3 : " + compterOccurrences(competences, "C3"));
console.log("Nombre de C4 : " + compterOccurrences(competences, "C4"));
console.log("Nombre de C8 : " + compterOccurrences(competences, "C8"));