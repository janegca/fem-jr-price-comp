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

| Class           | Description          | Tag    | Element(s)                     |
| --------------- | -------------------- | ------ | ------------------------------ |
| wrapper         | contents wrapper     | div    | components                     |
| intro           | header and details   | header | h1 p                           |
| ipc             | card                 | div    | slider cta                     |
| slider          | panel                | div    | slider_pricing slider_controls |
|                 |                      |        | slider_toggle                  |
| slider_prices   | price ranges         | ul     | price                          |
| slider_price    | a price range        | ul     | pages cost                     |
| slider_controls | slider controls      | div    | ??                             |
| slider_toggle   | toggle panel         | div    | p toggle_button p span         |
| cta             | call to action panel | div    | ul button                      |

- body has a background image
- the intro has a background image
- the ipc card has a shadow
- the slider button has a coloured shadow
- the slider price range elements are re-ordered on larger screen size so need
  to keep separate (single element, update with JS? or lists?)

References:

- [Toggle switch](https://piccalil.li/tutorial/solution-002-toggle-switch)
