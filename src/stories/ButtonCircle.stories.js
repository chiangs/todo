import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import { ButtonCircle } from '../components';

export default {
	title: 'ButtonCircle',
	parameters: {
		component: ButtonCircle,
		componentSubtitle: 'Used to toggle Todo status.'
	}
};

const statuses = ['Done', 'Not started'];

export const buttonCircle = () => (
	<ButtonCircle
		status={select(`Status`, statuses, statuses[0])}
		clickHandler={action('toggle status')}
	/>
);

buttonCircle.story = {
	decorators: [withKnobs]
};
