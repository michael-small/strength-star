import React, { Component } from 'react';
import DayRecord from '../DayRecord/DayRecord';
import RecordDatePicker from '../RecordDatePicker/RecordDatePicker';
import CreateRecordButton from '../CreateRecord/CreateRecordButton/CreateRecordButton';
import { Link } from 'react-router-dom';

export default class AllDayRecords extends Component {
	render() {
		return (
			<div>
				<h1>AllDayRecords</h1>
				{/*To be iterated over*/}
				<CreateRecordButton></CreateRecordButton>

				<RecordDatePicker></RecordDatePicker>
				<DayRecord></DayRecord>
				<DayRecord></DayRecord>
			</div>
		);
	}
}
