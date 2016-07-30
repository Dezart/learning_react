var React = require('react');

var ButtonStyles = {
	color:"white",
	border:"1px solid grey",
	background: "green"
}

var Button = React.createClass({
	render:function(){
		return (
			<button style = {ButtonStyles}  onClick={this.props.handleClick}>Handle Click here!</button>
		)
	}
});

module.exports = Button;