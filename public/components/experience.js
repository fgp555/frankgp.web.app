const dataExperience = [
  {
    title: "Web Development",

    skills: [
      {
        name: "Modern Websites",
        description: "Professional websites designed for businesses and personal brands.",
        icon: "fa-solid fa-globe",
      },

      {
        name: "Responsive Design",
        description: "Websites optimized for mobile phones, tablets and desktop devices.",
        icon: "fa-solid fa-mobile-screen",
      },

      {
        name: "Landing Pages",
        description: "High-converting pages focused on products, services and promotions.",
        icon: "fa-solid fa-window-maximize",
      },

      {
        name: "Business Websites",
        description: "Custom business solutions with contact forms, catalogs and integrations.",
        icon: "fa-solid fa-briefcase",
      },
    ],
  },

  {
    title: "Mobile & Business Solutions",

    skills: [
      {
        name: "Android & iOS Apps",
        description: "Mobile applications for Android and iPhone with modern user experiences.",
        icon: "fa-solid fa-mobile",
      },

      {
        name: "Real-Time Systems",
        description: "Applications with instant updates, notifications and live data synchronization.",
        icon: "fa-solid fa-bolt",
      },

      {
        name: "Cloud Deployment",
        description: "Secure cloud hosting and deployment for scalable online platforms.",
        icon: "fa-solid fa-cloud",
      },

      {
        name: "API Integrations",
        description: "Connection with external services such as payments, maps and authentication systems.",
        icon: "fa-solid fa-plug",
      },
    ],
  },
];

const experienceContainer = document.getElementById("experience-container");

experienceContainer.innerHTML = dataExperience
  .map(
    (category) => `
      <div class="details-container">
        <h2 class="experience-sub-title">
          ${category.title}
        </h2>

        <div class="article-container">
          ${category.skills
            .map(
              (skill) => `
                <article>
                  <i class="${skill.icon} icon"></i>

                  <div>
                    <h3>${skill.name}</h3>
                    <p>${skill.description}</p>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    `,
  )
  .join("");
