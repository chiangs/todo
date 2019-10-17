import React from 'react';
import { action } from '@storybook/addon-actions';
import { ButtonPlus } from '../components';

export default {
	title: 'ButtonPlus'
};

export const button = () => (
	<ButtonPlus clickHandler={action('add task action')} />
);
