export type Submission = {
	userCPF: string;
	categories: {
		[name: string]: SubmissionCategory;
	};
};

export type SubmissionCategory = {
	creationDate: number;
	categoryName: string;
	values: object;
};
