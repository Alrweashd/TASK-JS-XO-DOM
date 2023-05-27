// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  if (text === "X") {
    document.getElementById(index).style.color = "green";
    // document.getElementById(index).style.transform = "translateZ(5px)";
    document.getElementById(index).innerHTML = text;
    // document.getElementById(index).animate();
  } else {
    document.getElementById(index).style.color = "red";
    document.getElementById(index).innerHTML = text;
  }
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
let xs = [];
let os = [];
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

function clickButton(index) {
  if (flag % 2 == 1 && !ind.includes(index)) {
    ind.push(index);
    xs.push(index);
    fillButton(index, "X");
    flag--;
    document.getElementById(index);
    if (checkWinner(xs)) {
      winningAlert("player 1");
      restartGame();
    }
  } else if (!ind.includes(index)) {
    fillButton(index, "O");
    ind.push(index);
    os.push(index);
    flag--;

    if (checkWinner(os)) {
      winningAlert("player 2");
      restartGame();
    }
  }

  if (flag == 0) {
    confirm(`Its a draw!`);
    restartGame();
  }
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
