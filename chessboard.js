//mike's solution//
for (var i=0; i<8; i++) {

  var line = "";

for (var j=0; j<8; j++) {

  var total = i + j;

  if (total % 2 === 0){
    line += " ";
  } else {
    line += "#";
  }
}

console.log (line);
}

//alt solution//
var odd=" # # # #\n";
var even= "# # # #\n";
var result= "";
for (var i=0; i<8; i++) {

  if (i%2===0) {
    result += odd;
  } else {
    result += even;
  }
}
 console.log (result)
