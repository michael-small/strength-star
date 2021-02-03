import React, { Component } from 'react';

export default class Body extends Component {
	render() {
		return (
			<div>
				<h1>Body</h1>
				<ul>
					{' '}
					<li>
						<h2>Home</h2>
					</li>
					<ul>
						<li>
							<h3>RecordDatePicker</h3>
						</li>
					</ul>
					<li>
						<h2>DayRecord</h2>
					</li>
					<li>
						<h2>EditDayRecord</h2>
					</li>
					<li>
						<h2>UserProfile</h2>
					</li>
				</ul>
			</div>
		);
	}
}
