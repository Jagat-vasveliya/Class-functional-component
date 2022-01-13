import React from 'react'

// Using Functional Component

function Example(props) {
     this.state = {
          name: props.name
     }
     return (
          <div>
               <h1>{props.emoji}</h1>
			<h1>Hi, {this.state.name}</h1>
          </div>
     )
}

// Using Class Component

/* 
class Example1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: this.props.name };
	}
	render() {
		return (
			<>
				<h1>{this.props.emoji}</h1>
				<h1>Hi, {this.state.name}</h1>
			</>
		);
	}
} */
export default Example;