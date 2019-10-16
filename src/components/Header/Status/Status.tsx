import * as React from 'react';
import css from './Status.module.css';

type Props = {
	numberOfTasks: number;
};

const Status: React.FC<Props> = ({ numberOfTasks }) => {
	const taskCount: string | number =
		numberOfTasks === 0 ? `no` : numberOfTasks;
	const statusMessage: string = `Today you have ${taskCount} tasks`;
	const styles = [css.Status, 'hint'].join(' ');
	return (
		<p data-test='component-status' className={styles}>
			{statusMessage}
		</p>
	);
};

export default React.memo(Status);
