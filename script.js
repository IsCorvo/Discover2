function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  // Pegar a Tag img
  const img = document.createElement("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adcionar a imagem light
    img.setAttribute('src', './assets/avatar-light-mode.png')
  } else {
    // Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}