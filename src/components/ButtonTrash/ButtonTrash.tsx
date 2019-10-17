import React, { useState } from 'react';
import css from './ButtonTrash.module.css';
import trashcan from '../../assets/trash.svg';

type Props = {
	clickHandler: Function;
};

const ButtonTrash: React.FC<Props> = ({ clickHandler }) => {
	const [icon, setIcon] = useState<string>(trashcan);
	const onButtonClick = () => {
		const redIcon = '';
		setIcon(redIcon);
		setTimeout(() => {
			clickHandler();
		}, 500);
	};

	return (
		<button
			data-test='component-button-trash'
			type='button'
			className={css.ButtonTrash}
			onClick={onButtonClick}>
			<span className={css.Trashcan}>
				<img src={icon} alt='remove item' />
			</span>
		</button>
	);
};

export default React.memo(ButtonTrash);
