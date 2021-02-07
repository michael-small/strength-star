import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import classes from './DayRecord.css';

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

		const StyledDiv = styled.div`
			border: 1px solid black;
			margin-bottom: 0.5rem;
			padding: 0.5rem;
		`;

		return (
			<StyledDiv>
				{/* Of course these will be props that `AllDayRecords` will iterate on later, I'm just lazy right now and about to go to work*/}
				<h2>DayRecord</h2>
				<b>Lbs: 25</b> &nbsp;&nbsp;&nbsp; <b>Sets: 5</b>{' '}
				&nbsp;&nbsp;&nbsp; <b>Reps per set: 5</b>
				{/* Bad styling practices go <br> (TODO: don't do this) <3 Paul */}
				<br />
				<Button style={{ border: '1px solid black' }}>
					<StyledLink to={'/editdayrecord'}>
						Edit Day Record
					</StyledLink>
				</Button>
			</StyledDiv>
		);
	}
}
