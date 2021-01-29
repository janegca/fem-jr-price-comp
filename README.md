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
| ipc-Card         | holds the slider, cta | div    | ipc-Card\_\*          |
| ipc-Card_prices  | price ranges          | ul     | #views #slider #price |
| ipc-Card_billing | billing panel         | div    | p button p span       |
| ipc-Card_cta     | call to action panel  | div    | [p > img] button      |

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
   - JS to add/remove the `visually-hidden` class on the span holding the word
     _discount_
1. how to create the slider?
   - set bg colour based on value using JS ie value 0, no hightlight; value 1,
     25% highlight, etc. as a gradient with stops value setting stops?
1. how to create the toggle switch?
1. CTA - had to load the `icon-check.svg`'s in the HTML in order to position as
   per the design, originally tried using a `ul` but each item would have need
   custom positioning anyways, making CSS code messier

References:

For slider bar:

- [How To - CSS Arrows](https://www.w3schools.com/howto/howto_css_arrows.asp)
- [How To - Triangles](https://www.w3schools.com/howto/howto_css_shapes.asp)
- [Horizontal Slider Example](https://www.w3.org/TR/wai-aria-practices-1.1/examples/slider/slider-1.html)

For toggle switches:

- [Toggle Button Switches](https://heydon.github.io/inclusive-components-demos/toggle-buttons/switches.html)
- [Theme Switching Toggle](https://codepen.io/SaraSoueidan/pen/jpBbrq)
- [Toggle switch](https://piccalil.li/tutorial/solution-002-toggle-switch)
