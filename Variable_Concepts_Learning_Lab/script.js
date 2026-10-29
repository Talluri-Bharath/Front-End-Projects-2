

function runVarLab() {

    var studentName = "Rahul";
    var studentAge = 25;

    document.write("<h2>VAR LAB</h2>");

    document.write("Student Name: " + studentName + "<br>");
    document.write("Student Age: " + studentAge + "<br><br>");


    document.write("Here we have to Change/Reinitialize the student Name as 'Bharath kumar'<br><br>")

    studentName = "Bharath kumar";

    document.write("Updated Name: " + studentName + "<br>");

    alert("VAR experiment completed!");
}



function runLetLab() {

    let score = 75;

    document.write("<h2>LET LAB</h2>");

    document.write("Initial Score: " + score + "<br><br>");

        document.write("Here we have to Change/Reinitialize the score as '95'<br><br>")

    score = 95;

    document.write("Updated Score: " + score + "<br>");

    alert("LET variable reassignment completed!");
}



function runConstLab() {

    const courseName = "JavaScript";

    document.write("<h2>CONST LAB</h2>");

    document.write("Course Name: " + courseName + "<br>");

    alert("A const variable cannot be reassigned.");

}



function runUndefinedLab() {

    var studentAge;

    document.write("<h2>UNDEFINED LAB</h2>");

    document.write("Student Age: " + studentAge + "<br>");

    document.write("Type: " + typeof studentAge + "<br>");

    alert("Declared variable without initialization gives undefined.");
}



function runScopeLab() {

    var message = "I am a VAR variable outside block";

    if (true) {

        var firstValue = "Iam VAR variable inside a block";

        let secondValue = "Iam LET Variable inside the block";

        document.write("<h2>SCOPE LAB</h2>");

        document.write("Printing Inside Block: "+firstValue + "<br>");
        document.write("Printing Inside Block: "+secondValue + "<br><br>");

    }

    document.write("Printing Outside Block: " + message + "<br>");
    document.write("Printing Outside Block: " + firstValue + "<br>");

    alert("VAR and LET have different scope behavior.");
}



function runHoistingLab() {

    document.write("<h2>HOISTING LAB</h2>");

    document.write("Before declaration: " + studentAge + "<br>");

    var studentAge = 25;

    document.write("After initialization: " + studentAge + "<br>");

    alert("VAR declaration is hoisted, but initialization is not.");
}