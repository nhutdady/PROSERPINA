const audio = document.getElementById("audio");
const langSwitch = document.getElementById("langSwitch"); 
const btn = document.getElementById("musicBtn");
const viBtn = document.getElementById("viBtn");
const enBtn = document.getElementById("enBtn");

let playing = true;
let currentLang = "vi";

const content = {
  vi: {
    name: "Minh Nhựt",
   subtitle: "tâm hồn yên tĩnh, trái tim tò mò 🌿",

    home: "⌂ Trang chủ",
    aboutNav: "♧ Giới thiệu",
    journeyNav: "♤ Hành trình",
    loveNav: "♡ Điều tui thích",
    dreamsNav: "♫ Ước mơ",
    galleryNav: "▧ Bộ sưu tập",
    contactNav: "✉ Liên hệ",

musicPlaying: "⏸ Đang phát<br><span>Nơi Này Có Anh</span>",
musicPaused: "▶ Đã dừng<br><span>Bấm để phát</span>",

    aboutLabel: "GIỚI THIỆU 🌿",
    aboutTitle: "Một chút về tui",
    aboutText:
      "Tui thích những điều nhẹ nhàng: mùi cafe, trời sau cơn mưa, những góc nhỏ yên tĩnh và cảm giác được khám phá điều mới. Ngoài công nghệ, tui cũng thích những thứ có cảm giác “chill” và mang lại sự bình yên.",
    signature: "Rất vui được gặp bạn!",

    traitsTitle: "TUI LÀ KIỂU NGƯỜI...",
    trait1: "🌿 thích<br>yên tĩnh",
    trait2: "☁ hay suy nghĩ<br>nhiều",
    trait3: "💻 tò mò<br>công nghệ",
    trait4: "🌼 thích những thứ<br>dễ thương",
    trait5: "♫ có tâm hồn<br>mộng mơ",

    journeyLabel: "HÀNH TRÌNH 🌿",
    journeyTitle: "Hành trình của tui",
    year1: "Bắt đầu học lập trình",
    year2: "Làm website đầu tiên",
    year3: "Theo đuổi hướng Tester & UI",

    loveLabel: "NHỮNG ĐIỀU TUI THÍCH 🌿",
    loveList:
      "<li>☁ Trời xanh</li><li>🌿 Lá non</li><li>🌸 Hoa anh đào</li><li>💙 Cẩm tú cầu</li><li>☕ Cafe chill</li><li>🌧 Ngắm mưa</li>",

    placesLabel: "NHỮNG NƠI TUI MUỐN ĐẾN 🌿",
    japan: "Nhật Bản<br><small>mùa hoa anh đào</small>",
    korea: "Hàn Quốc<br><small>mùa thu</small>",
    swiss: "Thụy Sĩ",

    entertainmentLabel: "GÓC GIẢI TRÍ 🌿",
    musicText: "♫ Lofi • Indie • Piano chill",
    movieText: "🎬 Fantasy • Anime<br>Healing movie",

    quote: "Chậm thôi,<br>nhưng đừng bao giờ dừng lại. ♡",

    futureLabel: "ĐIỀU TUI MUỐN TRONG TƯƠNG LAI 🌿",
    future1: "✈<br>Đi du lịch nhiều nơi<br>khám phá thế giới",
    future2: "💻<br>Làm điều mình thích<br>và không ngừng học hỏi",
    future3: "🌱<br>Có một cuộc sống<br>bình yên",
    future4: "♡<br>Tạo ra những thứ<br>đẹp đẽ trên Internet",

    connectLabel: "KẾT NỐI 🌿",
    connectTitle: "Connect với tui nhé!",
    facebook: "Facebook",
    github: "GitHub"
  },

  en: {
    name: "Minh Nhut",
    subtitle: "quiet mind, curious soul 🌿",

    home: "⌂ Home",
    aboutNav: "♧ About",
    journeyNav: "♤ Journey",
    loveNav: "♡ Things I Love",
    dreamsNav: "♫ Dreams",
    galleryNav: "▧ Gallery",
    contactNav: "✉ Contact",

    musicPlaying: "⏸ Now Playing<br><span>There's Someone Here For You</span>",
musicPaused: "▶ Music Paused<br><span>Click to play</span>",

    aboutLabel: "ABOUT ME 🌿",
    aboutTitle: "A little about me",
    aboutText:
      "I love gentle things: the smell of coffee, the sky after rain, quiet little corners, and the feeling of discovering something new. Besides technology, I also enjoy things that feel chill and peaceful.",
    signature: "Nice to meet you!",

    traitsTitle: "I AM THE TYPE OF PERSON...",
    trait1: "🌿 loves<br>quiet places",
    trait2: "☁ thinks<br>a lot",
    trait3: "💻 curious about<br>technology",
    trait4: "🌼 loves<br>cute things",
    trait5: "♫ has a<br>dreamy soul",

    journeyLabel: "JOURNEY 🌿",
    journeyTitle: "My journey",
    year1: "Started learning programming",
    year2: "Built my first website",
    year3: "Following Tester & UI path",

    loveLabel: "THINGS I LOVE 🌿",
    loveList:
      "<li>☁ Blue sky</li><li>🌿 Young leaves</li><li>🌸 Cherry blossoms</li><li>💙 Hydrangeas</li><li>☕ Chill coffee</li><li>🌧 Watching the rain</li>",

    placesLabel: "PLACES I WANT TO VISIT 🌿",
    japan: "Japan<br><small>cherry blossom season</small>",
    korea: "Korea<br><small>autumn season</small>",
    swiss: "Switzerland",

    entertainmentLabel: "ENTERTAINMENT CORNER 🌿",
    musicText: "♫ Lofi • Indie • Chill piano",
    movieText: "🎬 Fantasy • Anime<br>Healing movies",

    quote: "Take it slow,<br>but never stop. ♡",

    futureLabel: "THINGS I WANT IN THE FUTURE 🌿",
    future1: "✈<br>Travel to many places<br>and explore the world",
    future2: "💻<br>Do what I love<br>and keep learning",
    future3: "🌱<br>Have a peaceful<br>life",
    future4: "♡<br>Create beautiful things<br>on the Internet",

    connectLabel: "LET'S CONNECT 🌿",
    connectTitle: "Let's connect!",
    facebook: "Facebook",
    github: "GitHub"
  }
};

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = value;
}

function changeLanguage(lang) {
  currentLang = lang;
  const t = content[lang];

  setText(".sidebar h2", t.name);
  setText(".hero h1", t.name);
  setText(".hero p", t.subtitle);

  setText('nav a[href="#home"]', t.home);
  setText('nav a[href="#about"]', t.aboutNav);
  setText('nav a[href="#journey"]', t.journeyNav);
  setText('nav a[href="#love"]', t.loveNav);
  setText('nav a[href="#dreams"]', t.dreamsNav);
  setText('nav a[href="#gallery"]', t.galleryNav);
  setText('nav a[href="#contact"]', t.contactNav);

  btn.innerHTML = playing ? t.musicPlaying : t.musicPaused;

  setText("#about .label", t.aboutLabel);
  setText("#about h2", t.aboutTitle);
  setText("#about p:not(.signature)", t.aboutText);
  setText(".signature", t.signature);

  setText(".traits > span", t.traitsTitle);
  setText(".traits .trait:nth-of-type(1)", t.trait1);
  setText(".traits .trait:nth-of-type(2)", t.trait2);
  setText(".traits .trait:nth-of-type(3)", t.trait3);
  setText(".traits .trait:nth-of-type(4)", t.trait4);
  setText(".traits .trait:nth-of-type(5)", t.trait5);

  setText("#journey .label", t.journeyLabel);
  setText("#journey h2", t.journeyTitle);
  setText(".timeline div:nth-child(1) p", t.year1);
  setText(".timeline div:nth-child(2) p", t.year2);
  setText(".timeline div:nth-child(3) p", t.year3);

  setText("#love > div:nth-child(1) .label", t.loveLabel);
  setText("#love ul", t.loveList);

  setText("#gallery .label", t.placesLabel);
  setText(".cards article:nth-child(1) p", t.japan);
  setText(".cards article:nth-child(2) p", t.korea);
  setText(".cards article:nth-child(3) p", t.swiss);

  setText("#love > div:nth-child(3) .label", t.entertainmentLabel);
  setText("#love > div:nth-child(3) p:nth-of-type(1)", t.musicText);
  setText("#love > div:nth-child(3) p:nth-of-type(2)", t.movieText);

  setText(".note", t.quote);

  setText(".future .label", t.futureLabel);
  setText(".future-grid p:nth-child(1)", t.future1);
  setText(".future-grid p:nth-child(2)", t.future2);
  setText(".future-grid p:nth-child(3)", t.future3);
  setText(".future-grid p:nth-child(4)", t.future4);

  setText("footer .label", t.connectLabel);
  setText("footer h2", t.connectTitle);
  setText("footer .btn:nth-child(1)", t.facebook);
  setText("footer .btn:nth-child(2)", t.github);

  viBtn.classList.toggle("active-lang", lang === "vi");
  enBtn.classList.toggle("active-lang", lang === "en");
  langSwitch.classList.toggle("en", lang === "en");
  btn.innerHTML = playing
  ? content[currentLang].musicPlaying
  : content[currentLang].musicPaused;
  setText(".hero p", t.subtitle);
}

btn.addEventListener("click", () => {
  playing = !playing;

  if (playing) {
    audio.play();
  } else {
    audio.pause();
  }

  btn.innerHTML = playing
    ? content[currentLang].musicPlaying
    : content[currentLang].musicPaused;
});

viBtn.addEventListener("click", () => changeLanguage("vi"));
enBtn.addEventListener("click", () => changeLanguage("en"));

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll("nav a").forEach((a) => {
      a.classList.remove("active");
    });

    link.classList.add("active");
  });
});

changeLanguage("vi");