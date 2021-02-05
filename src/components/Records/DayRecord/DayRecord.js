import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
		return (
			<div id='day-record'>
				<h2>DayRecord</h2>
				<Button style={{ border: '1px solid black' }}>
					<StyledLink to={'/editdayrecord'}>
						Edit Day Record
					</StyledLink>
				</Button>
			</div>
		);
	}
}
