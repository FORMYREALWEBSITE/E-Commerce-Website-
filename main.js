function toggleMenu() {
    const overlay = document.getElementById("overlay");
    overlay.style.width = overlay.style.width === "100%" ? "0" : "100%";
}

// Increase Quantity for Cart Item
function increaseQuantity(id) {
    const quantityElement = document.getElementById(id);
    let quantity = parseInt(quantityElement.innerText);
    quantity += 1;
    quantityElement.innerText = quantity;
}

// Decrease Quantity for Cart Item
function decreaseQuantity(id) {
    const quantityElement = document.getElementById(id);
    let quantity = parseInt(quantityElement.innerText);
    if (quantity > 0) {
        quantity -= 1;
        quantityElement.innerText = quantity;
    }
}
