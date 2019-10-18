import React from 'react';
import { action } from '@storybook/addon-actions';
import { ButtonPlus } from '../components';

export default {
	title: 'ButtonPlus',
	parameters: {
		component: ButtonPlus,
		componentSubtitle:
			'Simple button used for when adding or creating interaction is needed.'
	}
};

export const button = () => (
	<ButtonPlus clickHandler={action('add task action')} />
);
