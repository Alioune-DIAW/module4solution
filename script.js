// SOLUTION PLUS DIFFICILE
(function() {
  
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  // Boucle sur le tableau des noms
  for (var name in names) {
    
    // Récupère la première lettre du nom
    var firstLetter = names[name].charAt(0).toLowerCase();
    
    // Compare la première lettre
    if (firstLetter === 'j') {
      // Si commence par 'j' ou 'J' → Good Bye
      byeSpeaker.speak(names[name]);
    } else {
      // Sinon → Hello
      helloSpeaker.speak(names[name]);
    }
  }
  
})();