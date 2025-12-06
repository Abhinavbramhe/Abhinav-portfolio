document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.getElementById("nav-links");
  const navToggle = document.getElementById("nav-toggle");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") navLinks.classList.remove("open");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });

  emailjs.init("rawb_lECnRJ1NJ5tP");

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.textContent = "Sending...";
      status.style.color = "#9ca3af";

      emailjs.sendForm("service_9euxvdc", "template_felvmgs", this).then(
        function () {
          status.textContent = "Message sent successfully!";
          status.style.color = "#22c55e";
          form.reset();
        },
        function (error) {
          status.textContent = "Something went wrong. Please try again.";
          status.style.color = "#f97373";
          console.error(error);
        }
      );
    });
  }
});
