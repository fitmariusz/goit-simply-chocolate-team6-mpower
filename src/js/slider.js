var splide = new Splide('#slider1', {
  perPage: 4,
  focus: 0,
  arrows: false,
  wheel: true,
  breakpoints: {
    1199: {
      perPage: 2.5,
    },
    767: {
      perPage: 1,
    },
  },
});

splide.mount();
