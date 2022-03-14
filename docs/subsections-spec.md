# Subsections

Specification to develop the subsections.

## General structure

Structure of complete subsections using `pug` below. Comments are shown after `//`.

```pug
div // section#1 container
  div // section#1 header container
    h3 SECTION #1 TITLE
    button &#9660; // arrow down symbol
  div // cards section#1 container
    div // card#1 container
      img // card#1.1 photo
      div // card#1.1 content
        h4 // card#1.1 title
        p // car#1.1 content
        button // hide cards button
    div // card#1 container
      img // card#1.1 photo
      div // card#1.1 content
        h4 // card#1.1 title
        p // car#1.1 content
        button // hide cards button
    ...
    div // card#1.n container
      ...
div // section#2 container
  div // section#2 header container
    h3 SECTION #2 TITLE
    button &#9660; // arrow down symbol
  div // section#2 cards
    ...
div // section#3 container
  ...
```

## Section containers

Each section is made of two containers. One for the "header" and one for the "cards". All class names are given only as examples.

```pug
div
  div.section__header
    ...
  div.section__cards_container
```

## Section header

Contains the title of the section and the slide down button.

```pug
div.section__header
  h3 TITLE#1
  button &#9660; // Use this symbol or any other one.
```

### Styling

It's possible to get the desired layout with `display: flex` and other additional CSS rules.

### Adding images to section header

Next to the h3 title there's a symbol. Instead of adding a `img` tag to the markup, use the `h3::before` pseudo-class and the `content` property to add images using CSS. It's better to add _decorative_ images, such as icons, using CSS.

### Slide-down button

When clicking the section header button, the cards contained in the parent container will be displayed. It's possible to hide elements from the DOM using `display: none` or possible `height: 0`. It's possible to animate the elements as they slide down using CSS animations.

A good idea to achieve this effect would be to search for examples. Slide-down effects are commonly used in navigation bars of websites.

## Section cards container

All cards belonging to one section are contained inside a single section card container. Showing or hiding this container with all of the cards is triggered by pressing the button of the section header.

```pug
div.section__cards_container
  div.card
    ... // card#1 contents
  div.card
    ... // card#2 contents
```

## Section cards

Each section has one or more cards. Each card consists of a container with an `img` tag and another container with a summary description of the cards content.

```pug
div.section__card
  img // card img
  div.section__card_summary
    ...
```

The desired layout for each card can be obtained with the `display: flex` rule applied to the `.section__card` class.

## Section card summary

Each card has a summary that consists of a title `h4`, one or more paragraphs (one should be enough), and a button to hide all cards of the corresponding section.

```pug
div.section__card_summary
  h4 CARD TITLE
  p DESCRIPTION
  button ^ // button to hide all cards
```

The layout could be obtained using `display: flex`.

## Suggested order to approach tasks

1. Start by adding the markup to display one or more sections "opened". That is, showing all the cards of all sections.
2. Adjust the markup for general styling: colors, font-size, adding icons, layout.

- Style the cards images with a single common format. For example: all cards images should be the same size or at least be aligned in the same way for all cards.

3. Add the functionality to show/hide the cards within each section header button.
4. Add the functionality to hide the cards of one section by clicking on a card `^` button.
5. Add CSS animations for the slide-down/slide-up cards effect.
6. Refine and adjust.
