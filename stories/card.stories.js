import React from "react";
import { action } from "@storybook/addon-actions";
import { Card } from "../src/index";
import Code from "./lib/Code";
import { propertyNameStyle, propertyDescriptionStyle, storyStyle } from "./style";
import "./css/normalize.css";
import "./css/style.css";


export default {
	title: "Cards",
	component: Card
};

const basicCodeExample = `<!-- basic card example -->
<Card style={{ base: {borderTop: '1px solid #f2f2f2'} }}>
  Add any content here like paragraphs, images or other components …
</Card>`;

const imageCodeExample = `<!-- image card example -->
<Card style={{
  base: {
    borderTop: '1px solid #f2f2f2',
    width: 265,
    padding: '20px 0'
  }
}}>
  <img src="images/ngorongoro_caldera_small.jpg"
       width="100%" />
</Card>`;

export const CardStory = () => (<div style={storyStyle}>
	<h2 style={ {marginTop: 0, marginBottom: 40} }>Card</h2>

	<Card style={{ base: {borderTop: '1px solid #f2f2f2'} }}>
	Add any content here like paragraphs, images or other components …
	</Card>

	<Code value={ basicCodeExample } style={ {marginTop: 40} } />

	<p style={{ marginTop: 40 }}>
	<i>Note</i>: The card is designed to work on non-white areas. To provide a
	nice appearance on white areas please change the box-shadow or borders.
	</p>

	<h3>Properties</h3>

	<p>
	Any property valid for a HTML div like
	<span style={ {color: 'grey'} }> style, id, className, …</span>
	</p>
</div>);

CardStory.story = {
	name: "Card"
};