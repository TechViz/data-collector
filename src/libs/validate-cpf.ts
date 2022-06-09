export function getCPFValidationErrors(cpf: string) {
	if (!cpf) return ['Você deve providenciar uma CPF'];
	const justNumbers = cpf.replace(/\D/g, '');
	const CPF_LENGTH = 11;
	if (justNumbers.length !== CPF_LENGTH) {
		return ['CPF inválido'];
	}
	return [];
}

export const isCPFValid = (cpf: string) => getCPFValidationErrors(cpf).length === 0;

export const isCPFInvalid = (cpf: string) => !isCPFValid(cpf);
