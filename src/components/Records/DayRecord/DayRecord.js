import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import classes from './DayRecord.module.scss';

export default class DayRecord extends Component {
	render() {
		const StyledLink = styled(Link)`
			text-decoration: none;
			color: inherit;

			&:focus,
			&:hover,
			&:visited,
			&:link,
			&:active {
				text-decoration: none;
			}
		`;

		const areNotes = this.props.notes.length > 0;

		return (
			<div className={classes.Day}>
				{/* Of course these will be props that `AllDayRecords` will iterate on later, I'm just lazy right now and about to go to work*/}
				<h2>{this.props.date}</h2>
				<b>Lbs: {this.props.lbs}</b> &nbsp;&nbsp;&nbsp;{' '}
				<b>Sets: {this.props.sets}</b> &nbsp;&nbsp;&nbsp;{' '}
				<b>Reps per set: {this.props.repsPerSet}</b>
				{this.props.notes.length > 0 && (
					<p>Notes: {this.props.notes}</p>
				)}
				{/* Bad styling practices go <br> (TODO: don't do this) <3 Paul */}
				<br />
				<Button style={{ border: '1px solid black' }}>
					<StyledLink to={'/editdayrecord'}>
						Edit Day Record
					</StyledLink>
				</Button>
			</div>
		);
	}
}
