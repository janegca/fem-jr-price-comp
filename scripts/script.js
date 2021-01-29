/* 
    Slider
 */

const views = document.getElementById("views");
console.log("views: ", views.innerHTML);

const price = document.getElementById("price");
console.log("price: ", price.innerHTML * 0.75);

const prices = [
  ["10K", 8],
  ["50K", 12],
  ["100K", 16],
  ["500K", 24],
  ["1M", 36],
];

console.log("prices: ", prices, prices[3][0], prices[3][1]);

/*
    Toggle Button
 */
const toggles = document.querySelectorAll('[role="switch"]');
let discount = false;

toggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    let checked = toggle.getAttribute("aria-checked") === "true";
    toggle.setAttribute("aria-checked", !checked);

    calcDiscount = !discount;
  });
});
