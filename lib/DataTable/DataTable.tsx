/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useCallback, useMemo } from "react";
import { CloseIcon, SortIcon } from "../Utils/Icon";
import { SelectMenu } from "../Inputs/SelectMenu";
import {
	StyledController,
	StyledDataTable,
	StyledHeadColumn,
	StyledTable,
	StyledTableFooter,
} from "./components";
import { dataSort, dataSortAsc, filterDataBySearch } from "./helpers";

enum SortOrder {
	Ascending = "asc",
	Descending = "desc",
}

type DataTableProps = {
	data: Array<any>;
	columns: Array<ColumnItem>;
};

type ColumnItem = { title: string; data: string };

/**
 * Le composant `DataTable` affiche un tableau de données avec tri, recherche, et pagination.
 * Il prend `data` et `columns` comme props pour rendre un tableau interactif.
 *
 * `data` est un tableau d'objets représentant les données à afficher.
 *
 * `columns` spécifie les colonnes du tableau, chacune définie par un titre et un identifiant de données.
 *
 * @example
 * const data = [
 *   { firstName: "John", lastName: "Doe", age: 30, city: "New York" },
 *   { firstName: "Jane", lastName: "Doe", age: 28, city: "Los Angeles" },
 *   // ... autres données
 * ];
 *
 * const columns = [
 *   { title: "First Name", data: "firstName" },
 *   { title: "Last Name", data: "lastName" },
 *   { title: "Age", data: "age" },
 *   { title: "City", data: "city" },
 * ];
 *
 * <DataTable data={data} columns={columns} />
 *
 * @see [Lien vers la documentation](https://github.com/boysers/oc-hrnet-ui#datatable)
 */
export const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
	const [sortedData, setSortedData] = useState(
		dataSortAsc(data, columns[0].data)
	);
	const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Ascending);
	const [indexColumn, setIndexColumn] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchValue, setSearchValue] = useState("");

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;

	const filteredData = useMemo(
		() => filterDataBySearch(sortedData, searchValue),
		[searchValue, sortedData]
	);
	const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
	const totalPages = Math.ceil(filteredData.length / itemsPerPage);

	const handleItemsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const length = parseInt(e.target.value, 10);
		setItemsPerPage(length);
	};

	const handleSortClick = useCallback(
		(key: string, idx: number) => {
			let newSortOrder: SortOrder = SortOrder.Ascending;

			if (idx === indexColumn) {
				newSortOrder =
					sortOrder === SortOrder.Ascending
						? SortOrder.Descending
						: SortOrder.Ascending;
			}

			const sortedAsc = dataSort(data, newSortOrder, key);

			setSortedData(sortedAsc);
			setSortOrder(newSortOrder);
			setIndexColumn(idx);
		},
		[data, indexColumn, sortOrder]
	);

	const paginate = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		paginate(1);
	}, [itemsPerPage, filteredData.length]);

	return (
		<div>
			<StyledDataTable>
				<StyledController>
					<p>
						<span>Show </span>
						<SelectMenu
							options={[
								{ label: "10", value: "10" },
								{ label: "25", value: "25" },
								{ label: "50", value: "50" },
								{ label: "100", value: "100" },
							]}
							onChange={handleItemsPerPage}
						/>
						<span> entries</span>
					</p>
					<p className="field-research">
						<span>Search: </span>
						<input
							type="text"
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
						/>
						{searchValue && (
							<span
								className="remove-research-datatable"
								onClick={() => {
									setSearchValue("");
								}}
							>
								<CloseIcon />
							</span>
						)}
					</p>
				</StyledController>
				<StyledTable>
					<thead>
						<tr>
							{columns.map((column, idx) => (
								<StyledHeadColumn
									key={column.data}
									tabIndex={0}
									onClick={() => {
										handleSortClick(column.data, idx);
									}}
									onKeyDown={(e) => {
										if ([" ", "Enter"].includes(e.key)) {
											e.preventDefault();
											handleSortClick(column.data, idx);
										}
									}}
								>
									<span>{column.title}</span>
									<SortIcon
										type={
											idx === indexColumn
												? sortOrder === "asc"
													? "asc"
													: "desc"
												: "both"
										}
									/>
								</StyledHeadColumn>
							))}
						</tr>
					</thead>
					<tbody>
						{currentItems.length ? (
							currentItems.map((item: any, idx) => (
								<tr key={idx}>
									{columns.map((column, idx) => (
										<td
											key={idx}
											className={
												indexColumn === idx
													? "sorting"
													: ""
											}
										>
											{item[column.data]}
										</td>
									))}
								</tr>
							))
						) : (
							<tr>
								<td
									colSpan={columns.length}
									style={{
										textAlign: "center",
									}}
								>
									{data.length
										? "No matching records found"
										: "No data available in table"}
								</td>
							</tr>
						)}
					</tbody>
					<StyledTableFooter>
						<tr>
							<td colSpan={columns.length}>
								<div>
									<div>
										<p>
											Showing{" "}
											{filteredData.length === 0
												? 0
												: indexOfFirstItem + 1}{" "}
											to{" "}
											{Math.min(
												indexOfLastItem,
												filteredData.length
											)}{" "}
											of {filteredData.length} entries
											{filteredData.length !==
											sortedData.length ? (
												<span>
													{" "}
													(filtered from{" "}
													{sortedData.length} total
													entries)
												</span>
											) : null}
										</p>
									</div>
									<div className="pagination-wrapper">
										<button
											onClick={() => {
												if (currentPage <= 1) return;
												paginate(currentPage - 1);
											}}
											disabled={currentPage <= 1}
										>
											Previous
										</button>
										{Array.from(
											{ length: totalPages },
											(_, index) => index + 1
										).map((pageNumber) => (
											<button
												key={pageNumber}
												onClick={() =>
													paginate(pageNumber)
												}
												data-active={
													currentPage === pageNumber
												}
											>
												{pageNumber}
											</button>
										))}
										<button
											onClick={() => {
												if (currentPage >= totalPages)
													return;
												paginate(currentPage + 1);
											}}
											disabled={currentPage >= totalPages}
										>
											Next
										</button>
									</div>
								</div>
							</td>
						</tr>
					</StyledTableFooter>
				</StyledTable>
			</StyledDataTable>
		</div>
	);
};
