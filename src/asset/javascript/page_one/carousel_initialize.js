$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    margin: 78,
    dots: true,
    responsive:{
        960: {
            items: 2,
            autoWidth: true
        },
        1210:{
            center: false,
            autoWidth: true,
            dots: false
        }
    }
  });
});
