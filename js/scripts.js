var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var newText = "Zielone słonie";
var newtextUpperCased = newText.toUpperCase();
var textCharsAfter = text.replace('Papugi', 'Zielone słonie');

console.log(textCharsAfter.length/2);

console.log(textCharsAfter.substr(0, 45));