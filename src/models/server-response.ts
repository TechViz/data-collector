export type ServerResponse<T> = { success: boolean; message: string; payload: T };

export function isServerResponse(r: any): r is ServerResponse<any> {
	if (!r) return false;
	if (typeof r.success !== 'boolean') return false;
	if (typeof r.message !== 'string') return false;
	return true;
}
