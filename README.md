# ST-UI-Toolkit

React Component Toolkit for Social Tables.

Website & Documentation: http://socialtables.github.io/ST-UI-Toolkit

## Status

[![Circle CI](https://circleci.com/gh/socialtables/ST-UI-Toolkit/tree/master.svg?style=svg&circle-token=f6ba2e6c4db055963a0b4fd2ff2a79a378eb857c)](https://circleci.com/gh/socialtables/ST-UI-Toolkit/tree/master)

## Getting Started

ST-UI-Toolkit is available as a public [npm](http://npmjs.org) package. Once you have npm you can install ST-UI-Toolkit in your project folder with:

```
npm install @socialtables/st-ui-toolkit
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
const ReactDOM = require('react-dom');
const STUIToolkit = require('@socialtables/st-ui-toolkit');
const Button = STUIToolkit.Button;

class App extends React.Component {
  _clickHandler() {
    alert("YOLO");
  }

  render() {
    return <div>
      <Button onClick={this._clickHandler} />
    </div>;
  }
}

ReactDOM.render(<App/>, document.getElementById('react-root'));
```

### Learn more

In addition you can dig through the [documentation](http://socialtables.github.io/st-ui-toolkit) to learn about how to add and use components.

## Browser Support

- Chrome (mobile and desktop)
- Safari (mobile and desktop)
- Firefox
- Internet Explorer 9, 10, 11

## Philosophy

As we design the User Interfaces for various products here at Social Tables, we often times run into common patters or components that we end up re-implementing in multiple places. This library allows us to place all of our reusable patterns into a single module that can be used by any Social Table's application.

## Development

You can install the development environment with

```
npm install
```

`npm run build` will trigger a build into the `lib` folder.

While developing a component, it's convenient to use the docs application. To do so, create a documentation file for your component in `/docs/components/components`, add a path to that file in `/docs/componenents/routes` and link to it from `/docs/components/Base.js`.


### Run the examples or docs application

To run the examples/docs you go into the folder `/docs` and run `npm install` and `npm start`. The app will run with hot reloading on `http://localhost:3000`.

As you update the code for the docs or the components, the changes will update in real-time within the browser via webpack-dev-server.

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

- [Belle](https://github.com/nikgraf/belle) for providing the initial starting point/scaffolding for the repository
- [Julian Haddad (Lead Designer at Social Tables)](http://julianhaddad.com/) for designing most if not all of the components!

## License

Copyright (C) 2016 Social Tables, Inc. (https://www.socialtables.com) All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
