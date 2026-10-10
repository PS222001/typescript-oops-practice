"use strict";
let total = 0;
function addProduct() {
    let name = document.getElementById("name").value;
    let price = Number(document.getElementById("price").value);
    let quantity = Number(document.getElementById("quantity").value);
    let subtotal = price * quantity;
    total = total + subtotal;
    document.getElementById("cart").innerHTML +=
        `${name} ₹${price} × ${quantity} = ₹${subtotal}<br>`;
    document.getElementById("subtotal").innerHTML =
        `Subtotal: ₹${total}`;
}
function applyDiscount() {
    let discount = Number(document.getElementById("discount").value);
    let discountAmount = total * discount / 100;
    let finalAmount = total - discountAmount;
    document.getElementById("bill").innerHTML =
        `Discount: ${discount}%<br>
         Discount Amount: ₹${discountAmount}<br>
         <strong>Final Amount: ₹${finalAmount}</strong>`;
}
