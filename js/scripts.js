//Draw
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
var color0 = 'coral';
var color1 = '#99FFCC';
var color2 = '#CCFFFF';
var color3 = '#FFFF99';
var color4 = '#CCCCFF';

// On page load
// Set random color
$('.bubble').css('background-color', eval('color' + numRand));

