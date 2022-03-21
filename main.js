/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
 ********************/

//PROVIDED FOR US
const getRandomNumber = function (max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);

  return result;
};

//SORTS ARRAY FROM LEAST TO GREATEST 
const sortByNumber = function (arr) {
  const byNumber = function (item1, item2) {
    return item1 - item2;
  };
  return arr.slice().sort(byNumber);
};

/*******************
 * YOUR CODE BELOW *
 *******************/
//QUERY SELECTORS
const d6Button = document.querySelector("#d6-roll");
const doubleD6Button1 = document.querySelector("#double-d6-roll-1");
const doubleD6Button2 = document.querySelector("#double-d6-roll-2");
const d12Button = document.querySelector("#d12-roll");
const d20Button = document.querySelector("#d20-roll");
const resetButton = document.querySelector("#reset-button");

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
const d20Median = document.querySelector("#d20-rolls-median");
const d20Mode = document.querySelector("#d20-rolls-mode");

/*******************
 * EVENT LISTENERS *
 *******************/

/******************
 * RESET FUNCTION *
 ******************/
//RESET ALL
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
const getImagePathD6 = (roll) => {
  //RETURNS IMAGES FORM IMAGE FILE PATH 1-6
  return `./images/d6/${roll}.png`;
};

const getImagePathNumbers = (roll) => {
  //RETURNS IMAGES FROM IMAGE FILE 1-12 OR 1-20
  return `./images/numbers/${roll}.png`;
};


const rollD6 = () => {
  const roll = getRandomNumber(6);
  sixes.push(roll);
  const median = getMedian(sixes);
  const mean = getMean(sixes);
  const mode = getMode(sixes);

  d6Button.src = getImagePathD6(roll);
  d6Mean.innerText = mean;
  d6Median.innerText = median;
  d6Mode.innerText = mode;
};

const rollDoubleD6 = () => {
  const roll1 = getRandomNumber(6);
  const roll2 = getRandomNumber(6);
  //PUSH TOGETHER FOR PUSHING INTO A SCORE
  doubleSixes.push(roll1 + roll2);
  const median = getMedian(doubleSixes);
  const mean = getMean(doubleSixes);
  const mode = getMode(doubleSixes);

  doubleD6Button1.src = getImagePathD6(roll1);
  doubleD6Button2.src = getImagePathD6(roll2);
  doubleD6Mean.innerText = mean;
  doubleD6Median.innerText = median;
  doubleD6Mode.innerText = mode;
};

const rollD12 = () => {
  //VARIABLES
  const roll = getRandomNumber(12);
  twelves.push(roll);
  const median = getMedian(twelves);
  const mean = getMean(twelves);
  const mode = getMode(twelves);
  //SETS IMAGE 
  d12Button.src = getImagePathNumbers(roll);
  d12Mean.innerText = mean;
  d12Median.innerText = median;
  d12Mode.innerText = mode;
};

const rollD20 = () => {
  //SET'S UP VARIABLES TO MAKE INNER-TEXT EASIER
  const roll = getRandomNumber(20);
  twenties.push(roll);
  const median = getMedian(twenties);
  const mean = getMean(twenties);
  const mode = getMode(twenties);

  d20Button.src = getImagePathNumbers(roll);
  d20Mean.innerText = mean;
  d20Median.innerText = median;
  d20Mode.innerText = mode;
};

//EVENT LISTENERS WITH FUNCTIONS BEING PASSED IN
d6Button.addEventListener("click", rollD6);
doubleD6Button1.addEventListener("click", rollDoubleD6);
doubleD6Button2.addEventListener("click", rollDoubleD6);
d12Button.addEventListener("click", rollD12);
d20Button.addEventListener("click", rollD20);
resetButton.addEventListener("click", resetAll);

/****************
 * MATH SECTION *
 ****************/

const getMean = (rolls) => {
  let sum = 0;
  //ADDS ONTO SUM = TOTAL
  for (const roll of rolls) {
    sum += roll;
  }
  //TAKE SUM AND DIVIDE
  return (sum / rolls.length).toFixed(2);
};

const getMedian = (rolls) => {
  const sorted = sortByNumber(rolls);
  const midPoint = Math.floor(sorted.length / 2);
  //TAKE 2 VALUES ADD BOTH AND DIVIDE
  if (sorted.length % 2 === 0) {
    return sorted[midPoint] + sorted[midPoint - 1];
  } else {
    return sorted[midPoint].toFixed(2);
  }
};


const getMode = (rolls) => {
  const counts = {};
  let mode = "NA";
  //FOR OF LOOP
  for (const roll of rolls) {
    if (roll in counts) {
      counts[roll]++;
    } else {
      counts[roll] = 1;
    }

    if (counts[mode] === undefined || counts[roll] > counts[mode]) {
      mode = roll;
    }
  }
  return mode;
};

resetAll();