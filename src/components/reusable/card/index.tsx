import styled from 'styled-components';

const Card = styled.div`
	padding: 16px;
	display: grid;
	grid-template-columns: 100%;
	row-gap: 32px;
	background-color: white;
	border-radius: 12px;
	color: ${({ theme }) => theme.colors.primary.main};
	max-width: 650px;
	&[data-fullwidth='true'] {
		max-width: 100%;
	}
`;

export default Card;
