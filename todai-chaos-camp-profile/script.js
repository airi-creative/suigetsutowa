const revealItems = document.querySelectorAll(".reveal");

const avatarStyle = document.createElement("style");
avatarStyle.textContent = `
  .hero {
    grid-template-columns: minmax(0, 1fr) minmax(280px, 0.52fr);
  }

  .hero-portrait {
    position: relative;
    display: grid;
    width: min(100%, 320px);
    margin: 0;
    justify-items: center;
    align-self: center;
    overflow: visible;
  }

  .hero-portrait::before {
    position: absolute;
    top: 4px;
    left: 50%;
    width: 232px;
    height: 232px;
    border: 1px solid rgba(221, 214, 201, 0.72);
    border-radius: 50%;
    background:
      radial-gradient(circle at 52% 44%, rgba(255, 255, 255, 0.86) 0 42%, rgba(242, 238, 230, 0.42) 43% 68%, transparent 69%),
      radial-gradient(circle, rgba(155, 184, 194, 0.15), transparent 70%);
    content: "";
    transform: translateX(-50%);
  }

  .hero-portrait img {
    position: relative;
    z-index: 1;
    width: 172px;
    aspect-ratio: 1;
    margin-top: 32px;
    border: 7px solid rgba(255, 255, 255, 0.92);
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    box-shadow:
      0 18px 52px rgba(55, 48, 38, 0.13),
      0 0 0 1px rgba(55, 48, 38, 0.08);
  }

  .hero-portrait figcaption {
    position: relative;
    z-index: 1;
    display: grid;
    justify-items: center;
    gap: 6px;
    margin: 24px 0 0;
    color: var(--muted);
    text-align: center;
    font-size: 13px;
  }

  .hero-portrait figcaption span {
    color: var(--ink);
    font-family: Georgia, "Times New Roman", serif;
    font-size: 32px;
    line-height: 1.1;
  }

  @media (max-width: 900px) {
    .hero-portrait {
      order: -1;
      width: min(100%, 280px);
      margin: 0 auto;
    }
  }

  @media (max-width: 620px) {
    h1 {
      font-size: 34px;
      line-height: 1.32;
    }

    .hero-portrait::before {
      width: 180px;
      height: 180px;
    }

    .hero-portrait img {
      width: 118px;
      margin-top: 26px;
      border-width: 6px;
    }

    .hero-portrait figcaption {
      margin: 18px 0 0;
    }

    .hero-portrait figcaption span {
      font-size: 26px;
    }
  }
`;
document.head.append(avatarStyle);

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
