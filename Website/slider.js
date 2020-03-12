var slideshow = {
  delay: 3000,
  container: null,
  slides: [],
  current: 0,
  timer: null,
  start: function () {
    slideshow.container = document.getElementById("slides");
    let all = slideshow.container.getElementsByTagName("img");
    if (all.length>0) {
      for (let slide of all) {
        slideshow.slides.push({
          src : slide.src,
        });
      }
      slideshow.draw();
    }
  },
  draw: function () {
    var next = document.createElement("img");
    next.src = slideshow.slides[slideshow.current].src;
    next.classList.add("portpanda");
    slideshow.container.innerHTML = "";
    slideshow.container.appendChild(next);
    setTimeout(function(){
      next.classList.remove("portpanda");
    }, 1);
    slideshow.timer = setTimeout(slideshow.next, slideshow.delay);
  },
  next: function () {
    if (slideshow.timer != null) {
      clearTimeout(slideshow.timer);
      slideshow.timer = null;
	}
    slideshow.current++;
    if (slideshow.current == slideshow.slides.length) {
      slideshow.current = 0;
    }
    slideshow.draw();
  },
  prev: function () {
    if (slideshow.timer != null) {
      clearTimeout(slideshow.timer);
      slideshow.timer = null;
    }
    slideshow.current--;
    if (slideshow.current <0 ) {
      slideshow.current = slideshow.slides.length - 1;
    }
    slideshow.draw();
  }
};
window.addEventListener("load", slideshow.start);
