import React, { FC } from 'react';
import QuestionPageWithMultistep from '../../components/styling/question-page-with-multistep';
import { applyDefaultPage } from '../../components/styling/question-page-with-multistep/apply-default-pages';
import HabitationIntro from './0-intro';
import HabitationIsOwnHouse from './1-is-own-house';
import HabitationTypeOfHouse from './2-type-of-house';
import HabitationRoomates from './3-roomates';
import HabitationTypeOfRoomates from './4-type-of-roomates';
import HabitationDidFriendsDie from './5-did-friends-die';
import HabitationRelationshipWithHouseOwner from './6-realationship-with-house-owner';
import HabitationWhereWaterArrives from './7-where-water-arrives';
import HabitationWaterSource from './8-water-source';
import HabitationNumberOfBathrooms from './9-number-of-bathrooms';
import HabitationTrashHandling from './10-trash-handling';
import HabitationEnergyDisponibility from './11-energy-disponibility';
import HabitationDone from './12-done';
import { useRequireAuth } from '../../libs/hooks/use-require-auth';

const HabitationPage: FC<{}> = ({}) => {
	useRequireAuth();

	return (
		<QuestionPageWithMultistep
			categoryName="habitation"
			nextPage="/finances"
			pages={applyDefaultPage(
				[
					{
						component: <HabitationIntro />,
						bgColor: theme => theme.colors.primary.main,
						progress: 0,
					},
					{ component: <HabitationIsOwnHouse />, progress: 8 },
					{ component: <HabitationTypeOfHouse />, progress: 16 },
					{ component: <HabitationRoomates />, progress: 25 },
					{ component: <HabitationTypeOfRoomates />, progress: 33 },
					{ component: <HabitationDidFriendsDie />, progress: 41 },
					{ component: <HabitationRelationshipWithHouseOwner />, progress: 50 },
					{ component: <HabitationWhereWaterArrives />, progress: 58 },
					{ component: <HabitationWaterSource />, progress: 66 },
					{ component: <HabitationNumberOfBathrooms />, progress: 75 },
					{ component: <HabitationTrashHandling />, progress: 83 },
					{ component: <HabitationEnergyDisponibility />, progress: 92 },
					{
						component: <HabitationDone />,
						bgColor: theme => theme.colors.primary.main,
						progress: 100,
					},
				],
				{
					bgColor: theme => theme.colors.blue.main,
					title: (
						<>
							Tech Viz / <strong>Lar doce lar</strong>
						</>
					),
				},
			)}
		/>
	);
};

export default HabitationPage;
