const imagePathMap = new Map([
  ["./public/images/portrait.jpg", "./public/1.webp"],
  ["./public/images/1.jpg", "./public/1.webp"],
  ["./public/images/go-board-clean.jpg", "./public/go-board-clean.webp"],
  ["./public/images/go-board.png", "./public/go-board-clean.webp"],
  ["./public/images/go-cuddle.jpg", "./public/go-cuddle.webp"],
  ["./public/images/go-board-cuddle_mode-01.png", "./public/go-cuddle.webp"],
  ["./public/images/go-soulsync.jpg", "./public/go-soulsync.webp"],
  ["./public/images/go-board-soulsync_mode-02.png", "./public/go-soulsync.webp"],
  ["./public/images/go-zenink.jpg", "./public/go-zenink.webp"],
  ["./public/images/go-board-menink_mode-01.png", "./public/go-zenink.webp"],
  ["./public/images/calligraphy-coach.jpg", "./public/calligraphy-coach.webp"],
  ["./public/images/syodo-01.png", "./public/calligraphy-coach.webp"],
  ["./public/images/tele-haptic.jpg", "./public/tele-haptic.webp"],
  ["./public/images/syodo-02.png", "./public/tele-haptic.webp"],
]);

document.querySelectorAll("img").forEach((image) => {
  const nextSrc = imagePathMap.get(image.getAttribute("src"));

  if (nextSrc) {
    image.setAttribute("src", nextSrc);
  }
});

const runtimeStyle = document.createElement("style");
runtimeStyle.textContent = `
  .hero-portrait img {
    width: 178px;
    margin-top: 7px;
    border-width: 5px;
  }

  .mode-card p {
    color: #3f3a32;
    font-weight: 500;
    line-height: 1.75;
  }

  @media (max-width: 620px) {
    .hero-portrait img {
      width: 146px;
      margin-top: 7px;
      border-width: 5px;
    }

    .mode-card {
      display: flex !important;
      flex-direction: column !important;
      background: rgba(251, 250, 246, 0.96);
    }

    .mode-card img {
      display: block !important;
      width: 100% !important;
      height: auto !important;
      min-height: 0 !important;
      aspect-ratio: auto !important;
      border-width: 0 0 1px !important;
      border-radius: 8px 8px 0 0 !important;
      background: #f7f2ea;
      object-fit: cover !important;
    }

    .mode-card div {
      position: static !important;
      z-index: 1;
      width: 100% !important;
      min-height: 0 !important;
      margin: 0 !important;
      padding: 18px 18px 20px !important;
      border: 0 !important;
      border-radius: 0 !important;
      background: #fbfaf6 !important;
      box-shadow: none !important;
    }

    .mode-card span {
      color: #9a672c;
      font-size: 16px;
      font-weight: 600;
    }

    .mode-card h4 {
      color: #1f1f1b;
      font-size: 22px;
      font-weight: 500;
    }

    .mode-card p {
      color: #343029;
      font-size: 14px;
    }
  }
`;
document.head.append(runtimeStyle);

const revealItems = document.querySelectorAll(".reveal");

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
