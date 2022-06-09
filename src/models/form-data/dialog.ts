export const typeOfDialogOnCompany = [
	'dialógica',
	'opressora',
	'abusiva',
	'prefiro não responder',
] as const;
export type TypeOfDialogOnCompany = typeof typeOfDialogOnCompany[number];

export const WhoMakeTheDecisions = [
	'chefes',
	'trabalhadores',
	'clientes',
	'todos que trabalham aqui',
] as const;
export type WhoMakeTheDecisions = typeof WhoMakeTheDecisions[number];

export const AreVivenciesTakenIntoConsideration = ['sim', 'não', 'não sei dizer'] as const;
export type AreVivenciesTakenIntoConsideration = typeof AreVivenciesTakenIntoConsideration[number];

export const AreContextTakenIntoConsideration = ['sim', 'não', 'não sei dizer'] as const;
export type AreContextTakenIntoConsideration = typeof AreContextTakenIntoConsideration[number];

export const IsWorkersKnowledgeTakenIntoConsideration = ['sim', 'não', 'não sei dizer'] as const;
export type IsWorkersKnowledgeTakenIntoConsideration =
	typeof IsWorkersKnowledgeTakenIntoConsideration[number];

export type CategoryDialog = {
	whatIsDialogToYou: string | null;
	typeOfDialogOnCompany: TypeOfDialogOnCompany | null;
	whoMakeTheDecisions: WhoMakeTheDecisions | null;
	howDoYouFeelAboutBeingCalledToTalk: string | null;
	whatIsNeededForDialog: string | null;
	areVivenciesTakenIntoConsideration: AreVivenciesTakenIntoConsideration | null;
	areContextTakenIntoConsideration: AreContextTakenIntoConsideration | null;
	isWorkersKnowledgeTakenIntoConsideration: IsWorkersKnowledgeTakenIntoConsideration | null;
};
