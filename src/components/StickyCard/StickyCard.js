import React from "react";
import "./StickyCard.css";

const colors = ["aliceblue", "honeydew", "ivory", "lavenderblush", "linen", "lavender", "oldlace", "whitesmoke", "mintcream"]

const StickyCard = ({ title, author, position = 0 }) => {
	const stickyPosition = ((position % 8) + 1) * 32;
	const lorem = "Culpa qui anim do ipsum sunt exercitation. Culpa consectetur deserunt laborum aliqua non esse eiusmod exercitation. Dolore nulla anim enim minim occaecat magna. Ut tempor ea tempor nisi ullamco enim exercitation eiusmod nulla Lorem occaecat veniam. Ea ipsum sint culpa adipisicing quis reprehenderit amet anim cupidatat nulla laborum et aliqua Lorem. Deserunt ullamco consequat esse dolore voluptate quis et mollit dolore officia commodo irure cillum. "
	const text = lorem.repeat(position + 1);

	return (
		<div
			className="sticky-card"
			style={{ top: stickyPosition, backgroundColor: colors[position % 8] }}>
			<h1> {title} </h1>
			<article>
				<p>
					{ text }
				</p>
			</article>
			<h2> &lt;{author}/&gt; </h2>
		</div>
	);
};

export default StickyCard;
