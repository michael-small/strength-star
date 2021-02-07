import React, { Component } from 'react';
import RecordDatePicker from '../RecordDatePicker/RecordDatePicker';

export default class CreateRecord extends Component {
	render() {
		return (
			<div>
				<h1>CreateRecord</h1>
				<RecordDatePicker></RecordDatePicker>
			</div>
		);
	}
}
