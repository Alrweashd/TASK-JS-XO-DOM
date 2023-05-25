// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
let flag = 9;
let ind = [];
const row1 = [1, 2, 3];
const row2 = [4, 5, 6];
const row3 = [7, 8, 9];
const column1 = [1, 4, 7];
const column2 = [2, 5, 8];
const column3 = [3, 6, 9];
const cross1 = [1, 5, 9];
const cross2 = [3, 5, 7];
let rules = [
  [1, 2, 3], //rows
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7], //columns
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9], //cross
  [3, 5, 7],
];
let xs = [];
let os = [];
function clickButton(index) {
  // Your main code here.
  // if (x) {
  //   confirm(`Horraaay, ${x} wins!`);
  // }
  let value;
  if (flag % 2 == 1 && !ind.includes(index)) {
    value = "X";
    ind.push(index);
    xs.push(index);
    fillButton(index, value);
    console.log(document.getElementById(index).innerHTML === "X");
    if (checkWinner(xs)) {
      winningAlert(value);
      restartGame();
    }
    flag--;
  } else if (flag % 2 == 0 && !ind.includes(index)) {
    value = "O";
    fillButton(index, value);
    ind.push(index);
    os.push(index);
    console.log(document.getElementById(index).innerHTML);
    if (checkWinner(os)) {
      winningAlert(value);
      restartGame();
    }
    //fillButton(1, "X");
    // fillButton(9, "X");
    // fillButton(5, "X");
    flag--;
  }

  if (flag == 0) restartGame();
}

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
function checkWinner(indexs) {
  for (let i = 0; i <= rules.length - 1; i++) {
    if (
      indexs.includes(rules[i][0]) &&
      indexs.includes(rules[i][1]) &&
      indexs.includes(rules[i][2])
    )
      return true;
  }
  return false;
}
// function restartGame

function restartGame() {
  for (let i = 1; i <= 9; i++) {
    fillButton(i, "");
  }
  flag = 9;
  ind = [];
  xs = [];
  os = [];
}
