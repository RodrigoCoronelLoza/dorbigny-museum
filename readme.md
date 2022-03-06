# D'Orbigny Museum Heritage Website

[![Museum](img/museo-dorbigny-square-logo.jpg)](http://museodorbigny.org)

A website displaying the natural and cultural richness of the d'Orbigny Museum.

## General Info

The website consists of a map with markers positioned at locations representative of the natural and cultural attributes of the site. For a detailed description, see the [spec](spec.md).

## Installation

To launch it locally, clone this repo and install all of the dependencies.

```
$ git clone https://github.com/fabrizzio-gz/dorbigny-museum.git
$ npm install
```

Run the development version with the `dev` script. The development server will be by default at `localhost:8080`.

```
$ npm run dev
```

Generate the production version with the `build` script.

```
$ npm run build
```

All files will be generated in the `public/` folder. Open `public/index.html` with your preferred web browser to access the page.

## Dependencies

Some important dependencies:

- [TypeScript](https://www.typescriptlang.org/).
- [Pug](https://pugjs.org/api/getting-started.html) for html processing.
- [Leaflet](leafletjs.com/) for the interactive map.
- [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), and [Husky](https://typicode.github.io/husky/#/) for code review and formatting.
- [Webpack](webpack.js.org/) for asset bundling.

## Attributions

Web design by [Unofficial by Design](https://unofficialbydesign.com/).
