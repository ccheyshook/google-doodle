var google = $('svg').drawsvg({
  duration : 5000,
  reverse: true,
  stagger: 1000
});

google.drawsvg('animate');


// Get random number
var max = 5;
var numRand = Math.floor( Math.random() * max );
console.log(numRand);

// Store Colors
var color0 = 'red';
var color1 = 'yellow';
var color2 = 'green';
var color3 = 'purple';
var color4 = 'orange';

// On page load
// Set random color
$('.bubble').css('background-color', eval('color' + numRand));

