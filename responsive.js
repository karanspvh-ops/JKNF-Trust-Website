// Close the phone/tablet menu after a link is chosen or when tapping outside it
document.addEventListener('click', function (e) {
  document.querySelectorAll('details.jknf-menu[open]').forEach(function (menu) {
    if (!menu.contains(e.target) || e.target.closest('nav a')) menu.removeAttribute('open');
  });
});
