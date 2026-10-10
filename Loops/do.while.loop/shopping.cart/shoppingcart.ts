let total: number = 0;

function addProduct(): void {

    let name =
        (document.getElementById("name") as HTMLInputElement).value;

    let price =
        Number(
            (document.getElementById("price") as HTMLInputElement).value
        );

    let quantity =
        Number(
            (document.getElementById("quantity") as HTMLInputElement).value
        );

    let subtotal = price * quantity;

    total = total + subtotal;

    document.getElementById("cart")!.innerHTML +=
        `${name} ₹${price} × ${quantity} = ₹${subtotal}<br>`;

    document.getElementById("subtotal")!.innerHTML =
        `Subtotal: ₹${total}`;
}


function applyDiscount(): void {

    let discount =
        Number(
            (document.getElementById("discount") as HTMLInputElement).value
        );

    let discountAmount =
        total * discount / 100;

    let finalAmount =
        total - discountAmount;

    document.getElementById("bill")!.innerHTML =

        `Discount: ${discount}%<br>
         Discount Amount: ₹${discountAmount}<br>
         <strong>Final Amount: ₹${finalAmount}</strong>`;
}