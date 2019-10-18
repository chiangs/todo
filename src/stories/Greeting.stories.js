import React from 'react';
import Greeting from '../components/Header/Greeting';

export default {
	title: 'Header Greeting',
	parameters: {
		component: Greeting,
		componentSubtitle: 'Greets the user by name.'
	}
};

export const greeting = () => <Greeting name={`Stephen`} />;
