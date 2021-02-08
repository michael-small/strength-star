import React, { Component } from 'react';
import CreateRecordButton from '../Records/CreateRecord/CreateRecordButton/CreateRecordButton';
import RecordDatePicker from '../Records/RecordDatePicker/RecordDatePicker';
import axios from 'axios';

export default class Home extends Component {
	render() {
		const hitBackend = () => {
			axios.get('/test').then((response) => {
				console.log(response.data);
			});
		};
		return (
			<div>
				<h1>Strength Star</h1>
				<p>
					The premier strength training app made by two aspiring web
					developers that are open to employment.
				</p>
				<RecordDatePicker></RecordDatePicker>
				<CreateRecordButton></CreateRecordButton>

				<button onClick={hitBackend}>Send request</button>
			</div>
		);
	}
}
