
alert("Welcome to The Elvonis Gala VIP Invitation Portal!");

function respondToInvitation() {

    let response = confirm(
        "You are invited to The Elvonis Gala!\n\n" +
        "Date: December 25, 2026\n" +
        "Time: 7:00 PM\n\n" +
        "Click OK to accept the invitation.\n" +
        "Click Cancel to decline."
    );

    if (response === true) {

        document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0">

                <title>Invitation Accepted</title>

                <style>
                    * {
                        box-sizing: border-box;
                    }

                    body {
                        margin: 0;
                        padding: 30px 15px;
                        background: #080808;
                        color: #F5F0E5;
                        font-family: Georgia, serif;
                        text-align: center;
                    }

                    .card {
                        max-width: 600px;
                        margin: 50px auto;
                        padding: 45px 25px;
                        border: 2px solid #D4AF37;
                        border-radius: 12px;
                        background: #111111;
                    }

                    h1 {
                        color: #D4AF37;
                        font-size: 32px;
                    }

                    .status {
                        color: #D4AF37;
                        font-size: 23px;
                        margin: 30px 0;
                    }

                    p {
                        color: #C7BFB3;
                        line-height: 1.9;
                    }

                    .accent {
                        color: #A52A2A;
                    }

                    a {
                        display: inline-block;
                        margin-top: 20px;
                        padding: 13px 24px;
                        background: #8B0000;
                        color: white;
                        text-decoration: none;
                        border: 1px solid #D4AF37;
                        border-radius: 5px;
                    }
                </style>

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.2/font/bootstrap-icons.min.css">
            </head>

            <body>
                <div class="card">

                    <p class="accent">
                        <span class="bi bi-stars"> ELVONIS EVENTS <span class="bi bi-stars">
                    </p>

                    <h1>INVITATION ACCEPTED</h1>

                    <p class="status">
                        YOU ARE ON THE VIP GUEST LIST!
                    </p>

                    <hr>

                    <p>Event: The Elvonis Gala</p>
                    <p>Date: December 12, 2026</p>
                    <p>Time: 7:00 PM Onwards</p>
                    <p>Venue: The Grand Palace</p>

                    <p>
                        Thank you for accepting our invitation.
                        We look forward to welcoming you.
                    </p>

                    <a href="./index.html">
                        BACK TO INVITATION
                    </a>

                </div>
            </body>
            </html>
        `);

    } else {

        alert("You have declined the Elvonis Gala invitation.");

        document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0">

                <title>Invitation Declined</title>

                <style>
                    * {
                        box-sizing: border-box;
                    }

                    body {
                        margin: 0;
                        padding: 30px 15px;
                        background: #080808;
                        color: #F5F0E5;
                        font-family: Georgia, serif;
                        text-align: center;
                    }

                    .card {
                        max-width: 600px;
                        margin: 50px auto;
                        padding: 45px 25px;
                        background: #111111;
                        border: 2px solid #8B0000;
                        border-radius: 12px;
                    }

                    h1 {
                        color: #D4AF37;
                        font-size: 30px;
                    }

                    .status {
                        color: #B22222;
                        font-size: 22px;
                        margin: 30px 0;
                    }

                    p {
                        color: #C7BFB3;
                        line-height: 1.9;
                    }

                    a {
                        display: inline-block;
                        margin-top: 20px;
                        padding: 13px 24px;
                        background: #8B0000;
                        color: white;
                        text-decoration: none;
                        border: 1px solid #D4AF37;
                        border-radius: 5px;
                    }
                </style>

                </head>

            <body>
                <div class="card">

                    <p>ELVONIS EVENTS</p>

                    <h1>INVITATION RESPONSE</h1>

                    <p class="status">
                        INVITATION DECLINED
                    </p>

                    <p>
                        You have declined the invitation
                        to The Elvonis Gala.
                    </p>

                    <p>
                        Thank you for responding.
                        We hope to welcome you at another event.
                    </p>

                    <a href="./index.html">
                        BACK TO INVITATION
                    </a>

                </div>
            </body>
            </html>
        `);

    }
}
