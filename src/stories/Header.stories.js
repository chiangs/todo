import React from 'react';
import { Header } from '../components';

export default {
	title: 'Header',
	parameters: {
		component: Header,
		componentSubtitle: 'Initial greeting and summary of tasks for user.'
	}
};

export const header = () => <Header />;
