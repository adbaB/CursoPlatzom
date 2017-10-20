'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Platzom;
function Platzom(str) {
  var translation = str;
  //Si la palabra es un pálindromo ninguna regla anterio cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas.
  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };
  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }

    return translation;
  }

  if (str == reverse(str)) {
    return minMay(str);
  }

  // Si la palabra termina en "ar", se le eliminan esos 2 caracteres.
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }
  //si la palabra empieza por z, se le añade "pe" al final.
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }
  //si la palabra traducida tiene 10 o más letras, se debe partir a la mitas y unir con un guión.
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));

    translation = firstHalf + '-' + secondHalf;
  }

  return translation;
}