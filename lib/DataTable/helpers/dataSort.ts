/* eslint-disable @typescript-eslint/no-explicit-any */

export function dataSortAsc<T = unknown>(data: Array<T>, key: string) {
	return dataSort(data, "asc", key);
}

export function dataSortDesc<T = unknown>(data: Array<T>, key: string) {
	return dataSort(data, "desc", key);
}

export function dataSort<T = unknown>(
	data: Array<T>,
	sortOrder: "asc" | "desc",
	key: string
) {
	return [...data].sort((a, b) => {
		if (typeof a === "object" && typeof b === "object") {
			const aValue = (a as any)[key];
			const bValue = (b as any)[key];

			if (typeof aValue === "string" && typeof bValue === "string") {
				const comparison = aValue.localeCompare(bValue, "en", {
					ignorePunctuation: true,
				});

				return sortOrder === "asc" ? comparison : -comparison;
			}
		}

		return 0;
	});
}
