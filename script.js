/*
    Add an event listener to the toggle button
    When it's clicked, updated the button style and 
    flip the 'calcDiscount' variable
 */
const toggles = document.querySelectorAll('[role="switch"]');
let calcDiscount = false;

toggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    let checked = toggle.getAttribute("aria-checked") === "true";
    toggle.setAttribute("aria-checked", !checked);

    calcDiscount = !calcDiscount;
  });
});
