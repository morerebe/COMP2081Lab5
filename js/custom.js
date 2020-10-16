// Custom JavaScript
// STEP 15: Call up the carousel using the id, and use the .carousel() method create the options object
$('#carousel-cars').carousel({
    interval: 5000,
    keyboard: false
})
// STEP 16: Change the interval to 5 seconds (set in milliseconds)
// STEP 17: Try an event handler to zoom up the .carousel-caption after the slide completes sliding - by adding a class when the slide has finished animating, and removing it when it begins

$('#carousel-cars').on('slide.bs.carousel', function(){
    // remove the CSS animation class from the figcaption element
    $('.carousel-caption').removeClass('zoomit');
})

$('#carousel-cars').on('slid.bs.carousel', function(){
    // console.log('slide has finished sliding');
    // add the CSS animation class from the figcaption element
    $('.carousel-caption').addClass('zoomit');
})
// LAB 5. Modify custom.js so that the Carousel cannot be controlled using the left and right arrow keys on the keyboard.
$('.carousel-control-prev')

