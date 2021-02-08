/* 
    Slider
 */

// Pageviews, related monthly cost and gradient stop
const prices = [
  ["10K", 8, 0],
  ["50K", 12, 25],
  ["100K", 16, 50],
  ["500K", 24, 75],
  ["1M", 36, 100],
];

// Get page elements that will need updating
const card = document.getElementById("ipcCard");
let views = document.getElementById("views");
let price = document.getElementById("price");
const slider = document.getElementById("slider");

// Get the document styles and discount value
const discount = getComputedStyle(card).getPropertyValue("--discount");
let gradStop = getComputedStyle(slider).getPropertyValue("--gradient-stop");

// Set to true when user selects Yearly Billing
let wantsDiscount = false;
let currentIndex = 0;

// Add event listeners
document.addEventListener("DOMContentLoaded", () => {
  // set to value given in the HTML declaration
  updatePage(slider.valueAsNumber);

  slider.addEventListener("input", () => {
    updatePage(slider.valueAsNumber);
  });

  slider.addEventListener("change", () => {
    updatePage(slider.valueAsNumber);
  });
});

function updatePage(idx) {
  views.innerHTML = prices[idx][0];

  let cost = prices[idx][1];
  price.innerHTML = wantsDiscount ? cost * (1 - discount) : cost;

  gradStop = prices[idx][2];
  slider.style.setProperty("--gradient-stop", `${gradStop}%`);

  currentIndex = idx;
}

/*
    Toggle Button
 */
const toggles = document.querySelectorAll('[role="switch"]');

toggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    let checked = toggle.getAttribute("aria-checked") === "true";
    toggle.setAttribute("aria-checked", !checked);

    wantsDiscount = !wantsDiscount;

    updatePage(currentIndex);
  });
});
