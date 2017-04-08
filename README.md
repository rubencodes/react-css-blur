# react-css-blur [![npm version](https://badge.fury.io/js/react-css-blur.svg)](https://badge.fury.io/js/react-css-blur)
![Example](./example.gif)

A React component that uses CSS filters to apply a blur to any DOM element. CSS Filters are currently supported by most modern browsers. See up-to-date compatibility info [here](http://caniuse.com/#feat=css-filters).

## Install

```
npm install --save react-css-blur
```

Then, in your React project:

```javascript
var Blur = require('react-css-blur');
```

Or, if you're using ES6/ECMA2015 syntax:
```javascript
import Blur from 'react-css-blur'
```

## How to Use

The `<Blur />` component accepts two props:
- `radius`: a size value in any CSS units (e.g. `5px`). Default value: 0.
- `transition`: a time value in any CSS units (e.g. `500ms`). Default value: 0.

## Example

```javascript
class App extends React.Component {
	state = {
		blurOn: false
	};

	blurOn = (blurOn) => {
		this.setState({ blurOn });
	}

	render() {
		return (
			<div id="App">
				<Blur radius={ this.state.blurOn ? '5px' : '0' } transition="400ms">
					<h1
						onMouseEnter={ () => this.blurOn(true) }
						onMouseLeave={ () => this.blurOn(false) }>
						Hover Me
					</h1>
				</Blur>
			</div>
		);
	}
}
```

## Dependencies

None!

## License

MIT
