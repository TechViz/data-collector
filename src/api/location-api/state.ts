import { useQuery } from 'react-query';
import { allBrazilStates } from '../../constants/brazil-states';

type Response = {
	data: {
		name: string;
		iso3: string;
		states: {
			name: string;
			state_code: string;
		}[];
	};
	error: boolean;
	msg: string;
};

export function useCountryStates(country?: string) {
	return useQuery(
		['country-state', country],
		async () => {
			if (country === 'Brazil') {
				return allBrazilStates;
			}
			const response = await fetch(`https://countriesnow.space/api/v0.1/countries/states`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ country: country! }),
			});

			const json = (await response.json()) as Response;

			return json.data.states.map(state => state.name);
		},
		{
			enabled: Boolean(country),
			retry: false,
		},
	);
}
