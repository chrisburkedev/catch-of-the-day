// let's go!
import React from 'react';
import {render} from 'react-dom';
import {getFunName} from '../helpers'


class StorePicker extends React.Component {

	goToStore(event) {
		event.preventDefault();
		this.context.router.transitionTo(`store/${this.storeInput.value}`)
	}

	render() {
		return (
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
				<h2>Please Enter a Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
				<button type="sumbit">Visit Store</button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}


export default StorePicker;

