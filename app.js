function handleNavOpen() {
  $(".nav-overlay").css({
    transform: "scale(1)",
    transition: "all 0.5s ease",
  });
  $("#menu-icon").css({
    opacity: "0",
    pointerEvents: "none",
  });
  $("#close-icon").css({
    opacity: "1",
    transition: "all 0.5s ease 0.5s",
    pointerEvents: "all",
  });
}

function handleNavClose() {
  $("#close-icon").css({
    opacity: "0",
    pointerEvents: "none",
  });
  $(".nav-overlay").css({
    transform: "scale(0)",
    transition: "all 0.5s ease",
  });
  $("#menu-icon").css({
    opacity: "1",
    pointerEvents: "all",
  });
}
window.addEventListener("popstate", handleNavClose);
window.addEventListener("load", function () {
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  //Loading
  setTimeout(function () {
    $(".load-overlay").css("display", "none");
  }, 3000);
  //Sal Init
  sal({
    threshold: 0.3,
    once: false,
  });

  //Move to Top
  document
    .getElementById("move-to-top")
    .addEventListener("click", function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
  //Nav Bar
  menuIcon.addEventListener("click", handleNavOpen);
  closeIcon.addEventListener("click", handleNavClose);
});
