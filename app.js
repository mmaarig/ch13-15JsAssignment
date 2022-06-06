// Question 8
// Write a program to store 3 students name in an array. Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
function qEight() {
    var student = ["Michael", "John", "Tony"];
    var score = [320, 230, 480];
    var total = 500;
    var percentage = [];
    for (var i = 0; i < student.length; i++) {
        percentage[i] = (score[i] / total) * 100;
        document.write(`Score of ${student[i]} is ${score[i]}. Percentage: ${percentage[i]}%<br>`);
    }
    document.write(`<br></br><a href="./index.html"><button>Back</button></a>`);
}