// Declarations
problem = document.getElementById("problem");
next = document.getElementById("next");
showans = document.getElementById("show");
addThree = document.getElementById("three-adds");
multiTwo = document.getElementById("two-multi");
divide = document.getElementById("divide");
timerSeconds = document.getElementById("number");
timerBtn = document.getElementById("timer-btn");
stopTimer = document.getElementById("stop-timer");

selected = 0;
answer = 0;

// Methods of radio buttons
addThree.onchange = () => (selected = 3);
multiTwo.onchange = () => (selected = 2);
divide.onchange = () => (selected = 1);

// Display message on page load
window.onload = function () {
  problem.value = "Press Next Problem to start practicing!";
};

// Method for the next problem button
next.onclick = function (e) {
  problem.value = "";
  e.preventDefault();
  switch (selected) {
    case 0:
      problem.value = "Please choose a problem type from below";
      break;
    case 1:
      results = divisionProblem();
      problem.value = results[0];
      answer = results[1];
      break;
    case 2:
      results = twoMultisProblem();
      problem.value = results[0];
      answer = results[1];
      break;
    case 3:
      results = addThreeProblem();
      problem.value = results[0];
      answer = results[1];
      break;
  }
  if (myTime > 0) {
    clearInterval(inter);
    timerSeconds.value = myTime;
  }
  showans.disabled = false;
};

// Method for the show answer button
showans.onclick = function (e) {
  e.preventDefault();
  stringAnswer = "" + answer;
  problem.value = problem.value + "\r\n" + "Answer is: " + stringAnswer;
  showans.disabled = true;
};

let inter;
let myTime;
timerBtn.onclick = function (e) {
  e.preventDefault();
  timerSeconds.disabled = true;
  stopTimer.disabled = false;
  timerBtn.disabled = true;
  let p = parseInt(timerSeconds.value);
  myTime = p;
  if (typeof p !== "number" || isNaN(p) || p <= 0) {
    alert("Please Enter a Valid Positive Number Larger than Zero");
    timerSeconds.value = "";
    return;
  }
  inter = setInterval(decrement, 1000, timerSeconds);
};

stopTimer.onclick = function (e) {
  e.preventDefault();
  clearInterval(inter);
  timerSeconds.disabled = false;
  stopTimer.disabled = true;
  timerBtn.disabled = false;
};

let decrement = function (ele) {
  let i = parseInt(ele.value);
  ele.value = i - 1;
  if (ele.value === "0") {
    clearInterval(inter);
    alert("Time is Up!");
    showans.click();
    ele.value = myTime;
    ele.disabled = false;
    stopTimer.disabled = true;
    timerBtn.disabled = false;
  }
};

// Function to call for a division problem
divisionProblem = function () {
  signs = ["+", "-"];
  intRes = -1;
  while (intRes < 0) {
    b = Math.floor(Math.random() * 20 + 2);
    c = 0;
    while (c === 0) {
      a = Math.floor(Math.random() * 200 + 2);
      for (i = 3; i < 20; i++) {
        if (a % i === 0) {
          c = i;
          break;
        }
      }
    }
    s1 = Math.round(Math.random());
    d = Math.floor(Math.random() * 100 + 2);
    e = Math.floor(Math.random() * 10 + 2);
    if (s1 === 0) {
      intRes = (a * b) / c + d * e;
    } else {
      intRes = (a * b) / c - d * e;
    }
  }
  stringRes =
    "" + a + " x " + b + " ÷ " + c + " " + signs[s1] + " " + d + " x " + e;
  result = [stringRes, intRes];
  return result;
};

// Function to call for a multiplication problem
twoMultisProblem = function () {
  signs = ["+", "-"];
  intRes = -1;
  while (intRes < 0) {
    a = Math.floor(Math.random() * 100 + 2);
    b = Math.floor(Math.random() * 20 + 2);
    s1 = Math.round(Math.random());
    c = Math.floor(Math.random() * a + 2);
    d = Math.floor(Math.random() * 10 + 2);
    if (s1 === 0) {
      intRes = a * b + c * d;
    } else {
      intRes = a * b - c * d;
    }
  }
  stringRes = "" + a + " x " + b + " " + signs[s1] + " " + c + " x " + d;
  result = [stringRes, intRes];
  return result;
};

// Function to call for an addition of three numbers problem
addThreeProblem = function () {
  signs = ["+", "-"];
  intRes = -1;
  while (intRes < 0) {
    a = Math.floor(Math.random() * 900 + 100);
    b = Math.floor(Math.random() * a + 100);
    c = Math.floor(Math.random() * b + 100);
    s1 = Math.round(Math.random());
    s2 = Math.round(Math.random());
    if (s1 === 0) {
      if (s2 === 0) {
        intRes = a + b + c;
      } else {
        intRes = a + b - c;
      }
    } else {
      if (s2 === 0) {
        intRes = a - b + c;
      } else {
        intRes = a - b - c;
      }
    }
  }
  stringRes = "" + a + signs[s1] + b + signs[s2] + c;
  result = [stringRes, intRes];
  return result;
};
