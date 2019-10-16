import React from 'react';
import Greeting from '../components/Header/Greeting';

export default {
	title: 'Header Greeting'
};

export const greeting = () => <Greeting name={`Stephen`} />;
