function calculer(a, b, operation){
    let resultat;
    if (operation === "addition"){
        resultat = a+b;
    } else if ( operation ==="-"){
        resultat = a-b;
    } else if ( operation === "*"){
        resultat = a*b;
    } else if ( operation === "/"){
        resultat = a/b;
    } else {
         resultat =" operation invalide ";
    }
    return resultat;
}
console.log(calculer(7, 12,"a"));
console.log(calculer(7, 12,"-"));
console.log(calculer(7, 12,"*"));
console.log(calculer(7, 12,"/"));

/* fdss (2+3)*(4+5) */
function somme(a, b){
    return a + b; 
}
function multiplication(a, b){
    return a * b; 
}
console.log(multiplication(somme(2,3) , somme(4,5)));


/*boucles for */

for (let i = 1; i<= 5; i++){
    console.log(i);
}
/*boucle while */
 let i=1;
 while (i <= 7){
    console.log(i);
    i++;
 }
  
/*m */  
function demanderArtist() {
    let artistes = ["Warda", "Akil", "Cheb Khaled", "Hasni"];
    let choix;
  
    while (true) {
      
      choix = prompt("Choisissez un artiste (1 à " + artistes.length + "):\n" + 
                     "1. Warda\n2. Akil\n3. Cheb Khaled\n4. Hasni\n\nOu cliquez Annuler pour quitter.");
  
      
      if (choix === null) {
        return null;
      }
  
      
      choix = parseInt(choix);
  
     
      if (choix >= 1 && choix <= artistes.length && !isNaN(choix)) {
        return artistes[choix - 1]; 
      }
  
      alert("Choix invalide ! Essayez encore.");
    }
  }
  
  let resultat = demanderArtist();
  
  if (resultat === null) {
    console.log("Vous avez annulé le choix.");
  } else {
    console.log("Bravo ! Vous avez choisi de voir sur scène : " + resultat);
  }
  

  /*while */
   let I = 1;
   while(I<=5){
    console.log(I);
    I++;
   }

   /*2 */
  let s = 2;
  while(s>=10){
    console.log(s);
    s += 2;
  }

  