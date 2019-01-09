Object representing an action.

# Action types
* navigate
* input
* click
* text
* screenshot

## Navigate Properties
* action: `navigate`
* url: `www.example.com`

## Input Properties
* action: `input`
* selector: `#firstname`
* value: `John`

## Click Properties
* action: `click`
* selector: `.btn`

## Text Properties
Extract text from a selector

* action: `text`
* selector: `p`

## Screenshot Properties
Extract a screenshot of an area of the page.  Options are: (x, y, width, height), selector

### Coordinates
* action: `screenshot`
* type: `coordinates`
* x: `150`
* y: `375`
* width: `200`
* height: `200`

### Selector
* action: `screenshot`
* type: `selector`
* selector: `.img#profile-pic`


