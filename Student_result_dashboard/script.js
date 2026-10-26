alert("Welcome to the Student Result Portal!");

function showResult() {

    let result = confirm(
        "Do you want to view your examination result?"
    );

    if (result === true) {

        console.info("Student result requested successfully");

        document.write(
            "<!DOCTYPE html>" +
            "<html lang='en'>" +
            "<head>" +
            "<meta charset='UTF-8'>" +
            "<meta name='viewport' content='width=device-width, initial-scale=1.0'>" +
            "<title>Student Result</title>" +

            "<style>" +
            "body {" +
            "font-family: Arial, sans-serif;" +
            "background: #F1F5F9;" +
            "color: #172B46;" +
            "padding: 30px;" +
            "text-align: center;" +
            "}" +

            ".report {" +
            "background: white;" +
            "max-width: 550px;" +
            "margin: 50px auto;" +
            "padding: 35px;" +
            "border-radius: 15px;" +
            "border: 1px solid #DCE5EF;" +
            "}" +

            "h1 { color: #10233F; }" +

            ".success {" +
            "color: #167653;" +
            "font-size: 24px;" +
            "font-weight: bold;" +
            "margin: 25px 0;" +
            "}" +

            "p { line-height: 2; }" +

            "</style>" +
            "</head>" +

            "<body>" +

            "<div class='report'>" +

            "<h1>STUDENT RESULT REPORT</h1>" +

            "<p>Academic Year: 2026-2027</p>" +

            "<hr>" +

            "<p>Student Name: Bharath kumar Talluri</p>" +

            "<p>Course: Java Full Stack</p>" +

            "<p>Examination: Final Assessment</p>" +

            "<p>Institute: Naresh IT</p>" +

            "<div class='success'>RESULT: PASS</div>" +

            "<p>Congratulations! Result announcement completed.</p>" +

            "</div>" +

            "</body>" +
            "</html>"
        );

    }
    else {

        alert("You cancelled the result request!");

          document.write(
            "<!DOCTYPE html>" +
            "<html lang='en'>" +
            "<head>" +
            "<meta charset='UTF-8'>" +
            "<meta name='viewport' content='width=device-width, initial-scale=1.0'>" +
            "<title>Student Result</title>" +

            "<style>" +
            "body {" +
            "font-family: Arial, sans-serif;" +
            "background: #F1F5F9;" +
            "color: #172B46;" +
            "padding: 30px;" +
            "text-align: center;" +
            "}" +

            ".report {" +
            "background: white;" +
            "max-width: 550px;" +
            "margin: 50px auto;" +
            "padding: 35px;" +
            "border-radius: 15px;" +
            "border: 1px solid #DCE5EF;" +
            "}" +

            "h1 { color: #10233F; }" +

            ".success {" +
            "color: #761616;" +
            "font-size: 24px;" +
            "font-weight: bold;" +
            "margin: 25px 0;" +
            "}" +

            "p { line-height: 2; }" +

            "</style>" +
            "</head>" +

            "<body>" +

            "<div class='report'>" +

            "<h1>STUDENT RESULT REPORT</h1>" +

            "<p>Academic Year: 2026-2027</p>" +

            "<hr>" +

            "<p>Student Name: Bharath kumar Talluri</p>" +

            "<p>Course: Java Full Stack</p>" +

            "<p>Examination: Final Assessment</p>" +

            "<p>Institute: Naresh IT</p>" +

            "<div class='success'>You cancelled the result request!!!</div>" +

            "</div>" +

            "</body>" +
            "</html>"
        );
      

    }

}