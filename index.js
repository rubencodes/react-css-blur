import React from 'react';

// Object.assign Polyfill.
const _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const Blur = ({ radius = 0, transition = '0s', children }) => {
	const styles = {
		transition: 'filter ' + transition,
		filter: 'blur(' + radius + ')'
	};

	return React.cloneElement(children, {
		style: _extends({}, children.style, styles)
	});
};

export default Blur;
