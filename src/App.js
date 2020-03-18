import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header';
import Boards from './components/Boards';
import Footer from './components/Footer';
import './assets/css/index.css';

const App = () => (
	<Provider store={ store }>
		<Header />
		<Boards />
		<Footer />
	</Provider>
);

App.displayName = 'App';

export default App;