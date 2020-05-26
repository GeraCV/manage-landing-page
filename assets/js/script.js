const showNav = (ctoogleId, navId, overlayId, toogleId, closeId) => {
  const ctoogle = document.getElementById(ctoogleId),
    nav = document.getElementById(navId),
    overlay = document.getElementById(overlayId),
    toogle = document.getElementById(toogleId),
    close = document.getElementById(closeId)

  ctoogle.addEventListener('click', () => {
    nav.classList.toggle('show-nav')
    document.body.classList.toggle('hidden')
    overlay.classList.toggle('overlay-active')
    toogle.classList.toggle('none')
    close.classList.toggle('block')
    close.classList.toggle('none')
  })
}
showNav('c-toogle', 'nav', 'overlay', 'toogle', 'close')
