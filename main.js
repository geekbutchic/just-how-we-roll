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

/*******************
 * EVENT LISTENERS *
 *******************/

/******************
 * RESET FUNCTION *
 ******************/
 

/****************************
 * CLICK HANDLING FUNCTIONS *
 ****************************/

const d6Button = document.querySelector('#d6-roll');
const doubleD6Button1 = document.querySelector('#double-d6-roll-1');
const doubleD6Button2 = document.querySelector('#double-d6-roll-2');
const d12Button = document.querySelector('#d12-roll');
const d20Button = document.querySelector('#d20-roll');
const resetButton = document.querySelector('#reset-button');

const resetAll = () => {
  // Deletes all  
  sixes.splice(0);
  doubleSixes.splice(0);
  twelves.splice(0);
  twenties.splice(0);
  // Sets images using file path 
  d6Button.src = './images/start/d6.png';
  doubleD6Button1.src = './images/start/d6.png';
  doubleD6Button2.src = './images/start/d6.png';
  d12Button.src = './images/start/d12.jpeg';
  d20Button.src = './images/start/d20.jpg'; 
  // Sets innerText to 'NA'
  d6Mean.innerText = 'NA';
  d6Median.innerText = 'NA';
  d6Mode.innerText = 'NA';
  doubleD6Mean.innerText = 'NA';
  doubleD6Median.innerText = 'NA';
  doubleD6Mode.innerText = 'NA';
  d12Mean.innerText = 'NA';
  d12Median.innerText = 'NA';
  d12Mode.innerText = 'NA';
  d20Mean.innerText = 'NA';
  d20Median.innerText = 'NA';
  d20Mode.innerText = 'NA';
}


/****************
 * MATH SECTION *
 ****************/
const d6Mean = document.querySelector('#d6-rolls-mean');




resetAll(); 