function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gênero = 'homem'
      if (idade >= 0 && idade <10){
        img.setAttribute('src', 'menino-pequeno.png')
      }else if (idade < 21) {
        img.setAttribute('src', 'jovem-menino.png')
      }else if (idade < 50) {
        img.setAttribute('src', 'homem-adulto.png')
      } else {
        img.setAttribute('src', 'idoso.png')
      }
    } else if (fsex[1].checked) {
      gênero = 'mulher'
        if (idade >= 0 && idade <10){
          img.setAttribute('src', 'menina-pequena.png')
        }else if (idade < 21) {
          img.setAttribute('src', 'jovem-menina.png')
        }else if (idade < 50) {
          img.setAttribute('src', 'mulher-adulta.png')
        } else {
          img.setAttribute('src', 'idosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }
}