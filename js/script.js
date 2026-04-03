document.addEventListener("DOMContentLoaded", function () {
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (typeof tsParticles !== "undefined") {
    tsParticles.load("tsparticles", {
      background: {
        color: "transparent"
      },
      fpsLimit: 60,
      fullScreen: {
        enable: false,
        zIndex: 0
      },
      particles: {
        number: {
          value: 58,
          density: {
            enable: true,
            area: 900
          }
        },
        color: {
          value: "#ffffff"
        },
        links: {
          enable: true,
          distance: 130,
          color: "#ffffff",
          opacity: 0.12,
          width: 1
        },
        move: {
          enable: !prefersReducedMotion,
          speed: 0.42,
          direction: "none",
          random: true,
          outModes: {
            default: "out"
          }
        },
        opacity: {
          value: {
            min: 0.25,
            max: 0.68
          }
        },
        size: {
          value: {
            min: 1,
            max: 2.8
          }
        }
      },
      detectRetina: true,
      interactivity: {
        events: {
          onHover: {
            enable: false
          },
          onClick: {
            enable: false
          }
        }
      }
    });
  }

  var revealElements = document.querySelectorAll(".reveal");
  var navLinks = document.querySelectorAll(".site-nav a");
  var sections = document.querySelectorAll("main section[id]");

  if (revealElements.length > 0) {
    if (prefersReducedMotion) {
      revealElements.forEach(function (el) {
        el.classList.add("is-visible");
      });
    } else {
      var revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.18,
          rootMargin: "0px 0px -8% 0px"
        }
      );

      revealElements.forEach(function (el) {
        revealObserver.observe(el);
      });
    }
  }

  if (sections.length > 0 && navLinks.length > 0) {
    var linkById = {};
    navLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        linkById[href.slice(1)] = link;
      }
    });

    var activeSectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          var id = entry.target.getAttribute("id");
          if (!id || !linkById[id]) {
            return;
          }

          navLinks.forEach(function (link) {
            link.removeAttribute("aria-current");
          });

          linkById[id].setAttribute("aria-current", "true");
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.01
      }
    );

    sections.forEach(function (section) {
      activeSectionObserver.observe(section);
    });
  }
});
