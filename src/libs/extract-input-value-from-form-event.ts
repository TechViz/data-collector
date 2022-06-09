import React from 'react';

export function extractInputValueFromFormEvent(event: React.FormEvent, inputName: string) {
	const formElement = event.target as HTMLFormElement;
	const inputElement = formElement[inputName] as HTMLInputElement;

	if (!inputElement) throw new Error('Input element with given name not found');

	return (formElement[inputName] as HTMLInputElement).value;
}
