import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { render } from '@testing-library/react';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<body>
					<Navbar></Navbar>
					<Body></Body>
					<Footer></Footer>
				</body>
			</div>
		);
	}
}

export default App;
