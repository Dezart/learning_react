var React = require('react');
var PropTypes = React.PropTypes;
var ReactDOM = require('react-dom');
var Kek = require('./kek.js');
var Link = require('./link.js');
var Button = require('./button.js');
// var Styles = require('./styles.js');



var HelloWorld = React.createClass({	
	propTypes: {
	    name: PropTypes.string.isRequired
	},
	getInitialState:function() {
	    return {
	        display:true  
	    };
	},
	
	toggleDisplay:function(){
		this.setState({
			display: !this.state.display
		});
		console.log(this.state);
	},
	handleNameChange:function(e){
		this.setState({
			name: e.target.value
		});
		console.log(this.state);
	},
	handleInput:function(e){
		this.setState({
			text: this.refs.name.value
		});
		console.log(this.state);
	},
	dumpState:function(){
		console.log(this);
	},
	render: function(){
			return (
				<div>
					Hello {this.state.text}
					<Link href="/">Link with onclick attribute</Link>
					<input onChange = {this.handleNameChange} name="name" type="text"/>
					<Button style = {{color:'red'}} onClick = {this.dumpState}></Button>

				</div>
			);
	}
});

ReactDOM.render(<HelloWorld name="Dezarty"/> ,document.getElementById('app')); 