import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Liquid Courage"],
    typeSpeed: 220,
    loop: true
  });
}

export { loadDynamicBannerText };



var typed = new Typed('.element', {
  strings: ["First sentence.", "Second sentence."],
  typeSpeed: 30
});
