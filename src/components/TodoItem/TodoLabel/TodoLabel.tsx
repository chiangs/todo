import * as React from 'react';
import css from './TodoLabel.module.css';
import { Status } from '_types/types';

type Props = {
	text: string;
	status: Status;
};

const TodoLabel: React.FunctionComponent<Props> = ({ text, status }) => {
	const textStyle =
		status === 'Done' ? css.TodoLabel__Done : css.TodoLabel__NotDone;
	const styles = [css.TodoLabel, textStyle].join(' ');

	return (
		<span data-test='component-todo-label' className={styles}>
			{text}
		</span>
	);
};

export default React.memo(TodoLabel);
