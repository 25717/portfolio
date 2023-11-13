function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

var maintitle = document.getElementById("main-title");

// Add the floating effect
maintitle.classList.add("main-title");


// document.addEventListener('DOMContentLoaded', function() {
//     window.addEventListener('scroll', function() {
//         let scrollPosition = window.scrollY;
//         let titleElement = document.getElementById('main-title');
//         let containerElement = document.getElementById('parallax-container');
//         let containerHeight = containerElement.offsetHeight;
//         let threshold = 10; // Adjust the threshold as needed

//         if (containerHeight < threshold) {
//             containerElement.classList.add('hidden');
//         } else {
//             containerElement.classList.remove('hidden');
//         }
//         let titleText = titleElement.innerText;
//         let modifiedText = titleText.replace('O', `<span style="font-size:${10 + scrollPosition/4}rem;">O</span>`);
//         titleElement.innerHTML = modifiedText;
//     });

// });

$(document).ready(function() {
    // Smooth scrolling for anchor links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, {
                duration: 800,
                complete: function() {
                    window.location.hash = hash;
                }
            });
        }
    });

    // Reveal content on scroll
    $(window).scroll(function() {
        $(".reveal").each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight + 200) {
                //$(this).addClass("visible");
                //var delay = 800;
                var element = $(this);
                
                setTimeout(function() {
                element.addClass("visible");
                });
            }
        });
    });
});

$(document).ready(function() {
    $(".reveal-section").css({
      opacity: 1,
      transform: "translateY(0)"
    });
  });