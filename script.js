// ✅ Typed.js animation
const typed = new Typed(".multiple-text", {
  strings: ["Full Stack Developer", "Web Designer", "Problem Solver", "Tech Enthusiast"],
  typeSpeed: 90,
  backSpeed: 60,
  backDelay: 1500,
  loop: true,
});

document.addEventListener("DOMContentLoaded", () => {
  // === Button & Section Animation ===
  const btn = document.getElementById("moreBtn");
  const extraSections = document.getElementById("extra-sections");
  const navbar = document.querySelector(".navbar");
  const footer = document.querySelector(".footer");

  // Hide sections initially
  extraSections.classList.add("hidden");

  btn?.addEventListener("click", () => {
    extraSections.classList.remove("hidden");
    extraSections.classList.add("fall-in");

    // Show the navbar when 'More About Me' is clicked
    navbar.classList.remove("hidden");
    navbar.classList.add("flex");
    navbar.classList.add("navbar-slide-in");

    footer.classList.add("fade-in");

    setTimeout(() => {
      document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  });

  // === PIE CHARTS ===
  const pieCharts = document.querySelectorAll('.pie-chart');

  const animatePieCharts = () => {
    pieCharts.forEach(chart => {
      const circle = chart.querySelector('circle');
      const percent = chart.getAttribute('data-percent');
      const offset = 283 - (283 * percent / 100);
      circle.style.strokeDashoffset = offset;
    });
  };

  // === SCROLL OBSERVER for pie charts & animated elements ===
  const animatedItems = document.querySelectorAll('.animated-fade, .animated-slide-up');
  const scrollObserver1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.classList.contains('pie-chart')) {
          animatePieCharts();
        }
      }
    });
  }, { threshold: 0.4 });

  animatedItems.forEach(el => scrollObserver1.observe(el));
  pieCharts.forEach(chart => scrollObserver1.observe(chart));

  // === SKILL CHART ===
  const skillCanvas = document.getElementById('skillChart');
  if (skillCanvas) {
    const ctx = skillCanvas.getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'Python'],
        datasets: [{
          label: 'Skill Level',
          data: [95, 90, 85, 80],
          backgroundColor: ['#00f7ff', '#00d4ff', '#00aaff', '#0088cc'],
          borderWidth: 2
        }]
      },
      options: {
        plugins: {
          legend: { display: true, position: 'bottom' }
        },
        cutout: '65%',
      }
    });
  }

  // === Vanilla Tilt for project cards ===
  VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
  });

  // === SCROLL OBSERVER for project cards ===
  const scrollItems = document.querySelectorAll('.animate-on-scroll');
  const scrollObserver2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  scrollItems.forEach(item => scrollObserver2.observe(item));
});
VanillaTilt.init(document.querySelectorAll(".creative-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
});
const contactSection = document.querySelector('.contact-section');

const contactObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

contactObserver.observe(contactSection);
function toggleMenu() {
  const nav = document.getElementById('navbar');
  if (nav.classList.contains('hidden')) {
    nav.classList.remove('hidden');
    nav.classList.add('flex');
  } else {
    nav.classList.add('hidden');
    nav.classList.remove('flex');
  }
}

