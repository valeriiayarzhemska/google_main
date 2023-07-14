const searchButton = document.getElementById('google__buttons__search');
const searchInput = document.getElementById('google__form__search');

function searchGoogle() {
  const query = searchInput.value.trim();

  if (query !== '') {
    const searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    window.location.href = searchUrl;
  }
}

searchButton.addEventListener('click', searchGoogle);
searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    searchGoogle();
  }
});

const googleLogoGoogle = document.getElementById('google__logo__image--google');
const googleLogoOddity = document.getElementById('google__logo__image--oddity');
const googleButtonsLucky = document.getElementById('google__buttons__lucky');

googleButtonsLucky.addEventListener('click', function() {
  if (googleLogoGoogle.style.display === 'none') {
    googleLogoGoogle.style.display = 'block';
    googleLogoOddity.style.display = 'none';
    googleButtonsLucky.textContent = 'Мені пощастить';
  } else {
    googleLogoGoogle.style.display = 'none';
    googleLogoOddity.style.display = 'block';
    googleButtonsLucky.textContent = 'Назад до Google';
  }
})
