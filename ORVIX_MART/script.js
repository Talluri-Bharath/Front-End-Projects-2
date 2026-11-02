

function buyProduct(name, price) {

    let quantity = prompt("Enter product quantity:");

    if (quantity === null) {
        alert("Shopping cancelled!\n\nplease enter some Quantity to continue shopping!!");
        return;
    }

    quantity = Number(quantity);

    if (quantity <= 0 || isNaN(quantity)) {

        console.warn("Invalid quantity");

        alert("Please enter a valid quantity!");

        return;
    }

    let total = price * quantity;

    alert("Product: " + name +
          "\nQuantity: " + quantity +
          "\nTotal Price: ₹" + total);

    let confirmOrder = confirm("Do you want to confirm your order?");

    if (confirmOrder === true) {

        let customerName = prompt("Enter your name:");

        if (customerName === null || customerName.trim() === "") {

            alert("Customer name is required!");

            return;
        }

        document.getElementById("result").innerHTML =
            "<h2>Order Summary</h2>" +
            "<p>Customer: " + customerName + "</p>" +
            "<p>Product: " + name + "</p>" +
            "<p>Price: ₹" + price + "</p>" +
            "<p>Quantity: " + quantity + "</p>" +
            "<h3>Total: ₹" + total + "</h3>";

        document.getElementById("result").innerHTML+=
            "<p>Order Placed Successfully!</p>"+
            "<h3>Thank You for Shopping!!!</h3>";


        alert("Order placed successfully!");

    } else {

        document.getElementById("result").textContent =
            "Order Cancelled!!";

        alert("Your order has been cancelled.");

    }

}
