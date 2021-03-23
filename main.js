/**********
 * DATA *
 **********/

const sixes = [8, 3];
const doubleSixes = [8, 3];
const twelves = [8, 3];
const twenties = [8, 3];

/********************
 * HELPER FUNCTIONS *
 ********************/

const getRandomNumber = function (max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);

  return result;
};

const sortByNumber = function (arr) {
  const byNumber = function (item1, item2) {
    return item1 - item2;
  };

  return arr.slice().sort(byNumber);
};

/*******************
 * YOUR CODE BELOW *
 *******************/
const d6Button = document.querySelector("#d6-roll");
const doubleD6Button1 = document.querySelector("#double-d6-roll-1");
const doubleD6Button2 = document.querySelector("#double-d6-roll-2");
const d12Button = document.querySelector("#d12-roll");
const d20Button = document.querySelector("#d20-roll");
const resetButton = document.querySelector("#reset-button");

/*******************
 * EVENT LISTENERS *
 *******************/

/******************
 * RESET FUNCTION *
 ******************/
const resetAll = () => {
  // Removes all items from an array
  sixes.splice(0);
  doubleSixes.splice(0);
  twelves.splice(0);
  twenties.splice(0);
  // Sets Images Using File Path
  d6Button.src = "./images/start/d6.png";
  doubleD6Button1.src = "./images/start/d6.png";
  doubleD6Button2.src = "./images/start/d6.png";
  d12Button.src = "./images/start/d12.jpeg";
  d20Button.src = "./images/start/d20.jpg";
  // Sets Inner Text to 'NA'
  d6Mean.innerText = "NA";
  d6Median.innerText = "NA";
  d6Mode.innerText = "NA";
  doubleD6Mean.innerText = "NA";
  doubleD6Median.innerText = "NA";
  doubleD6Mode.innerText = "NA";
  d12Mean.innerText = "NA";
  d12Median.innerText = "NA";
  d12Mode.innerText = "NA";
  d20Mean.innerText = "NA";
  d20Median.innerText = "NA";
  d20Mode.innerText = "NA";
};
/****************************
 * CLICK HANDLING FUNCTIONS *
 ****************************/

const rollD6 = () => {
  const roll = getRandomNumber(6);
  sixes.push(roll);
  const median = getMedian(sixes);
  const mean = getMean(sixes);
  const mode = getMode(sixes);

  d6Button.src = `./images/d6/${roll}.png`;
  d6Mean.innerText = mean;
  d6Median.innerText = median;
  d6Mode.innerText = mode;
};

/****************
 * MATH SECTION *
 ****************/
const d6Mean = document.querySelector("#d6-rolls-mean");
const d6Median = document.querySelector("#d6-rolls-median");
const d6Mode = document.querySelector("#d6-rolls-mode");
const doubleD6Mean = document.querySelector("#double-d6-rolls-mean");
const doubleD6Median = document.querySelector("#double-d6-rolls-median");
const doubleD6Mode = document.querySelector("#double-d6-rolls-mode");
const d12Mean = document.querySelector("#d12-rolls-mean");
const d12Median = document.querySelector("#d12-rolls-median");
const d12Mode = document.querySelector("#d12-rolls-mode");
const d20Mean = document.querySelector("#d20-rolls-mean");
const d20Median = document.querySelector("d20-rolls-median");
const d20Mode = document.querySelector("#d20-rolls-mode");

resetAll();  