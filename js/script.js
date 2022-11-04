const burger = document.querySelector('.burger');
const shortMenu = document.getElementById('mainNav2')
burger.addEventListener('click', function () {
  burger.classList.toggle("active");
  shortMenu.classList.toggle('active')
});

