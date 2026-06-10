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
