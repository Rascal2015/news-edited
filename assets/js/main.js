const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const TgMenu = $("#toggle-menu");
const menu = $("#category-menu");
const btnMbSearch = $("#btn-search-mb");
const searchBox = $("#search-box-mb");
const header = $("#header");
const taskbar = $("#menu");
const social = $("#social");
const artMain = $("#article-main");
const videos = $$(".video-item");
const photos = $$(".photo");
const banner = $("#banner");
const topHistory = $("#top-history");
const history = $("#history");
function show(x) {
  x.classList.toggle("active");
}

function scrollMouse(x) {


  if (window.scrollY > header.offsetHeight) {
    x.classList.add("fixed");
  } else {
    x.classList.remove("fixed");
  }
}
function remove(x) {
  if (window.scrollY > artMain.offsetHeight) {
    x.classList.remove("fixed");
  }
}
TgMenu.addEventListener("click", () => {
  show(menu);
  show(TgMenu);
});

btnMbSearch.addEventListener("click", () => {
  show(searchBox);
});

document.addEventListener("scroll", () => {
  scrollMouse(taskbar);
  if (artMain) {
    scrollMouse(social);
    remove(social);
  }
  if (topHistory) {
    if (window.scrollY > banner.offsetHeight) {
      topHistory.classList.add("fixed");
    } else {
      topHistory.classList.remove("fixed");
    }
  }
});
videos.forEach((video) => {
  let play = video.querySelector(".btn-play");
  video.addEventListener("click", (e) => {
    play.classList.toggle("active");
  });
});

if (artMain) {
  new VenoBox({
    selector: ".my-link",
    share: true,
    numeration: true,
    infinigall: true,
    spinner: "wave",
    titlePosition: "bottom",
  });
  photos.forEach((photo) => {
    let aTag = photo.querySelector("a");
    let img = photo.querySelector("img");
    let zoom = photo.querySelector(".zoom");
    let src = img.getAttribute("src");
    let titles = photo.querySelector(".title");
    let content = titles.textContent;
    aTag.setAttribute("href", src);
    aTag.setAttribute("title", content);
    zoom.addEventListener("click", () => {
      img.click();
    });
  });
}












