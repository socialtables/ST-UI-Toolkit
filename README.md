# UI-SToolkit

React Component Toolkit for Social Tables.

Website & Documentation: [http://nikgraf.github.io/ui-stoolkit/](http://nikgraf.github.io/ui-stoolkit/)

[![Build Status](https://travis-ci.org/nikgraf/belle.svg)](https://travis-ci.org/nikgraf/belle)
[![Dependency Status](https://david-dm.org/nikgraf/belle.svg)](https://david-dm.org/nikgraf/belle)
[![peerDependency Status](https://david-dm.org/nikgraf/belle/peer-status.svg)](https://david-dm.org/nikgraf/belle#info=peerDependencies)

## Getting Started

UI-SToolkit is available as a private [npm](http://npmjs.org) package. Once you have npm you can install UI-SToolkit in your project folder with:

```
npm install @socialtables/ui-stoolkit
```

### Import & Use Components

We recommend you get started with [React](https://facebook.github.io/react/) first. Once you have a simple application setup you can import any component and use it right away. No stylesheets, font or any other prerequisite needed.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
</head>
<body>
  <div id="react-root"></div>
  <!--
    You can use browserify, webpack or similar tools
    to compile & combine your JSX code
  -->
  <script src="bundle.js"></script>
</body>
</html>
```

```javascript
const React = require('react');
const Stoolkit = require('@socialtables/ui-stoolkit');
const TextInput = Stoolkit.TextInput;

const App = React.createClass({

  render: function() {
    return (
      <div>
        <TextInput defaultValue="Update here and see how the input grows …" />
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('react-root'));
```

### Learn more

In addition you can dig through the [documentation](http://nikgraf.github.io/ui-stoolkit/) to learn about how to modify components.

## Browser Support

- Chrome (mobile and desktop)
- Safari (mobile and desktop)
- Firefox
- Internet Explorer 9, 10, 11

## Philosophy

As we design the User Interfaces for various products here at Social Tables, we often times run into common patters or components that we end up re-implementing in multiple places. This library allows us to place all of our reusable patterns into a single module that can be used by any Social Table's application.

## Extensible Styling


### CSS Styling
```js

// TODO

```


### Inline Styling
```js

// TODO

```


## Development

You can install the development environment with

```
npm install
```

`npm run build` will trigger a build into the `lib` folder. To develop a component it's convenient to use the examples or docs application.

### Run the examples or docs application

To run the examples or docs you go into the folder `docs` or `examples` and run `npm install` and `npm start`. The app will run with hot reloading on `http://localhost:3000`.

### Tests

In order to run the tests use

```
npm test
```

To run the test continuously you can use `npm run test:watch`.

## Future Plans

- Continue to add more components to the library
- Work to flesh out the overall design of the module

## Special Thanks

- [Belle](https://github.com/nikgraf/belle) for providing the initial starting point/framework

## License

MIT
