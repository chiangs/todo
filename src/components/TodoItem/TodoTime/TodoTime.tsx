import * as React from 'react';
import {
	converTimeToString,
	getMeridiemFromTime,
	getTimeFromDate
} from '_services/date.service';
import { Meridiem } from '_types/types';
import css from './TodoTime.module.css';

type Props = {
	date: Date;
};

const TodoTime: React.FC<Props> = ({ date }) => {
	const [hours, minutes] = getTimeFromDate(date);
	const meridiem: Meridiem = getMeridiemFromTime(hours);
	const hoursString = converTimeToString(hours);
	const minutesString = converTimeToString(minutes);
	const style = [css.TodoTime, 'hint'].join(' ');
	return (
		<span data-test='component-todo-time' className={style}>
			{hoursString}.{minutesString}&nbsp;{meridiem}
		</span>
	);
};

export default React.memo(TodoTime);
