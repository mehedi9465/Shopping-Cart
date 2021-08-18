function quantityController(isIncreasing, quantity, cost, price){
 // Product Quanity
    const ProductQuantity = document.getElementById(quantity);
    let ProductQuantityValue = parseFloat(ProductQuantity.value);

 // Increase or Decrease
    if(isIncreasing)
        ProductQuantityValue = ProductQuantityValue + 1;

    else if(ProductQuantityValue > 0)
        ProductQuantityValue = ProductQuantityValue - 1;
// Set Quantity
    ProductQuantity.value = ProductQuantityValue;

//  Set Total Cost
    const totalCostDisplay = document.getElementById(cost);
    totalCostDisplay.innerText = ProductQuantityValue * price;
    getSubtotal();
}

function getSubtotal(){
    const caseCost = parseFloat(document.getElementById('caseCost').innerText);
    const phoneCost = parseFloat(document.getElementById('phoneCost').innerText);
    const subTotal = caseCost + phoneCost;
    const taxAmount = (subTotal/100) * 15; 
    document.getElementById('subTotal').innerText = subTotal;
    document.getElementById('tax').innerText = taxAmount.toFixed(1);
    document.getElementById('total').innerText = (subTotal - taxAmount).toFixed(1);
}


// Case
document.getElementById('caseBtnPlus').addEventListener('click', function(){
    quantityController(true, 'caseQuantity', 'caseCost', 59);
});

document.getElementById('caseBtnMinus').addEventListener('click', function(){
    quantityController(false, 'caseQuantity', 'caseCost', 59);
});

// Phone
document.getElementById('phoneBtnPlus').addEventListener('click', function(){
    quantityController(true, 'phoneQuantity', 'phoneCost', 1219);
});

document.getElementById('phoneBtnMinus').addEventListener('click', function(){
    quantityController(false, 'phoneQuantity', 'phoneCost', 1219);
});


