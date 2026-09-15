document.getElementById("cta-btn").addEventListener("click", function () {
  alert("Welcome to StudyHub!");
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("open");
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thanks! Your message has been sent.");
  event.target.reset();
});
