import React, { Component } from 'react';
import DayRecord from '../DayRecord/DayRecord';
import RecordDatePicker from '../RecordDatePicker/RecordDatePicker';

export default class AllDayRecords extends Component {
	render() {
		return (
			<div>
				<h1>AllDayRecords</h1>
				{/*To be iterated over*/}
				<RecordDatePicker></RecordDatePicker>
				<DayRecord></DayRecord>
				<DayRecord></DayRecord>
			</div>
		);
	}
}
