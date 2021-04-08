



var x = "=9934+4444";
//var y = x.match(/\+.*?/);
var y = x.split(/\+|\*|\-|\x/);
//console.log(x.match(/\+|\-|\*|\/.*?/));
var z = y[0].split("");
console.log(z.split(z.indexOf("=")));