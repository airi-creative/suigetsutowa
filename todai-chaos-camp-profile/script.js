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
      background: rgba(251, 250, 246, 0.96);
    }

    .mode-card img {
      width: 100%;
      aspect-ratio: 2 / 1;
      min-height: auto;
      border-width: 0 0 1px;
      border-radius: 8px 8px 0 0;
      background: #f7f2ea;
      object-fit: contain;
    }

    .mode-card div {
      position: relative;
      z-index: 2;
      width: calc(100% - 32px);
      min-height: 0;
      margin: 0 auto 16px;
      padding: 16px;
      border: 1px solid rgba(221, 214, 201, 0.72);
      border-top: 0;
      border-radius: 0 0 6px 6px;
      background: rgba(251, 250, 246, 0.98);
      box-shadow: none;
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
