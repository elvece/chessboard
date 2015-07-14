//class solution
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

//alt solution - not as easy to manipulate
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

//crystal's solution
var userInput = prompt("How wide do you want your chessboard to be?")

//converts userInput from string to number
var userInput = Number(userInput)

//.join repeats the string by the number input by the user
var string1 = Array(userInput + 1).join(" #")
var string2 = Array(userInput + 1).join("# ")

//the ? and : is called ternary operator ternary operator it takes in three arguments---- condition ? exprr1 : expr2 ----short cut for if statement
var chessboard = function (i) {
  //we have 2 types of lines... id string1 and string2... now in each iteration of the loop we need to know which of the string to be used... so the simple logic here is if the value of i is a multiple of 2(ie, 0, 2, 4 etc) use string1 else string2
  console.log(i % 2 == 0 ? string1 : string2);
};

for (var i = 0; i < userInput; i++) {
  chessboard(i);
}
