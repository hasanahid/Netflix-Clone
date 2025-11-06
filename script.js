document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Table booked successfully!");
});

document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const items = Array.from(document.querySelectorAll("#orderForm input[type='checkbox']:checked"))
    .map(item => item.value);
  alert("Order placed for: " + items.join(", "));
});
