# TODOs
- TODO 1: Load more section
- TODO 2: Aria-labels Concept

## TODO 1: Load more section
In the empty load_more section ```/src/components/load_more``` make a component (you can also make your own sub-components to include in this component) that does the following:

The new component should have at least 22 [cards](https://www.w3schools.com/howto/howto_css_cards.asp), each with its own text and button (you may use the example button already in the components directory), with 3 cards per row on desktop and 1 card per row on mobile.

The initial view of the component should only show 3 cards and a "load more" button.
Each card should have a headline, text, button and also a box shadow on hover. The design of the component is up to you.

The "load more" function should be handled with javascript and should show the next 6 items every time the button is clicked.
The "load more" button should disappear once all cards are loaded.

AC:

- Card Headline (h2)
- Card Text (p)
- Card Button (link)
- Shadow on hover over card
- "Load more" button
- Load 6 more cards on button click
- Button disappears when all cards are loaded

## TODO 2: Aria-labels Concept
Write a basic concept for adding [aria roles and labels](https://www.w3.org/TR/html-aria/) to our components, so that users with disabilities can also use them. The method is entirely up to you.

## TODO 3: Employees component
```/src/components/employees```: Make a component that does the following:

The component should pull data from the given API (in this case it's dummy employee data: http://dummy.restapiexample.com/api/v1/employees).

The data should be displayed in a carousel (you can create your own, or install a carousel library from npm), with 3 employees per slide and arrows to navigate through the slides.

There should be one or two dropdowns/selects (the position is up to you) with options to filter the visible employees by age (for example 20-30, 31-40, 41-50) and/or by salary (for example 80,000-100,000, 100,001-200,000, 200,001-300,000).

AC:

- Data is sorted into blocks/cards displaying all employee information
- There are 3 employees per slide
- There are arrows to navigate through the slides
- There are one or two dropdowns to filter employees by age and/or salary