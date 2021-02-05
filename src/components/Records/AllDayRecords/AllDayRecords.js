import React, { Component } from 'react';
import DayRecord from '../DayRecord/DayRecord';

export default class AllDayRecords extends Component {
	render() {
		return (
			<div>
				<h1>AllDayRecords</h1>
				{/*To be iterated over*/}
				<DayRecord></DayRecord>
				<DayRecord></DayRecord>
			</div>
		);
	}
}
