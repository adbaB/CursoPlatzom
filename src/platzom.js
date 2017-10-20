
export default function Platzom(str){
  let translation = str
  //Si la palabra es un pálindromo ninguna regla anterio cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas.
  const reverse = (str) => str.split('').reverse().join('')
  function minMay(str) {
    const length =str.length
    let translation= ''
    let capitalize = true
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }

    return translation
  }

  if(str == reverse(str)){
    return minMay(str)
  }

  // Si la palabra termina en "ar", se le eliminan esos 2 caracteres.
  if(str.toLowerCase().endsWith('ar')){
    translation = str.slice(0,-2)
  }
  //si la palabra empieza por z, se le añade "pe" al final.
  if (str.toLowerCase().startsWith('z')) {
    translation+= 'pe'
  }
  //si la palabra traducida tiene 10 o más letras, se debe partir a la mitas y unir con un guión.
  const length=translation.length
  if (length >= 10){
    const firstHalf = translation.slice(0, Math.round(length/2))
    const secondHalf = translation.slice(Math.round(length/2))

    translation = `${firstHalf}-${secondHalf}`

  }

  return translation

}
