var React = require('react');


var Link = React.createClass({
	changeUrl: function() {

		window.location.replace(this.props.href);
	
	},
	render: function(){
		return(
			<div
				onClick ={this.changeUrl}>
				{this.props.children}

			</div>
		)
	}
});
module.exports = Link;