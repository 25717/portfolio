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




  /**********Scroll to the top**********/

  document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopButton = document.getElementById("scrollToTop");

    // Add a click event listener to the image
    scrollToTopButton.addEventListener("click", function () {
        // Scroll to the top of the page smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
 });




  /**********GSAP******* */

  gsap.set('.cursor',{xPercent:-50, yPercent: -50})

  let cursor = document.querySelector('.cursor')
  let hand = document.querySelector('.hand')
  let title = document.querySelector('h1')

  let mouseX;
  let mouseY;

  window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, 0.1, {x: mouseX, y:mouseY})
  })

  title.addEventListener('mouseenter', () => {
      gsap.to(hand, 1, {
          scale: 1,
          opacity: 1,
          top: '-400px',
          left: '-150px',
          rotate: 0,
          ease: Elastic.easeOut.config(1, 0.3)
      })
  })

  title.addEventListener('mousemove', () => {
      gsap.to(hand, 1, {
          x: mouseX,
          y: mouseY
      })
  })

  title.addEventListener('mouseleave', () => {
      gsap.to(hand, 0.2, {
          scale: 0,
          opacity: 0,
          top: '10',
          left: '40',
          rotate: 45,
      })
  })


  /******************************** */

  const words = ["Sanu", "சானு", "शानू", "සනු", "サヌ", "萨努", "سانو", "Сану", "사누"];
    let displayedWords = 0;

    function getRandomPosition() {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      return { x, y };
    }

    function createWordElement(word) {
      const wordElement = document.createElement("div");
      wordElement.className = "word";
      wordElement.textContent = word;
      document.getElementById("background-section").appendChild(wordElement);

      // Triggering reflow to apply the initial opacity setting
      wordElement.offsetHeight;

      wordElement.style.opacity = 1; // Set opacity to 1 for smooth appearance
      return wordElement;
    }

    function animateWords() {
      if (displayedWords < 10) {
        const word = words[Math.floor(Math.random() * words.length)];
        const wordElement = createWordElement(word);
        const position = getRandomPosition();
        wordElement.style.left = `${position.x}px`;
        wordElement.style.top = `${position.y}px`;

        setTimeout(() => {
          wordElement.style.opacity = 0;
        }, 2000);

        setTimeout(() => {
          document.getElementById("background-section").removeChild(wordElement);
          displayedWords--;
          animateWords();
        }, 3000);

        displayedWords++;
      }
    }

    function startAnimation() {
      animateWords();
      setTimeout(() => {
        startAnimation();
      }, 4000);
    }

    startAnimation();