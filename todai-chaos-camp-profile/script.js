const revealItems = document.querySelectorAll(".reveal");

const avatarFitStyle = document.createElement("style");
avatarFitStyle.textContent = `
  .hero-portrait img {
    width: 178px;
    margin-top: 7px;
    border-width: 5px;
  }

  @media (max-width: 620px) {
    .hero-portrait img {
      width: 146px;
      margin-top: 7px;
      border-width: 5px;
    }
  }
`;
document.head.append(avatarFitStyle);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
