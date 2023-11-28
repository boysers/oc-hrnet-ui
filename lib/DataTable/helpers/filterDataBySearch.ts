/* eslint-disable @typescript-eslint/no-explicit-any */
export function filterDataBySearch(data: Array<any>, searchValue: string) {
	return data.filter((item) =>
		Object.values(item).some((value) =>
			String(value).toLowerCase().includes(searchValue.toLowerCase())
		)
	);
}
