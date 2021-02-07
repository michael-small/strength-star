import React, { Component } from 'react';
import DayRecord from '../DayRecord/DayRecord';
import RecordDatePicker from '../RecordDatePicker/RecordDatePicker';
import CreateRecordButton from '../CreateRecord/CreateRecordButton/CreateRecordButton';

export default class AllDayRecords extends Component {
	render() {
		return (
			<div>
				<h1 style={{ textAlign: 'center' }}>AllDayRecords</h1>
				{/*To be iterated over*/}
				<CreateRecordButton></CreateRecordButton>

				<RecordDatePicker></RecordDatePicker>
				<DayRecord date='Mon, Feb 6th'></DayRecord>
				<DayRecord date='Tues, Feb 7th'></DayRecord>
			</div>
		);
	}
}
