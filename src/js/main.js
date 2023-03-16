const cards = document.querySelectorAll('.show_more')

cards.forEach(function (el) {
  el.addEventListener('click', function (e) {
    console.log(e.target.parentElement.classList.contains('show'))
    if (e.target.parentElement.classList.contains('show')) {
      e.target.parentElement.classList.remove('show')
      e.target.parentElement.classList.add('hide')
    } else {
      e.target.parentElement.classList.remove('hide')
      e.target.parentElement.classList.add('show')
    }
    if (e.target.nodeName === 'IMG') {
      if (e.target.parentElement.parentElement.classList.contains('show')) {
        e.target.parentElement.parentElement.classList.remove('show')
        e.target.parentElement.parentElement.classList.add('hide')
      } else {
        e.target.parentElement.parentElement.classList.remove('hide')
        e.target.parentElement.parentElement.classList.add('show')
      }

    }

  })
})
