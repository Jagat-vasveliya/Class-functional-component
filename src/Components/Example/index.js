import React from "react";

// Using Functional Component

function Example(props) {
	return (
		<div>
			<h1>{props.emoji}</h1>
			<h2>HI, {props.name},</h2>
			<h3>I am {props.myName}</h3>
		</div>
	);
}

// Using Class Component

/* class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: this.props.name, myName: this.props.myName };
	}
	render() {
		return (
			<>
				<h1>{this.props.emoji}</h1>
				<h1>Hi, {this.state.name}</h1>
                    <h3>I am {this.state.myName}</h3>
			</>
		);
	}
} */
export default Example;
