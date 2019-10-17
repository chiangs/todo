import * as React from 'react';
import css from './NoTasks.module.css';
import clipboard from '../../assets/clipboard.svg';

type Props = {};

const NoTasks: React.FC<Props> = props => {
	const title = `No tasks`;
	const status = `You have no tasks to do.`;
	return (
		<section data-test='component-notasks' className={css.NoTasks}>
			<img src={clipboard} alt='no tasks' />
			<h2 className={css.NoTasks__Title}>{title}</h2>
			<p className={css.NoTasks__Status}>{status}</p>
		</section>
	);
};

export default NoTasks;
