function switchTheme (event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'night');
    localStorage.setItem('dark-mode', 'night');
  } else {
    document.documentElement.setAttribute('data-theme', 'day');
    localStorage.setItem('dark-mode', 'day');
  }
}

const darkMode = localStorage.getItem('dark-mode');
document.documentElement.setAttribute('data-theme', darkMode);

const toggler = document.querySelector('#toggler');
toggler.addEventListener('change', switchTheme, false);

if (darkMode === 'night') {
  document.getElementById('toggler').checked = true;
} else {
  document.getElementById('toggler').checked = false;
}
