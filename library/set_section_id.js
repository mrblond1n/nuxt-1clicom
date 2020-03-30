export default component => {
  let page_first_letter;
  if (window.location.pathname === "/auth_partner") {
    page_first_letter = "p";
  } else if (window.location.pathname === "/expert_1c") {
    page_first_letter = "c";
  } else {
    page_first_letter = window.location.pathname.charAt(1);
  }
  component.$vuetify.goTo(0, { duration: 0 });

  // document.querySelectorAll(".section").forEach((section, i) => {
  //   section.setAttribute("id", page_first_letter + i);
  //   section.children[0].setAttribute("data-aos-delay", 200);
  //   section.children[0].setAttribute("data-aos-easing", "ease-in-out");
  //   if (i % 2 === 0) {
  //     // section.children[0].setAttribute("data-aos", "fade-in");
  //   } else {
  //     // section.children[0].setAttribute("data-aos", "fade-left");
  //   }
  // });
};
