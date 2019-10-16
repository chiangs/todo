import React from 'react';
import css from './App.module.css';
import Layout from '../../hoc/Layout';
import TodoList from '../TodoList';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const App: React.FC = () => {
	return (
		<div data-test='component-app' className={css.App} id='app'>
			<Layout>
				<header className={css.Header} id='header'>
					<Header />
				</header>
				<main className={css.Main} id='main'>
					<TodoList />
				</main>
				<footer className={css.Footer} id='footer'>
					<Footer />
				</footer>
			</Layout>
		</div>
	);
};

export default App;
