import { useRouter } from 'next/router';
import React, { FC } from 'react';
import styled from 'styled-components';
import { useSidemenuOpen } from '../../../contexts/sidemenu-open';
import { useSubmissionState } from '../../../contexts/submission-state';
import { CategoryItem } from '../../../models/categories';

const Root = styled.div`
	display: flex;
	width: max-content;
	align-items: center;
	column-gap: 16px;
	cursor: pointer;
`;

const CategoryName = styled.p`
	margin: 0;
`;

const CategoryStatus: FC<{ categoryItem: CategoryItem }> = ({ categoryItem }) => {
	const { wasCategoryAnswered } = useSubmissionState();
	const { closeSidemenu } = useSidemenuOpen();
	const router = useRouter();

	const isCategoryDone = wasCategoryAnswered(categoryItem.name);

	function handleClick() {
		router.push(categoryItem.path);
		closeSidemenu();
	}

	return (
		<Root onClick={handleClick}>
			{isCategoryDone ? <CheckMark /> : <EmptyCheckMark />}
			<CategoryName>{categoryItem.label}</CategoryName>
		</Root>
	);
};

export default CategoryStatus;

const CheckMark = () => (
	<svg width="32" height="32" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle cx="30.5" cy="30.5" r="28.125" fill="#19DA43" stroke="#19DA43" strokeWidth="3" />
		<path d="M17.9998 30.5L27.3748 39.875L42.9998 21.125" stroke="white" strokeWidth="5" />
	</svg>
);

const EmptyCheckMark = () => (
	<svg width="32" height="32" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle cx="30.5" cy="30.5" r="28.125" stroke="#19DA43" strokeWidth="3" />
	</svg>
);
