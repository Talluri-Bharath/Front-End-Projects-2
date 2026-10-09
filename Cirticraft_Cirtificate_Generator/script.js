
let studentNameInput = document.getElementById("studentName");
let courseNameInput = document.getElementById("courseName");
let instituteNameInput = document.getElementById("instituteName");
let completionDateInput = document.getElementById("completionDate");

let displayStudent = document.getElementById("displayStudent");
let displayCourse = document.getElementById("displayCourse");
let displayInstitute = document.getElementById("displayInstitute");
let displayDate = document.getElementById("displayDate");
let characterCount = document.getElementById("characterCount");
let uppercaseName = document.getElementById("uppercaseName");
let message = document.getElementById("message");
 

function generatingCirtificate() {
    let studentName = studentNameInput.value.trim();
    let courseName = courseNameInput.value.trim();
    let instituteName = instituteNameInput.value.trim();
    let completionDate = completionDateInput.value;

    if (studentName.length === 0 ||
        courseName.length === 0 ||
        instituteName.length === 0 ||
        completionDate.length === 0) {
        message.textContent = "Please fill in all fields before generating.";
        return;
    }

    displayStudent.textContent = `${studentName}`;
    displayCourse.textContent = `${courseName}`;
    displayInstitute.textContent = `${instituteName}`;
    displayDate.textContent = `${completionDate}`;

    characterCount.textContent = `Student name characters: ${studentName.length}`;
    uppercaseName.textContent = `Uppercase preview: ${studentName.toUpperCase()}`;

    message.textContent = "Your certificate preview is ready!";
    message.style.color = "#26734d";
};
