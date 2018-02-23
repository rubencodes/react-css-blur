import React from 'react';

// Object.assign Polyfill.
const _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const Blur = function({ children, radius = 0, transition = '0s' }) {
	const styles = {
		'transition': 'filter ' + transition,
		'WebkitFilter': 'blur(' + radius + ')',
		'filter': 'blur(' + radius + ')'
	};

	return React.Children.count(children) > 1
		? React.createElement('span', { style: styles }, children)
		: addStylesToElement(React.Children.only(children), styles);
};

const addStylesToElement = function(el, styles) {
	return React.cloneElement(el, { style: _extends({}, el.style, styles) });
};

export default Blur;
