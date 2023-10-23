function displayMailingLabel(name, address, city, state, zip){
    console.log(name);
    console.log(address);
    console.log(city + ", " + state + " " + zip);

}

displayMailingLabel("Victoria Sellers", "109 Apple St", "Miami", "FL", "24601" );

function addNumbers(num1, num2){
    console.log(num1 + num2); 
}
addNumbers(42, 33);

function displayReceipt(totalDue, amountPaid){
    console.log("Total Due:"+ " $"+`${totalDue}`);
    console.log("Amount Paid:" + " $"+`${amountPaid}`);
    const change = totalDue - amountPaid; 
    console.log("Change Due:" + " $" + `${change}`);
}

displayReceipt(30.00, 15.00);