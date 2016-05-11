# react_widgets

## Tabs

### Goal

Make a `Tabs` component. Widgets should pass `Tabs` an array of javascript objects (the data for the tabs)that have
`title` and `content` as keys. Display all the titles, but have
the selected title in **bold** font. Below, it should display only the
contents of the selected tab. The content pane should update when the
user selects different headers.

## Weather Clock

### Goal

Make a weather clock. This should have two components. One should
display the current time, updating every second. The second should
display the current weather based on the user's location.

You'll use the `navigator.geolocation` API to get the user's current
location,  and the [open weather API][weather] to get the current
weather.

## Autocomplete Input

### Goal

Make an Autocomplete component that filters a list of names by the
user's input. Match only names that start with the search input. When
a user clicks on a name, the input field should autocomplete to that
name.
