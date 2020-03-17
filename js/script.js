function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll('.nav-links li');
  //Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')
    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 1}s`;
      }
    })

    burger.classList.toggle("toggle");
  })
}
navSlide();

// skills

$(function () {
  $('.skill-per').each(function () {

    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width", per + "%");

  });

});

// form validation
$.validator.addMethod("noSpace", function (value, element) {
  return value == '' || value.trim().length != 0;
}, "No space please and don't leave it empty");
$.validator.addMethod("customEmail", function (value, element) {
  return this.optional(element) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
}, "Please enter valid email address!");
$.validator.addMethod("alphanumeric", function (value, element) {
  return this.optional(element) || /^\w+$/i.test(value);
}, "Letters, numbers, and underscores only please");
var $registrationForm = $('#registration');
if ($registrationForm.length) {
  $registrationForm.validate({
    rules: {
      username: {
        required: true,
        alphanumeric: true
      },
      email: {
        required: true,
        customEmail: true
      },
      password: {
        required: true,
        minlength: 4
      },
      confirm: {
        required: true,
        equalTo: '#password'
      },
      fname: {
        required: true,
        noSpace: true
      },
      lname: {
        required: true,
        noSpace: true
      },
      gender: {
        required: true
      },
      hobbies: {
        required: true
      },
      country: {
        required: true
      },
      address: {
        required: true
      }
    },
    messages: {
      username: {
        required: 'Please enter username!'
      },
      email: {
        required: 'Please enter email!',
        email: 'Please enter valid email!'
      },
      password: {
        required: 'Please enter password!'
      },
      confirm: {
        required: 'Please enter confirm password!',
        equalTo: 'Please enter same password!'
      },
      fname: {
        required: 'Please enter first name!'
      },
      lname: {
        required: 'Please enter last name!'
      },
      country: {
        required: 'Please select country!'
      },
      address: {
        required: 'Please enter address!'
      }
    },
    errorPlacement: function (error, element) {
      if (element.is(":radio")) {
        error.appendTo(element.parents('.gender'));
      } else if (element.is(":checkbox")) {
        error.appendTo(element.parents('.hobbies'));
      } else {
        error.insertAfter(element);
      }

    }
  });
}