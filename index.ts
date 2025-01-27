createTitle()
createAbout()


// UTILITIES ========== 

function createTitle() {
  const h1 = document.createElement('h1')
  h1.innerText = "Triston Armstrong"
  document.body.appendChild(h1)
}

function createAbout() {
  const about = document.createElement('p')
  about.innerText = "Welcome to my domain. Take a look around!"
  document.body.appendChild(about)
}
