import { allCountriesPortuguese } from '../../constants/all-countries';
import { allBrazilStates } from '../../constants/brazil-states';

export const UserRace = [`indígena`, `amarela`, `preta`, `parda`, `branca`, `outra`] as const;
export type UserRace = typeof UserRace[number];

export const UserSexuality = [`homossexual`, `bissexual`, `assexual`, `heterossexual`, `outro`];
export type UserSexuality = typeof UserSexuality[number];

export const UserGender = [`mulher`, `homem`, `não-binário`, `outro`] as const;
export type UserGender = typeof UserGender[number];

export const UserTransgender = [`trans`, `cis`, `outro`] as const;
export type UserTransgender = typeof UserTransgender[number];

export const UserAgeGroup = [
	`menos de 20 anos`,
	`entre 20 e 30 anos`,
	`entre 31 e 40 anos`,
	`entre 41 e 50 anos`,
	`mais de 51 anos`,
] as const;
export type UserAgeGroup = typeof UserAgeGroup[number];

export const UserCivilState = ['solteira', 'casada', 'divorciada', 'viúva'] as const;
export type UserCivilState = typeof UserCivilState[number];

export const UserDeficiency = [`sem`, `visivelmente com`, `que não aparenta, porém com `] as const;
export type UserDeficiency = typeof UserDeficiency[number];

export const UserNumberOfPeople = [
	'apenas eu',
	'2 pessoas',
	'3 pessoas',
	'4 pessoas',
	'mais de 5 pessoas',
] as const;
export type UserNumberOfPeople = typeof UserNumberOfPeople[number];

export const UserNumberOfFinancialDependents = ['0', '1', '2', '3', 'mais de 4'] as const;
export type UserNumberOfFinancialDependents = typeof UserNumberOfFinancialDependents[number];

export const UserFamilyIncome = [
	'0 a R$ 2.090',
	'R$ 2.091 a R$ 4.180',
	'R$ 4.181 a R$ 10.450',
	'R$ 10.451 a R$ 20.900',
	'mais de R$ 20.901',
] as const;
export type UserFamilyIncome = typeof UserFamilyIncome[number];

export const UserIncomePercentage = [
	'uma pequena parte',
	'metade',
	'mais da metade',
	'o valor inteiro',
] as const;
export type UserIncomePercentage = typeof UserIncomePercentage[number];

export const UserOriginCountry = allCountriesPortuguese;
export type UserOriginCountry = typeof UserOriginCountry[number];

export const UserWorkingState = [...allBrazilStates] as const;
export type UserWorkingState = typeof UserWorkingState[number];

export type AboutUser = {
	userRace: UserRace | null;
	userSexuality: UserSexuality | null;
	userGender: UserGender | null;
	userTransgender: UserTransgender | null;
	userAgeGroup: UserAgeGroup | null;
	userCivilState: UserCivilState | null;
	userDeficiency: UserDeficiency | null;
	userNumberOfPeople: UserNumberOfPeople | null;
	userNumberOfFinancialDependents: UserNumberOfFinancialDependents | null;
	userFamilyIncome: UserFamilyIncome | null;
	userIncomePercentage: UserIncomePercentage | null;
	userOriginCountry: UserOriginCountry | null;
	userWorkingState: UserWorkingState | null;
};
