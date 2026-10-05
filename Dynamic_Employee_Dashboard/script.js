   function addEmployee() {

    let name = document.querySelector("#employeeName").value;
    let role = document.querySelector("#employeeRole").value;

    let card = document.createElement("div");
    card.className = "card";

    let employeeName = document.createElement("h2");
    employeeName.textContent ="Employee Name: "+name;

    let employeeRole = document.createElement("p");
    employeeRole.textContent ="Employee Role: "+role;

    card.appendChild(employeeName);
    card.appendChild(employeeRole);

    document.querySelector("#employeeContainer").appendChild(card);
}