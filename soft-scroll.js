/*

- Identificar o clique no menu
- Verificar o item que foi clicado e fazer referência com o alvo
- Verificar distância sobre o alvo e o topo
- Animar o scroll até o alvo

*/

const menu = document.querySelectorAll('.header-nav a[href^="#"]')

menu.forEach(menuItem => {
  menuItem.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
  const element = event.target
  
  event.preventDefault()
  
  const headerNavHeight = document.querySelector("header");
  console.log(headerNavHeight.offsetHeight)
  const id = element.getAttribute('href')
  const section = document.querySelector(id)
  window.scrollTo({ top: (section.offsetTop-headerNavHeight.offsetHeight), behavior: 'smooth' })  
}


