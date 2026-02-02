// tsparticles zo stranky https://particles.js.org/
// V ostatnych fileoch je vysvetlenie

document.addEventListener('DOMContentLoaded', function() {
  tsParticles.load({
    id: "tsparticles",
    options: {
      background: {
        color: "#000000ff"
      },
      particles: {
        number: {
          value: 80, 
        },
        links: {
          enable: true,
          distance: 150, 
          color: "#ffffffff"
        },
        move: {
          enable: true,
          speed: 1,
        },
      }
    },
  });
});
