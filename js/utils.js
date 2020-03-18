// Elements e la ce element din pagina vreau sa apara actiunea (animatia)
// action este actiunea
//  unmountAction e atunci cand nu se mai vede elementul cand userul da scroll mai jos (sau mai sus) si nu se mai vede, atunci se apeleaza unmountAction

function checkIfInView(elements, action, unmountAction) {
  // window height
  var window_height = $window.height();
  // current postion top offset
  var window_top_position = $window.scrollTop();
  // current position
  var window_bottom_position = window_top_position + window_height;

  $.each(elements, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;

    // element bottom position
    var element_bottom_position = element_top_position + element_height;

    // check to see if this current container is within viewport
    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      // if true invoke the callback function
      action();
    } else {
      // if this current container is not within viewport
      unmountAction();
    }
  });
}

// form validation
$.validator.addMethod(
  "noSpace",
  function (value, element) {
    return value == "" || value.trim().length != 0;
  },
  "No space please and don't leave it empty"
);

$.validator.addMethod(
  "customEmail",
  function (value, element) {
    return (
      this.optional(element) ||
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        value
      )
    );
  },
  "Please enter valid email address!"
);

$.validator.addMethod(
  "alphanumeric",
  function (value, element) {
    return this.optional(element) || /^\w+$/i.test(value);
  },
  "Letters, numbers, and underscores only please"
);

$.validator.addMethod(
  "alphanumeric",
  function (value, element) {
    return this.optional(element) || /^\w+$/i.test(value);
  },
  "Letters, numbers, and underscores only please"
);

$.validator.addMethod(
  "phoneNumberLength",
  function (value, element) {
    return this.optional(element) || value.length === 10;
  },
  "Phone number length must be 10"
);

$.validator.addMethod(
  "phoneNumberPrefix",
  function (value, element) {
    return this.optional(element) || value.slice(0, 2) === "07";
  },
  "Phone number must start with 07"
);
$.validator.addMethod(
  "fornumber", function(value, element) {
    return this.optional(element) || value.length ===10, value.slice(0,2) === "07"
  }
)