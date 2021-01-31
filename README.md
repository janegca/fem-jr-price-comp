# Interactive Price Component (Junior)

[Challenge Files](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8)

## Criteria

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers
  (details provided below)

### Page view and pricing totals

Here are the different page view ranges and the corresponding monthly price
totals:

- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

If the visitor switches the toggle to yearly billing, a 25% discount should be
applied to all prices.

## Visual Components

| Class            | Description           | Tag    | Element(s)            |
| ---------------- | --------------------- | ------ | --------------------- |
| ipc              | namespace             | div    | ipc-Intro ipc-Card    |
| ipc-Intro        | header and details    | header | h1 p                  |
| ipc-Card         | holds the slider, cta | div    | ipc-Card\_\* #ipcCard |
| ipc-Card_prices  | price ranges          | ul     | #views #slider #price |
| ipc-Card_billing | billing panel         | div    | p button p span       |
| ipc-Card_cta     | call to action panel  | div    | [p > img] button      |

- id's (#) are used for any element targeted by JS
- body has a two background images
- the ipc card has a shadow
- the slider button has a coloured shadow
- the slider price range elements are re-ordered on larger screen size so need
  to keep separate References
- the discount value is a pill
- give the ipc-Card_cta a top border, full width of card

## Technical

1. how to handle discount pricing?
   - JS to modify cost if yearly billing selected
   - JS to update the `views` and `price` when the slider is moved
1. how to create the slider?
   - put together using ideas from tutorials and examples (see References)
     - gc-Slider class, JS used to update gradient colour of rail
     - works in 3 modern browsers: Firefox, Chrome, Edge
       - required some code duplication as needed two polyfill selectors:
         -moz-range-thumb and -webkit-slider-thumb
1. how to create the toggle switch?
   - put together using ideas from tutorials (see References)
   - used a `pseudo-element` and a `data-*` attribute to hide and show the word
     _discount_ in the billing section based on screen size
1. CTA - had to load the `icon-check.svg`'s in the HTML in order to position as
   per the design, originally tried using a `ul` but each item would have needed
   custom positioning anyway, making CSS code messier

References:

For the slider:

- [CSS Custom Properties - Dynamic Changes with and without Javascript](https://vanseodesign.com/css/custom-properties-and-javascript/)
- [Customizing Cross-Browser Range Inputs with CSS and Javascript](https://css-tricks.com/custom-interactive-range-inputs/)
- [MDN: \<input type="range"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)
- [Style Input Range](https://www.cssportal.com/style-input-range/)

For the toggle switch:

- [Toggle Button Switches](https://heydon.github.io/inclusive-components-demos/toggle-buttons/switches.html)
- [Theme Switching Toggle](https://codepen.io/SaraSoueidan/pen/jpBbrq)
- [Toggle switch](https://piccalil.li/tutorial/solution-002-toggle-switch)

For hiding/showing the word 'discount':

- [How to change <span> text in CSS media query](https://stackoverflow.com/questions/55975602/how-to-change-span-text-in-css-media-query)
