import * as React from 'react';
import css from './ButtonPlus.module.css';
import plusIcon from '../../assets/Button.svg';

type Props = {
	clickHandler: Function;
};

const ButtonPlus: React.FC<Props> = ({ clickHandler }) => {
	const onButtonClick = () => clickHandler();

	return (
		<button
			type='button'
			className={css.ButtonPlus}
			onClick={onButtonClick}>
			<img src={plusIcon} alt='add plus icon' />
		</button>
	);
};

export default React.memo(ButtonPlus);
