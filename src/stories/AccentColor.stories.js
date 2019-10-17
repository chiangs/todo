import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import AccentColor from '../components/TodoItem/AccentColor';

export default {
	title: 'AccentColor'
};

const categories = ['Meeting', 'Work', 'Personal', 'Study'];

export const accentColor = () => (
	<AccentColor category={select(`Category`, categories, categories[0])} />
);

accentColor.story = {
	decorators: [withKnobs]
};
