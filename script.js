problem = document.getElementById("problem");
next = document.getElementById("next");
showans = document.getElementById("show");
addThree = document.getElementById("three-adds");
multiTwo = document.getElementById("two-multi");
divide = document.getElementById("divide");

selected = 0;

addThree.onchange = () => (selected = 3);
multiTwo.onchange = () => (selected = 2);
divide.onchange = () => (selected = 1);

window.onload = function () {
  problem.value = "Press Next Problem to start practicing!";
};

answer = 0;

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
};

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
    "" + a + " x " + b + " / " + c + " " + signs[s1] + " " + d + " x " + e;
  result = [stringRes, intRes];
  return result;
};

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

showans.onclick = function (e) {
  e.preventDefault();
  stringAnswer = "" + answer;
  problem.value = problem.value + "\r\n" + "Answer is: " + stringAnswer;
};
