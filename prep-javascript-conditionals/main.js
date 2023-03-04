const age = 27;
function isAdult(age) {
  if (age < 18) {
    age = false;
  } else {
    age = true;
  }
  return age;
}
console.log(isAdult(age));

const student1score = 74;
function didStudentPass(score) {
  if (score >= 70) {
    score = true;
  } else {
    score = false;
  }
  return score;
}
console.log(didStudentPass(student1score));

const student2Score = 103;
function gradeCalculator(score) {
  if (score < 60) {
    score = 'F';
  } else if (score < 70) {
    score = 'D';
  } else if (score < 80) {
    score = 'C';
  } else if (score < 90) {
    score = 'B';
  } else if (score < 100) {
    score = 'A';
  } else {
    score = 'A++';
  }
  return score;
}
console.log(gradeCalculator(student2Score));

const season = 'spring';
function seasonMessenger(season) {
  if (season === 'summer') {
    season = "it's hot today";
  } else if (season === 'spring') {
    season = 'the flowers are blooming';
  } else if (season === 'autumn') {
    season = 'the leaves are changing colors';
  } else if (season === 'winter') {
    season = "it's cold today";
  } else {
    season = 'please enter a valid season';
  }
  return season;
}
console.log(seasonMessenger(season));

const dayOfTheWeek = 'thursday';
function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    dayOfTheWeek = 'have a good weekend!';
  } else {
    dayOfTheWeek = 'Its a weekday';
  }
  return dayOfTheWeek;
}
console.log(dayDetector(dayOfTheWeek));
