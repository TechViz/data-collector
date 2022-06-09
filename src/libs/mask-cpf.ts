export function maskCPF(cpf: string) {
	const numbersOnly = cpf.trim().replace(/\D/g, '');
	const numbersArray = numbersOnly.split('');
	if (numbersArray.length > 3) numbersArray.splice(3, 0, '.');
	if (numbersArray.length > 7) numbersArray.splice(7, 0, '.');
	if (numbersArray.length > 11) numbersArray.splice(11, 0, '-');
	if (numbersArray.length > 14) numbersArray.splice(14);
	return numbersArray.join('');
}
