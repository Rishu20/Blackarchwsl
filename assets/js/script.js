//nav bar toggle
$(document).ready(function () {
    $(".toggle").click(function () {
      $(".toggle").toggleClass("active");
      $("nav").toggleClass("active");
    });
  });
  function toggle_close(){
    $(".toggle").toggleClass("active");
    $("nav").toggleClass("active");
  }
  // change theme
  const btn = document.querySelector(".btn-toggle");
  const theme = document.querySelector("#theme-link");
  btn.addEventListener("click", function() {
    // Swap out the URL for the different stylesheets
    if (theme.getAttribute("href") == "./assets/css/style.css") {
      theme.href = "./assets/css/style_dark.css";
    } else {
      theme.href = "./assets/css/style.css";
    }
  });
  // change icon on click
  $(document).ready(() => {
      const a = $(".btn");
    
      a.click(() => {
        if (a.text() == " ") {
          a.html('<i class="fas fa-moon"></i>');
        } else {
          a.html('<i class="fas fa-sun"></i> ');
        }
      });
    });