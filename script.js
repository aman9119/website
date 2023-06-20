$(document).ready(function() {
    // Make the navigation bar responsive
    $("#nav").on("click", "a", function() {
      $(this).parent().toggleClass("active");
    });
  
    // Add a search bar
    $("#search").on("input", function() {
      var query = $(this).val();
      $.ajax({
        url: "search.php",
        data: { query: query },
        success: function(response) {
          $("#results").html(response);
        }
      });
    });
  });
  
    // JavaScript code for the website

    // Get the login/signup section
    const loginSignupSection = document.querySelector('.login-signup-section');

    // Get the login form and signup form
    const loginForm = loginSignupSection.querySelector('#login-form');
    const signupForm = loginSignupSection.querySelector('#signup-form');

    // Show the login form and hide the signup form by default
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';

    // Function to switch between login and signup forms
    function showLoginForm() {
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
    }

    function showSignupForm() {
      signupForm.style.display = 'block';
      loginForm.style.display = 'none';
    }

    // Add event listeners to the login/signup links
    const loginLink = document.querySelector('#login-link');
    const signupLink = document.querySelector('#signup-link');

    loginLink.addEventListener('click', function(e) {
      e.preventDefault();
      showLoginForm();
    });

    signupLink.addEventListener('click', function(e) {
      e.preventDefault();
      showSignupForm();
    });
    
    window.addEventListener('scroll', function() {
      var header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 0);
    });