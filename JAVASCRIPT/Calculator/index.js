function computeTip(percent) {

    // 1. kuhin yung bill value
    let bill = document.getElementById("bill").value;

    // 2. i-check kung may laman yung input
    if (bill === "" || bill <= 0) {
        alert("Please enter a valid bill amount!");
        return;
    }

    // 3. i-convert sa number (kasi .value ay string!)
    bill = parseFloat(bill);

    // 4. compute
    let tip = bill * (percent / 100);
    let total = bill + tip;

    // 5. i-display yung result
    document.getElementById("tipAmount").textContent = "₱" + tip.toFixed(2);
    document.getElementById("totalAmount").textContent = "₱" + total.toFixed(2);

    // 6. ipakita yung result div
    document.getElementById("result").style.display = "flex";

    // 7. i-highlight yung active button
    let buttons = document.querySelectorAll(".tip-btn");
    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });
    event.target.classList.add("active");
}