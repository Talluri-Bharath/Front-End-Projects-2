
function checkIn() {

    let passengerName = document.getElementById("passengerName").value;
    let age = Number(document.getElementById("age").value);
    let travelClass = document.getElementById("travelClass").value;
    let destination = document.getElementById("destination").value;
    let baggage = Number(document.getElementById("baggage").value);
    let result = document.getElementById("result");

    
    if (passengerName == "") {
        result.innerHTML =
            "<strong>Check-in Failed</strong><br>" +
            "Please enter passenger name.";
        return;
    }

    
    if (age >= 18) {

        if (baggage <= 15) {

            switch (travelClass) {

                case "Economy":
                    result.innerHTML =
                        "<strong>✓ CHECK-IN SUCCESSFUL</strong><br><br>" +
                        "Passenger: " + passengerName + "<br>" +
                        "Age: " + age + "<br>" +
                        "Destination: " + destination + "<br>" +
                        "Travel Class: Economy<br>" +
                        "Baggage: " + baggage + " kg<br><br>" +
                        "Have a safe journey <span class='bi bi-airplane-engines-fill'></span>";
                    break;

                case "Business":
                    result.innerHTML =
                        "<strong>✓ CHECK-IN SUCCESSFUL</strong><br><br>" +
                        "Passenger: " + passengerName + "<br>" +
                        "Age: " + age + "<br>" +
                        "Destination: " + destination + "<br>" +
                        "Travel Class: Business<br>" +
                        "Baggage: " + baggage + " kg<br><br>" +
                        "Enjoy your Business Class journey <span class='bi bi-airplane-engines-fill'></span>";
                    break;

                case "First":
                    result.innerHTML =
                        "<strong>✓ CHECK-IN SUCCESSFUL</strong><br><br>" +
                        "Passenger: " + passengerName + "<br>" +
                        "Age: " + age + "<br>" +
                        "Destination: " + destination + "<br>" +
                        "Travel Class: First Class<br>" +
                        "Baggage: " + baggage + " kg<br><br>" +
                        "Enjoy your First Class journey <span class='bi bi-airplane-engines-fill'></span>";
                    break;

                default:
                    result.innerHTML =
                        "<strong>Check-in Failed</strong><br>" +
                        "Please select a travel class.";
            }

        } else {

          
            if (baggage <= 25) {
                result.innerHTML =
                    "<strong>Extra Baggage</strong><br><br>" +
                    "Your baggage is " + baggage + " kg.<br>" +
                    "Please pay the additional baggage charge.";

            } else if (baggage <= 35) {
                result.innerHTML =
                    "<strong>Check-in Delayed</strong><br><br>" +
                    "Your baggage is " + baggage + " kg.<br>" +
                    "Please visit the baggage counter.";

            } else {
                result.innerHTML =
                    "<strong>Check-in Failed</strong><br><br>" +
                    "Baggage limit exceeded.<br>" +
                    "Please reduce your baggage weight.";
            }
        }

    } else {
        result.innerHTML =
            "<strong>Check-in Failed</strong><br><br>" +
            "Passenger must be 18 or above for this demo.";
    }
}
