import React from 'react';
import { action } from '@storybook/addon-actions';
import { ButtonTrash } from '../components';

export default {
	title: 'ButtonTrash'
};

export const button = () => (
	<ButtonTrash clickHandler={action('remove task action')} />
);
