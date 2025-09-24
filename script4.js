/*let i = 1;
while( i<=2) { 
    let j = 1;
    
    while (j<=2){
        if (i == j){
            console.log( i + ":" + j);
        }else{
            console.log( i + ":" + j);
        }
    j++;
    } 
 
    i++;
    }*/

 function saisirNombresEtResumer() {
    let sum = 0;
    let count = 0;
    let max = null;
  
    while (true) {
      let input = prompt("Entrez un nombre positif (0 pour arrêter) :");
  
      // Si l'utilisateur clique "Annuler"
      if (input === null) {
        console.log("Saisie annulée par l'utilisateur.");
        return; // on quitte la fonction
      }
  
      // Convertir en nombre (virgule autorisée)
      let num = parseFloat(input);
  
      // Vérifier si c'est un nombre valide
      if (Number.isNaN(num)) {
        alert("Entrée invalide — merci d'entrer un nombre.");
        continue; // revenir au début de la boucle
      }
  
      // Condition d'arrêt
      if (num === 0) {
        break;
      }
  
      // On n'accepte que les positifs
      if (num < 0) {
        alert("Veuillez entrer un nombre positif (ou 0 pour arrêter).");
        continue;
      }
  
      // Mettre à jour somme, compteur et maximum
      sum += num;
      count++;
      if (max === null || num > max) {
        max = num;
      }
    }
  
    let moyenne = count === 0 ? 0 : sum / count;
  
    console.log("Résultats :");
    console.log("Nombre de valeurs : " + count);
    console.log("Somme : " + sum);
    console.log("Moyenne : " + moyenne);
    console.log("Plus grand : " + (max === null ? "Aucun nombre saisi" : max));
  }
  
  // Appel de la fonction
  saisirNombresEtResumer();