import React from 'react';
import { action } from '@storybook/addon-actions';
import { ButtonTrash } from '../components';

export default {
	title: 'ButtonTrash',
	parameters: {
		component: ButtonTrash,
		componentSubtitle:
			'Simple button used for when removing or deleting interaction is needed.'
	}
};

export const button = () => (
	<ButtonTrash clickHandler={action('remove task action')} />
);
