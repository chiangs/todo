import React, { useState } from 'react';
import css from './ButtonTrash.module.css';
import trashcan from '../../assets/trash.svg';
import trashcanRed from '../../assets/trashRed.svg';

type Props = {
	clickHandler: Function;
};

const ButtonTrash: React.FC<Props> = ({ clickHandler }) => {
	const [icon, setIcon] = useState<string>(trashcan);
	const onButtonClick = () => clickHandler();
	const swapTrashcans = () => {
		const nextIcon = icon === trashcan ? trashcanRed : trashcan;
		setIcon(nextIcon);
	};
	return (
		<button
			data-test='component-button-trash'
			type='button'
			className={css.ButtonTrash}
			onClick={onButtonClick}
			onMouseOver={swapTrashcans}
			onMouseLeave={swapTrashcans}
			onMouseDown={swapTrashcans}
			onMouseUp={swapTrashcans}
			onFocus={swapTrashcans}
			onBlur={swapTrashcans}>
			<span className={css.Trashcan}>
				<img src={icon} alt='remove item' />
			</span>
		</button>
	);
};

export default React.memo(ButtonTrash);
