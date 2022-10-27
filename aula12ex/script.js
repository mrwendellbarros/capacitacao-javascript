function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if ( hora >= 0 && hora < 12) {
    img.src = 'https://user-images.githubusercontent.com/102330689/184416769-f6956f68-8284-45b6-b974-a902c254e615.png'
    document.body.style.background = '#ddbf81'
  } else if (hora >= 12 && hora <= 18) {
    img.src = 'https://user-images.githubusercontent.com/102330689/184417110-96eea409-7ea2-4087-9254-4ef1957fc951.png'
    document.body.style.background = '#bc856b'
  } else {
    img.src = 'https://user-images.githubusercontent.com/102330689/184416979-4f65ef08-872b-45a6-b665-5086a4ae35c3.png'
    document.body.style.background = '#3380a0'
  }
}