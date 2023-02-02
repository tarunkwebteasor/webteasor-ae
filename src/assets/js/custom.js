var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

window.addEventListener("resize", function () {
           "use strict";
           window.location.reload();
         });
         
         document.addEventListener("DOMContentLoaded", function () {
           /////// Prevent closing from click inside dropdown
           document.querySelectorAll(".dropdown-menu").forEach(function (element) {
             element.addEventListener("click", function (e) {
               e.stopPropagation();
             });
           });
         
           // make it as accordion for smaller screens
           if (window.innerWidth < 992) {
             // close all inner dropdowns when parent is closed
             document
               .querySelectorAll(".navbar .dropdown")
               .forEach(function (everydropdown) {
                 everydropdown.addEventListener("hidden.bs.dropdown", function () {
                   // after dropdown is hidden, then find all submenus
                   this.querySelectorAll(".megasubmenu").forEach(function (
                     everysubmenu
                   ) {
                     // hide every submenu as well
                     everysubmenu.style.display = "none";
                   });
                 });
               });
         
             document
               .querySelectorAll(".has-megasubmenu a")
               .forEach(function (element) {
                 element.addEventListener("click", function (e) {
                   let nextEl = this.nextElementSibling;
                   if (nextEl && nextEl.classList.contains("megasubmenu")) {
                     // prevent opening link if link needs to open dropdown
                     e.preventDefault();
         
                     if (nextEl.style.display == "block") {
                       nextEl.style.display = "none";
                     } else {
                       nextEl.style.display = "block";
                     }
                   }
                 });
               });
           }
           // end if innerWidth
         });
         // DOMContentLoaded  end


$('.testimonial-slider').owlCarousel({
	loop: true, 
	margin: 0,
	autoplay: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		}, 
		600: {
			items: 4,
			nav: false
		},
		1000: {
			items: 6,
			nav: true,
			loop: true
		}
	}
})