import * as React from 'react';
import css from './ButtonCircle.module.css';
import { Status } from '../../_types/types';
import checked from '../../assets/checked.svg';
import circle from '../../assets/circle.svg';

type Props = {
	status: Status;
	clickHandler: Function;
};

const ButtonCircle: React.FC<Props> = ({ status, clickHandler }) => {
	const onButtonClick = () => clickHandler();
	const circleIcon = status === 'Done' ? checked : circle;
	return (
		<button
			type='button'
			className={css.ButtonCircle}
			onClick={onButtonClick}>
			<img src={circleIcon} alt='todo toggle status' />
		</button>
	);
};

export default React.memo(ButtonCircle);
