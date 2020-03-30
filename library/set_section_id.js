export default component => {
  component.$vuetify.goTo(0, { duration: 0 });

  document.querySelectorAll(".section").forEach((section, index) => {
    section.setAttribute("id", `section_${index}`);
    // section.children[0].setAttribute("data-aos-delay", 200);
    // section.children[0].setAttribute("data-aos-easing", "ease-in-out");
    // if (i % 2 === 0) {
    //   section.children[0].setAttribute("data-aos", "fade-in");
    // } else {
    //   section.children[0].setAttribute("data-aos", "fade-left");
    // }
  });
};
