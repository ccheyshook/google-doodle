// YOUR SCRIPTS GO HERE

// Draw SVG

var google = $('svg').drawsvg({
  reverse: true,
  duration: 500
});

google.drawsvg('animate');

// Store 3 images

var img0 = '../img/200.jpg';
var img1 = '../img/300.jpg';
var img2 = '../img/400.jpg';

// Get random number

var max = 3;
var numRand = Math.floor( Math.random() * max );
console.log(numRand);

// Display randomize images

$('#random').attr( 'src', eval('img' + numRand) );
