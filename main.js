// LUMINENCE CALCULATOR

//input
let r = +prompt(" enter a r colour value (red):");
let g = +prompt(" enter a r colour value (green):");
let b = +prompt(" enter a r colour value (blue):");


//process
let brightness = Math.sqrt(0.299 * (r) ** 2 + 0.587 * (g) ** 2 + 0,114 * (b) ** 2);

//output
alert(` the luminance is ${brightness}`);