/**
 * Template Name: Restaurantly
 * Updated: Jul 27 2023 with Bootstrap v5.3.1
 * Template URL: https://bootstrapmade.com/restaurantly-restaurant-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
$(document).ready(function (){
  "use strict";

  // Handle form submission
$('form.php-email-form').on('submit', function(e) {
  e.preventDefault();
  // Show the small loader initially
  $('.loading').show();
  // Hide the submit button
  $('button[type="submit"]').prop('disabled', true);

  // Simulate a delay (remove this in your actual code)
  setTimeout(function() {
    // Hide the small loader
    $('.loading').hide();

    // Submit the form
    $(this).unbind('submit').submit();

    // Reload the page after the form is submitted
    location.reload();
  }, 2000); // Adjust the delay as needed, this is just a placeholder
});
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return $(el)
    } else {
      return $(el).first()
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.each(function() {
          $(this).on(type, listener)
        })
      } else {
        selectEl.on(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.on('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = $(window).scrollTop() + 200
    navbarlinks.each(function() {
      let $this = $(this)
      if (!$this.hash) return
      let section = select($this.hash)
      if (!section) return
      if (position >= section.offset().top && position <= (section.offset().top + section.outerHeight())) {
        $this.addClass('active')
      } else {
        $this.removeClass('active')
      }
    })
  }
  $(window).on('load', navbarlinksActive)
  onscroll($(document), navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.outerHeight()

    let elementPos = select(el).offset().top
    $('html, body').animate({
      scrollTop: elementPos - offset
    }, 'slow')
  }

  $('#navbar ul li a.nav-link').on('click', function() {
    // Remove the 'active' class from all navigation items
    $('#navbar ul li a.nav-link').removeClass('active');
    // Add the 'active' class to the clicked navigation item
    $(this).addClass('active');
  });

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader.length) {
    const headerScrolled = () => {
      if ($(window).scrollTop() > 100) {
        selectHeader.addClass('header-scrolled')
        if (selectTopbar.length) {
          selectTopbar.addClass('topbar-scrolled')
        }
      } else {
        selectHeader.removeClass('header-scrolled')
        if (selectTopbar.length) {
          selectTopbar.removeClass('topbar-scrolled')
        }
      }
    }
    $(window).on('load', headerScrolled)
    onscroll($(document), headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop.length) {
    const toggleBacktotop = () => {
      if ($(window).scrollTop() > 100) {
        backtotop.addClass('active')
      } else {
        backtotop.removeClass('active')
      }
    }
    $(window).on('load', toggleBacktotop)
    onscroll($(document), toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').toggleClass('navbar-mobile')
    $(this).toggleClass('bi-list')
    $(this).toggleClass('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').hasClass('navbar-mobile')) {
      e.preventDefault()
      $(this).next().toggleClass('dropdown-active')
    }
  }, true)

  /**
   * Scrool with offset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash).length) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.hasClass('navbar-mobile')) {
        navbar.removeClass('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.toggleClass('bi-list')
        navbarToggle.toggleClass('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with offset on page load with hash links in the url
   */
  $(window).on('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash).length) {
        scrollto(window.location.hash)
      }
    }
  })

  /**
   * Preloader
   */
  let preloader = select('#preloader')
  if (preloader.length) {
    $(window).on('load', () => {
      preloader.remove()
    })
  }

  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  })

  /**
   * Events slider
   */
  new Swiper('.events-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  })

  /**
   * Initiate gallery lightbox 
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  })

  /**
   * Animation on scroll
   */
  $(window).on('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  })
});
