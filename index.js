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
let xs = [];
let ys = [];
function clickButton(index) {
  // Your main code here.
  // if (x) {
  //   confirm(`Horraaay, ${x} wins!`);
  // }
  let value;
  if (flag % 2 == 1 && !ind.includes(index)) {
    value = "X";
    ind.push(index);
    fillButton(index, value);
    //ind.push(index);
    if (flag == 0) ind = [];

    if (ind == row1) {
      winningAlert(value);
    }
    flag--;
  } else if (flag % 2 == 0 && !ind.includes(index)) {
    value = "O";
    fillButton(index, value);
    ind.push(index);
    if (flag == 0) {
      ind = [];
    }
    //fillButton(1, "X");
    // fillButton(9, "X");
    // fillButton(5, "X");
    flag--;
  }
  if (flag == 0) {
    fillButton(1, "");
    fillButton(2, "");
  }
}

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
// function restartGame
