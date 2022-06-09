import React, { FC } from 'react';
import QuestionPageWithMultistep from '../../components/styling/question-page-with-multistep';
import { applyDefaultPage } from '../../components/styling/question-page-with-multistep/apply-default-pages';
import AboutYouIntro from './0-intro';
import AboutYouRace from './1-race';
import AboutYouSexuality from './2-sexuality';
import AboutYouGender from './3-gender';
import AboutYouTrans from './4-trans.tsx';
import AboutYouAge from './5-age';
import AboutYoutDeficiency from './6-deficiency';
import AboutYouOriginCountry from './7-origin-country';
import AboutYouOriginState from './8-origin-state';
import AboutYouCurrentState from './9-current-state';
import AboutYouCity from './10-city';
import AboutDistrict from './11-district';
import AboutYouDone from './12-done';
import { useRequireAuth } from '../../libs/hooks/use-require-auth';

const AboutYouPage: FC<{}> = ({}) => {
	useRequireAuth();

	return (
		<QuestionPageWithMultistep
			nextPage="/habitation"
			categoryName="aboutYou"
			pages={applyDefaultPage(
				[
					{
						component: <AboutYouIntro />,
						bgColor: theme => theme.colors.primary.main,
						progress: 0,
					},
					{ component: <AboutYouRace />, progress: 8 },
					{ component: <AboutYouSexuality />, progress: 16 },
					{ component: <AboutYouGender />, progress: 24 },
					{ component: <AboutYouTrans />, progress: 33 },
					{ component: <AboutYouAge />, progress: 41 },
					{ component: <AboutYoutDeficiency />, progress: 49 },
					{ component: <AboutYouOriginCountry />, progress: 57 },
					{ component: <AboutYouOriginState />, progress: 66 },
					{ component: <AboutYouCurrentState />, progress: 74 },
					{ component: <AboutYouCity />, progress: 82 },
					{ component: <AboutDistrict />, progress: 93 },
					{
						bgColor: theme => theme.colors.primary.main,
						component: <AboutYouDone />,
						progress: 100,
					},
				],
				{
					bgColor: theme => theme.colors.blue.main,
					title: (
						<>
							Mônada Analytics / <strong>Sobre Você</strong>
						</>
					),
				},
			)}
		/>
	);
};

export default AboutYouPage;
