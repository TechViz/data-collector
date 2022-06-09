import { useQuery } from 'react-query';

type Response = {
	data: string[];
	error: boolean;
	msg: string;
};

export function useStateCity(country?: string, state?: string) {
	return useQuery(
		['country-state-city', country, state],
		async () => {
			const response = await fetch('https://countriesnow.space/api/v0.1/countries/state/cities', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ country: country!, state: state! }),
			});

			const json = (await response.json()) as Response;

			return json.data;
		},
		{
			enabled: Boolean(country) && Boolean(state),
			retry: false,
		},
	);
}
