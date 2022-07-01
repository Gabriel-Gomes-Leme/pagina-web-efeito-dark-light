
var toggleTheme = document.querySelector('.toggle-theme')
var header = document.querySelector('header')
var banner = document.querySelector('.banner')
var works = document.querySelector('.works')
var toggleMenu = document.querySelector('.toggle-menu')
var navigation = document.querySelector('.navigation')

toggleMenu.addEventListener('click', function(){
    toggleMenu.querySelector('i').classList.toggle('fa-times')
    navigation.classList.toggle('show')
})

toggleTheme.addEventListener('click', function(){
    toggleTheme.querySelector('i').classList.toggle('fa-sun')
        banner.classList.toggle('dark')
        header.classList.toggle('dark')
        works.classList.toggle('dark')
})