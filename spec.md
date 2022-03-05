# Dorbigny Museum Heritage Website

## Functional Specification

## Overview

The Dorbigny Museum Heritage website showcases the natural and cultural richness of this site.

It's meant to be accessible, mobile-first, easy to understand, aesthetically pleasant, and informative.

This spec is neither complete nor definitive. It's meant to describe the most important aspects of this project.

## Scenarios

Let's imagine a couple of scenarios of people visiting this website.

### Scenario 1: Cochabamba Guy#1

Guy#1 stumbles on the website while browsing Facebook. The preview image looks appealing and he has never heard of this museum before. He thinks, "Is it in Cochabamba? I didn't know!". When visiting the site, he immediately sees a simple map. It's like a cartoonish representation of the place where the museum is located. He presses a few of the markers and realizes that this site has many trees, and even bats. He didn't know we had bats in Cochabamba city! After a couple of minutes, he closes the site and continues browsing Facebook/Instragram. But he was able to learn a couple of things about the site. He had fun visiting it. Maybe he will even share it with his friends.

### Scenario 2: Juan the activist

Juan is very engaged with the protection of the environment in his city, Cochabamba. However, most people disregard his ideas. He's either an extremist, an idealist, or just not very reasonable. He's been trying to explain to his friends that this Museum and the project of moving it to build something else on its site, is harmful for Cochabamba. Still, some of his friends think it's a good idea. It will modernize the city. Besides, "what's the use of this museum? I've never visited it!", they say.

One of his activist contacts sends him a link to this website. That's it! That's what he has been looking for! He's already aware of the natural and cultural importance of this site. But this presentation, with the images, the map, the colors. It's all very simple and enjoyable. He sends it to his friends. Hopefully, now, they will see this museum, and its value, with different eyes.

### Scenario 3: Carla, the progress enthusiast

Carla wants her city to develop. She has heard about a project to build some magnificent building in the place where sits an old and poorly used museum. They will move the museum to a better place, and build a magnificent building instead. "This will bring progress to my city. It's a good thing!" she says. Somehow, she stumbles upon the website (this website). "These people, they don't understand that we need to modernize the city!" she thinks. Regardless, she decides to have a look at the site, it looks interesting. "This is not half-bad," she thinks as she browses the site. It looks nice to her. She finds out a couple of interesting facts about the museum. It's a better place than what she'd initially thought. "Ok, maybe they have a point about not moving the museum, " she thinks. Still, she wants the magnificent building to be built! But at least she has now some lingering doubts about it...

## Website flowchart

This flowchart gives a general idea of how the site is organized and how users will interact with it. In following sections, we'll see more in detail how each part of the website is structured.

![website flowchart](/img/museum-flowchart.drawio.svg)

## Website components specification

The website will consist of a single page. Its colors, layout, and design have already been stablished and can be found [here](https://xd.adobe.com/view/6ab5106e-15a8-46fc-b7c6-3c1c70ff038c-3fe6/).

Next, we'll describe each part in detail.

> #### Open Issue
>
> We haven't thought about a section to include the [change.org](https://www.change.org/p/culturasbolivia-minedubol-manfred-reyes-villa-alcalde-de-cochabamba-apoyemos-al-museo-alcides-d-orbigny-para-que-no-pierda-la-biodiversidad-que-alberga) website to ask visitors to support the musuem. We SHOULD include this somewhere.

### Navbar

The navbar will consist of a logo at the left end and a button with some possible additional information to the right end.

![navbar](/img/museum-navbar.jpg)

The additional button, the `!` mark, might show some information related to the eventual removal of the museum when clicked. This mark icon is likely going to be a SVG.

![question mark](/img/museum-question-mark.jpg)

### Map

Below the navbar we'll have a pictorial map of the museum's site. A [pictorial map](https://en.wikipedia.org/wiki/Pictorial_map) shows some relevant aspects of a territory without caring too much of the technical aspects.

As of this writing, we're lacking the actual pictorial map that will be used, so let's represent it with an image of the actual site of the museum.

![museum map](/img/museum-map.jpg)

Users will be able to pand and zoom on the map's image.

> #### Technical note
>
> Zoom and pan effects will be achieved with the [leaflet library](https://leafletjs.com/SlavaUkraini/examples/crs-simple/crs-simple.html).

The map will contain markers at positions related to subjects of interest. For example, if the map shows a small forest, we will place a marker there linked to the "tree" subsection (subsections will be explained below).

Clicking on a marker will open a window with a short text with more information. Besides the text, this window will contain a "view more" link (_Ver árboles_ in the image below) that opens the related subsection.

![museum marker](/img/museum-map-marker.jpg)

### Subsections

Below the map, there will be subsections related to different topics that want to bring attention to. Some of them are (these could change):

- Trees
- Animals (such as bats)
- Birds
- Frogs
- Lizards
- Museum pieces

![museum subsections](/img/museum-subsections.jpg)

Each subsection has an icon (most likely a SVG icon) a title and a button to the right end (the arrow).When clickin on the arrow, the subsection will slide down and show "cards". Each "card" shows information of one element in the subsection. Cards will be explained below.

![open subsection](/img/museum-subsection-open.jpg)

> #### Technical note
>
> The images in each subsection could be loaded lazily to reduce the load time of the website. This means, they will be downloaded for the user only when he/she opens the related subsection.

### Cards

Each subsection will be made of "cards". Each card gives information about one item related to the subsection. For instance the _árboles_ section will have one card for each tree species in the museum and some additional cards with other interesting facts or details about trees.

The card will consist of an image, a title and short text with additional information. Another button at the bottom-right corner of the card will allow the user to return to the start of the subsection (The `^` arrow button).

![museum card](/img/museum-card.jpg)

> #### Technical note
>
> We could make the image on the card clickable. On clicking it, a zoomed version of the image appears. This could be implemented with lazy loading.

### Footer

There is no design for the footer as of this writing. We could use a model similar to the navbar. A simple black subsection with a copyright, a list of contributors, and the date.

> #### Open Issue
>
> We could even omit this section...
