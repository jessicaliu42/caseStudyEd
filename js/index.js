$(document).ready(function () {
    $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr('tabindex','-1');
              $target.focus();
            };
          });
        }
      }
    });   

    $('.nav a').click(function(){
      console.log("clicked");
      $('.nav a').removeClass("active");
      $(this).addClass("active");
  });

             var circle = document.getElementById("circle_1");
              var circle2 = document.getElementById("circle_2");
              var circle3 = document.getElementById("circle_3");
              var circle4 = document.getElementById("circle10");
              var circle5 = document.getElementById("circle11");
              var circle6 = document.getElementById("circle12");
              var circle7 = document.getElementById("circle1");
              var circle8 = document.getElementById("circle2");
              var circle9 = document.getElementById("circle3");
              var circel10 = document.getElementById("circle4");
              var circel11 = document.getElementById("circle5");
              var circel12 = document.getElementById("circle6");
              var circel13 = document.getElementById("circle14");

              function setProgress(circle, percent) {
                  var radius = circle.r.baseVal.value;
                  var circumference = radius * 2 * Math.PI;
                    circle.style.strokeDasharray = circumference;
                    const offset = (1 - percent / 100) * circumference;
                    circle.style.strokeDashoffset = offset;
                }
                
                setProgress(circle, 30);
                setProgress(circle2, 30);
                setProgress(circle3, 75);
                setProgress(circle4, 80);
                setProgress(circle5, 50);
                setProgress(circle6, 60);
                setProgress(circle7, 85);
                setProgress(circle8, 90);
                setProgress(circle9, 70);
                setProgress(circel10, 50);
                setProgress(circel11, 80);
                setProgress(circel12, 30);
                setProgress(circel13, 40);



                var myEvents = [{
                  date: '2009-2012',
                  content: 'graduated with a Bachelor of Arts in Animation from Savannah College of Art and Design'
                },{
                  date: '2014-2018',
                  content: 'worked as a front-end eingineer at CommonWealth Magazine Group in Taiwan'
                },{
                  date: '2019',
                  content: 'worked as a front-end UI developer at Otosense in CA, USA'
                },
                {
                  date: '2020',
                  content: 'taught HTML, CSS, and JS as online instructor at Nucamp'
                },
                {
                  date: '2021-2022',
                  content: 'graduated with a certication in UX/UI from Georgia Tech'
                }
            ];
            $('#my-timeline').roadmap(myEvents);

});