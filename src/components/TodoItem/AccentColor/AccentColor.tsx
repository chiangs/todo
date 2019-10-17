import * as React from 'react';
import css from './AccentColor.module.css';
import { Category } from '_types/types';
import { getAccentColorForCategory } from '_services/color.service';

type Props = {
	category: Category;
};

const AccentColor: React.FC<Props> = ({ category }) => {
	const styles = {
		pink: css.Accent__Pink,
		green: css.Accent__Green,
		blue: css.Accent__Blue,
		yellow: css.Accent__Yellow
	};

	const accentColor = getAccentColorForCategory(category);

	const accentStyle = styles[accentColor];

	const style = [css.Accent, accentStyle].join(' ');

	return <span data-test='component-accent' className={style} />;
};

export default React.memo(AccentColor);