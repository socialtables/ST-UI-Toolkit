import React from "react";
import PropTypes from "prop-types";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/github";

function Code(props) {
	return <Highlight {...defaultProps} code={props.value} language="jsx" theme={theme}>
		{({ className, style, tokens, getLineProps, getTokenProps }) => (
		<pre className={className} style={style}>
			{tokens.map((line, i) => (
			<div {...getLineProps({ line, key: i })}>
				{line.map((token, key) => (
				<span {...getTokenProps({ token, key })} />
				))}
			</div>
			))}
		</pre>
		)}
	</Highlight>;
}

Code.propTypes = {
	value: PropTypes.string.isRequired,
	style: PropTypes.object,
};

export default Code;
