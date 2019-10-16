import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import '../src/index.css';

// Option defaults.
addParameters({
	options: {
		theme: themes.dark
	}
});

addDecorator(withA11y);
// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
