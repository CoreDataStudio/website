document.addEventListener("DOMContentLoaded", () => {
    /* ANNO FOOTER */
    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  
    /* MENU MOBILE */
    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobileNav");
  
    if (hamburger && mobileNav) {
      hamburger.addEventListener("click", () => {
        const isOpen = hamburger.classList.toggle("is-open");
        mobileNav.style.display = isOpen ? "block" : "none";
      });
  
      mobileNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("is-open");
          mobileNav.style.display = "none";
        });
      });
    }
  
    /* SMOOTH SCROLL + OFFSET HEADER */
    const header = document.querySelector(".site-header");
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
    scrollLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        if (!targetId || targetId === "#") return;
  
        const targetEl = document.querySelector(targetId);
        if (!targetEl) return;
  
        e.preventDefault();
  
        const headerHeight = header ? header.offsetHeight : 0;
        const rect = targetEl.getBoundingClientRect();
        const offsetTop = window.scrollY + rect.top - headerHeight - 12;
  
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      });
    });
  
    /* EVIDENZIAZIONE LINK NAV IN BASE ALLA SEZIONE */
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
  
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = entry.target.id;
  
            navLinks.forEach((link) => {
              const href = link.getAttribute("href") || "";
              if (href === `#${id}`) {
                link.classList.add("is-active");
              } else {
                link.classList.remove("is-active");
              }
            });
          });
        },
        {
          threshold: 0.45,
        }
      );
  
      sections.forEach((section) => observer.observe(section));
    }
  
    /* SLIDER PROGETTI SEMPLICE */
    const track = document.querySelector(".projects-track");
    const cards = document.querySelectorAll(".project-card");
    const prevBtn = document.getElementById("projectsPrev");
    const nextBtn = document.getElementById("projectsNext");
  
    if (track && cards.length > 0 && prevBtn && nextBtn) {
      let currentIndex = 0;
  
      const updateSlider = () => {
        const gap = 16;
        const cardWidth = cards[0].offsetWidth + gap;
        const offset = -currentIndex * cardWidth;
        track.style.transform = `translateX(${offset}px)`;
      };
  
      prevBtn.addEventListener("click", () => {
        currentIndex = Math.max(0, currentIndex - 1);
        updateSlider();
      });
  
      nextBtn.addEventListener("click", () => {
        const maxIndex = cards.length - 1;
        currentIndex = Math.min(maxIndex, currentIndex + 1);
        updateSlider();
      });
  
      window.addEventListener("resize", updateSlider);
    }
  
    /* FORM CONTATTI (FAKE SUBMIT, SOLO FRONTEND) */
    const contactForm = document.getElementById("contactForm");
    const formSuccess = document.getElementById("formSuccess");
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        contactForm.reset();
  
        if (formSuccess) {
          formSuccess.textContent =
            "Grazie! La tua richiesta è stata inviata, ti ricontatteremo al più presto.";
        }
      });
    }
  
    /* PROGRESS BAR SCROLL */
    const progressBar = document.getElementById("scrollProgress");
    if (progressBar) {
      const updateProgress = () => {
        const scrollTop = window.scrollY || window.pageYOffset;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = `${progress}%`;
      };
  
      updateProgress();
      window.addEventListener("scroll", updateProgress);
    }
  
    /* ANIMAZIONI REVEAL SU SCROLL */
    const revealEls = document.querySelectorAll(".reveal");
  
    if ("IntersectionObserver" in window && revealEls.length > 0) {
      const revealObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.25,
          rootMargin: "0px 0px -40px 0px",
        }
      );
  
      revealEls.forEach((el) => revealObserver.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    }
  
    /* PARALLAX LEGGERO HERO ORBIT */
    const orbit = document.querySelector(".hero-orbit");
    if (orbit) {
      const parallax = () => {
        const scrolled = window.scrollY || 0;
        orbit.style.transform = `translateY(${scrolled * -0.04}px)`;
      };
      parallax();
      window.addEventListener("scroll", parallax);
    }
  });
  