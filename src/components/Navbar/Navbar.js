import React, { Component } from 'react';
import SideDrawer from '../SideDrawer/SideDrawer';

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<h1>Navbar</h1>
				<ul>
					<li>
						<h3>RecordDatePicker</h3>
					</li>
				</ul>
				<SideDrawer></SideDrawer>
			</div>
		);
	}
}
