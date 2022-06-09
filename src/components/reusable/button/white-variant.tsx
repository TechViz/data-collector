import React, { FC } from 'react';
import Button from '.';

const WhiteButton: FC<{} & React.ComponentProps<typeof Button>> = ({
	backgroundColor,
	borderColor,
	textColor,
	...props
}) => {
	return (
		<Button
			textColor={textColor || (theme => theme.colors.primary.main)}
			backgroundColor={backgroundColor || (theme => theme.colors.white.full)}
			borderColor={borderColor || (theme => theme.colors.primary.main)}
			hoverSpinnerColor={theme => theme.colors.white.full}
			spinnerColor={theme => theme.colors.primary.main}
			{...props}
		/>
	);
};

export default WhiteButton;
