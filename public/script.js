const mobileMenu = document.querySelector('#mobileMenu');
const mobileMenuBtn = document.querySelector('#mobileMenuBtn');

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('-translate-y-full');
  document.body.classList.toggle('overflow-hidden');

  const isOpen = !mobileMenu.classList.contains('-translate-y-full');
  document.querySelectorAll('.menuText, .hamburger').forEach((element) => {
    element.classList.toggle('hidden', isOpen);
  });
  document.querySelectorAll('.closeMenuText, .close').forEach((element) => {
    element.classList.toggle('hidden', !isOpen);
  });
};

mobileMenuBtn.addEventListener('click', toggleMobileMenu);

document.querySelectorAll('#mobileMenu ul a').forEach((link) => {
  link.addEventListener('click', toggleMobileMenu);
});
