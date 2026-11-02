function startPayment()
{
    
        // Initial Variables

        let customerName = "Bharath";
        let walletBalance = 2000;
        let transactionCount = 0;

        let deliveryCharge = 50;
        let cashbackAmount = 25;


        document.write("<h2>Wallet Details</h2>");

        document.write("Customer Name: " + customerName + "<br>");
        document.write("Available Balance: ₹" + walletBalance + "<br>");
        document.write("Transactions: " + transactionCount + "<br>");

     

        let purchaseAmount = prompt("Enter Purchase Amount:");

        let couponCode = prompt("Enter Coupon Code:");

   

        purchaseAmount = Number(purchaseAmount);

   

        let discountAmount =
            couponCode === "SAVE100" ? 100 : 0;


        let finalAmount =
            purchaseAmount - discountAmount + deliveryCharge;


        let isPaymentValid =
            purchaseAmount > 0 &&
            walletBalance >= finalAmount;



        document.write("<hr>");

        document.write("<h2>Payment Details</h2>");

        document.write("Purchase Amount: ₹" + purchaseAmount + "<br>");
        document.write("Discount: ₹" + discountAmount + "<br>");
        document.write("Delivery Charge: ₹" + deliveryCharge + "<br>");
        document.write("Final Amount: ₹" + finalAmount + "<br>");


        if (isPaymentValid) {



            walletBalance -= finalAmount;


            walletBalance += cashbackAmount;

   

            transactionCount++;


            document.write("<h2>Payment Successful!</h2>");

        } else {

            document.write("<h2>Payment Failed!</h2>");

        }


        document.write("<hr>");

        document.write("<h2>Final Wallet Details</h2>");

        document.write("Customer Name: " + customerName + "<br>");

        document.write("Remaining Balance: ₹" + walletBalance + "<br>");

        document.write("Cashback: ₹" +
            (isPaymentValid ? cashbackAmount : 0) + "<br>");

        document.write("Transaction Count: " +
            transactionCount + "<br>");

}