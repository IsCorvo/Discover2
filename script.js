function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  // Pegar a Tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adcionar a imagem light
    img.setAttribute('src', './assets/avatar-light-mode.png')
    img.setAttribute(
      "alt",
      "Foto de Calebe Medeiros, usando óculos, com uma blusa preta!"
    )
  } else {
    // Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Calebe Medeiros, usando óculos, blusa preta, mochila e máscara preta, como cabelo voando ao vento!."
    )
  }
}