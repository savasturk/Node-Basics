var grades = [100, 50, 75, 97];

/*var grade = grades.shift();

console.log(grade);
console.log(grades);*/
/*console.log(grades[0]);

grades.push(97);

grades.forEach(function (grade) {
    //console.log(grade);
});

console.log(grades.length);*/

// totalGrade = 0
var totalGrade = 0;

grades.push(89);

// forEach -> add grade to totalGrade
grades.forEach(function (grade) {
    totalGrade += grade;
    console.log('Current total is ' + totalGrade);
});

var average = totalGrade / grades.length;
console.log('Average is ' + average);
// totalGrade / total number of grades

