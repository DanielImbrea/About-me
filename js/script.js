var $window = $(window);

// An event listener that listen for scrolling
$window.on("scroll resize", function () {
  // when the user scrolled select what an element to check if the user reached there
  var $animation_elements = $(".skills");
  checkIfInView(
    $animation_elements,
    function () {
      // if the user is already on this part trigger the animation
      setTimeout(() => {
        $(".skill-per").each(function () {
          var $this = $(this);
          var per = $this.attr("per");
          $this.css("width", per + "%");
        });
      }, 500);
    },
    function () {
      $(".skill-per").each(function () {
        var $this = $(this);
        $this.css("width", 0 + "%");
      });
    }
  );
});
$window.trigger("scroll");

function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  //Toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    //Animate Links
    navLinks.forEach((link, index) => {
      // $(nav).css("background-color", "#2b81cc");
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          1}s`;
      }
    });

    burger.classList.toggle("toggle");
  });
}
navSlide();

var $registrationForm = $("#registration");
if ($registrationForm.length) {
  $registrationForm.validate({
    rules: {
      username: {
        required: true,
        alphanumeric: true,
      },
      email: {
        required: true,
        customEmail: true,
      },
      phone: {
        required: true,
        number: true,
        phoneNumberLength: true,
        phoneNumberPrefix: true,
      },
      password: {
        required: true,
        minlength: 4,
      },
      confirm: {
        required: true,
        equalTo: "#password",
      },
      fname: {
        required: true,
        noSpace: true,
      },
      lname: {
        required: true,
        noSpace: true,
      },
      gender: {
        required: true,
      },
      hobbies: {
        required: true,
      },
      country: {
        required: true,
      },
      address: {
        required: true,
      },
    },
    messages: {
      username: {
        required: "Please enter username!",
      },
      email: {
        required: "Please enter email!",
        email: "Please enter valid email!",
      },
      password: {
        required: "Please enter password!",
      },
      confirm: {
        required: "Please enter confirm password!",
        equalTo: "Please enter same password!",
      },
      fname: {
        required: "Please enter first name!",
      },
      lname: {
        required: "Please enter last name!",
      },
      country: {
        required: "Please select country!",
      },
      address: {
        required: "Please enter address!",
      },
    },
    errorPlacement: function (error, element) {
      if (element.is(":radio")) {
        error.appendTo(element.parents(".gender"));
      } else if (element.is(":checkbox")) {
        error.appendTo(element.parents(".hobbies"));
      } else {
        error.insertAfter(element);
      }
    },
  });
}



