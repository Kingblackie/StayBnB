const menu = document.querySelector('.fa-bars')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click', () => {
	navbar.classList.toggle('hide-menu')
})