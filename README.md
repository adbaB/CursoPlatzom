# Platzom
 platzon es un idioma inventado para el [curso de Fundamentos de javascript](https://platzi.com/js) de [platzi](https://platzi.com)

 ## Descripción del idioma
 - Si la palabra termina en "ar", se le eliminan esos 2 caracteres.
 - Si la palabra empieza por z, se le añade "pe" al final.
 - Si la palabra traducida tiene 10 o más letras, se debe partir a la mitas y unir con un guión.
 - Si la palabra es un pálindromo ninguna regla anterio cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas.

 ## Instalación
 ```
 npm install proyectoplatzom
 ```
 ## Uso

```
import proyectoplatzom from 'proyectoplatzom'
Platzom('Programar')//Program
Platzom('zorro')//zorrope
Platzom('zarpar')//zarppe
Platzom('abecedario')abec-dario
Platzom("sometemos") // SoMeTeMoS
```
## Créditos

 - [Alberto Basabe 'AdbaB'](https://twitter.com/AlbertoBasabe4)

## Licencia
[MIT](https://opensource.org/licenses/MIT)
