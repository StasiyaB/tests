document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div');
  const scoreDisplay = document.querySelector('span');
  const startBtn = document.querySelector('.start');

  const width = 10;
  let currentIndex = 0; //so first div in our grid
  let appleIndex = 0; //so first div in our grid
  let currentSnake = [2,1,0]; //so the 3rd div in our grid being 2 (or the HEAD), and 0 being the end (TAIL, with all 1's being the body from now on)
  let direction = 1;
  let score = 0;
  let speed = 0.9;
  let intervalTime = 0;
  let interval = 0;

  //to start, and restart the game
  function startGame() {
    currentSnake.forEach(index => squares[index].classList.remove('snake'));
    squares[appleIndex].classList.remove('apple');
    clearInterval(interval);
    score = 0;
    randomApple();
    direction = 1;
    scoreDisplay.innerText = score;
    intervalTime = 1000;
    currentSnake =[2,1,0];
    currentIndex = 0;
    currentSnake.forEach(index => squares[index].classList.add('snake'));
    interval = setInterval(moveOutcomes, intervalTime);
  }

  //function that deals with ALL outcomes of the Snake
  function moveOutcomes() {

    //deals with Snake hitting border and Snake hitting self
    if (
      (currentSnake[0] + width >= (width * width) && direction === width)/* is Snake hits bottom*/|| (currentSnake[0] % width === width - 1 && direction === 1)/*if snake hits right wall*/|| (currentSnake[0] % width === 0 && direction === -1)/*if Snake hits left wall*/ || (currentSnake[0] - width < 0 && direction === -width)/*if Snake hits the top*/ || squares[currentSnake[0] + direction].classList.contains('snake') /*if Snake goes into itself*/
    ) {
      return clearInterval(interval); //this will clear the interval if any of the above happen
    }

    const tail = currentSnake.pop(); //removes last ite of the array and shows it
    squares[tail].classList.remove('snake'); // removes class of snake from the TAIL
    currentSnake.unshift(currentSnake[0] + direction); //gives direction to the head of the array

    //deals with Snake getting apple
    if (squares[currentSnake[0]].classList.contains('apple')) {
      squares[currentSnake[0]].classList.remove('apple');
      squares[tail].classList.add('snake');
      currentSnake.push(tail);
      randomApple();
      score ++;
      scoreDisplay.textContent = score;
      clearInterval(interval);
      intervalTime *= speed;
      interval = setInterval(moveOutcomes, intervalTime);
    }
    squares[currentSnake[0]].classList.add('snake');
  }

  //generate new apple one apple is eaten
  function randomApple() {
    do {
      appleIndex = Math.floor(Math.random() * squares.length);
    } while (squares[appleIndex].classList.contains('snake')) //making sure apple will not appear on the Snake
    squares[appleIndex].classList.add('apple');
  }

  //assign functions to keycodes
  function control(e) {
    squares[currentIndex].classList.remove('snake') // we are removing the class of snake from ALL the squares

    if(e.keyCode === 39) {
      direction = 1; //if we press the right arrow on our keyboard, the snake will go right
    } else if (e.keyCode === 38) {
      direction = -width; // if we press up arrow, the snake will go back ten divs, appearing to go up
    } else if (e.keyCode === 37) {
      direction = -1; // if we press left, the snake will go left one div
    } else if (e.keyCode === 40) {
      direction = +width; // if we oress down, the snake head will instantly appear in the div ten divs from where you are now
    }
  }

  document.addEventListener('keyup', control);
  startBtn.addEventListener('click', startGame);
});
