let activeTab = 'home'; 

const navLinks = document.querySelectorAll('nav span');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});


navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const selectedTab = link.dataset.tab;
    activeTab = selectedTab;

    navLinks.forEach(el => el.classList.remove('active'));
    link.classList.add('active');

    const section = document.getElementById(selectedTab);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    nav.classList.remove('active');
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
});

document.querySelectorAll('.animation').forEach(el => observer.observe(el));
