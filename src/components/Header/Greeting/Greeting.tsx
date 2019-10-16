import * as React from 'react';
import css from './Greeting.module.css';

type Props = {
	name: string;
};

const Greeting: React.FC<Props> = ({ name }) => {
	const greetingMsg: string = `Hello`;
	return (
		<p data-test='component-greeting' className={css.Greeting}>
			{greetingMsg}&nbsp;{name}!
		</p>
	);
};

export default React.memo(Greeting);
