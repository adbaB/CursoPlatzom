const expect = require('chai').expect;
const platzom = require('..').default

describe('#proyectoplatzom',function () {
  it('Si la palabra termina en "ar", se le eliminan esos 2 caracteres.', function () {
    const translation = platzom('programar')
    expect(translation).to.equal('program')
  })
  it('Si la palabra empieza por z, se le añade "pe" al final.', function () {
    const translation = platzom('zorro')
    const translation2 = platzom('zarpar')
    expect(translation).to.equal('zorrope')
    expect(translation2).to.equal('zarppe')
  })
  it('Si la palabra traducida tiene 10 o más letras, se debe partir a la mitas y unir con un guión.', function () {
    const translation = platzom('abecedario')
    expect(translation).to.equal('abece-dario')
  })
  it('Si la palabra es un pálindromo ninguna regla anterio cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas.', function () {
    const translation = platzom('sometemos')
    expect(translation).to.equal('SoMeTeMoS')
  })

})
