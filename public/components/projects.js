const dataProject = [
  {
    title: "Mix&Match Outfit Planner",
    description: "Mobile and web application for outfit planning and virtual wardrobe management.",
    image: "https://i.postimg.cc/mDGRRPrT/ivanageraldine-com.webp",
    demo: "https://ivanageraldine.com/",
  },
  {
    title: "PetuLap Catalog Website",
    description: "Product catalog website for laptop sales with contact information and online product showcase.",
    image: "https://i.postimg.cc/ZnMMbQLq/catalogo-petulap.webp",
    demo: "https://catalogo-web.github.io/catalogo-petulap/",
  },
  {
    title: "Transpaservic Mobile App",
    description:
      "Ticket management mobile application with request approvals, notifications and workflow organization.",
    image: "https://i.postimg.cc/nLSRY565/transpaservic-com-co.webp",
    demo: "https://play.google.com/store/apps/details?id=com.fgp555.transpaservic",
  },
  {
    title: "SUMA MARKA Catalog Website",
    description:
      "Traditional Peruvian clothing and accessories catalog website featuring shoes, hats, mantos, chalinas and handcrafted products with WhatsApp contact integration.",
    image: "https://i.postimg.cc/nhPW72CQ/suma-marka-web-app.webp",
    demo: "https://suma-marka.web.app",
  },
];

const projectsContainer = document.getElementById("projects-container");

projectsContainer.innerHTML = dataProject
  .map(
    (project) => `
      <div class="details-container color-container">
        <div class="article-container">
          <img
            src="${project.image}"
            alt="${project.title}"
            class="project-img"
          />
        </div>

        <h2 class="experience-sub-title project-title">
          ${project.title}
        </h2>

        <p class="project-description">
          ${project.description}
        </p>

        <div class="btn-container">
          <button
            class="btn btn-color-2 project-btn"
            onclick="window.open('${project.demo}', '_blank')"
          >
            Live Demo
          </button>
        </div>
      </div>
    `,
  )
  .join("");
