const toggleTag = document.querySelector('div.mob-wrapper')
const mainTag = document.querySelector('main')

toggleTag.addEventListener('click', function () {
mainTag.classList.toggle('open')
})
