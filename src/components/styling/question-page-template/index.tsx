import React, { FC } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import Navbar from '../../layout/navbar';
import Sidemenu from '../../layout/sidemenu';

type ColorDescriptor = string | ((theme: DefaultTheme) => string);

function solveColorDescriptor(colorDescriptor: ColorDescriptor, theme: DefaultTheme) {
	return typeof colorDescriptor === `string` ? colorDescriptor : colorDescriptor(theme);
}

const Root = styled.div<{
	backgroundColor: ColorDescriptor;
}>`
	width: 100%;
	height: 100vh;
	font-size: 20px;
	background-color: ${({ backgroundColor, theme }) => solveColorDescriptor(backgroundColor, theme)};
	transition: 200ms;
	color: white;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	color: ${props => props.theme.colors.black.full};
`;

const ContentContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const QuestionPageTemplate: FC<{ title: React.ReactNode; backgroundColor?: ColorDescriptor }> = ({
	children,
	title,
	backgroundColor = theme => theme.colors.blue.main,
}) => {
	return (
		<Root backgroundColor={backgroundColor}>
			<Navbar showCloseButton title={title} />
			<Sidemenu />
			<ContentContainer>{children}</ContentContainer>
		</Root>
	);
};

export default QuestionPageTemplate;
