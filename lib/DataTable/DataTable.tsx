/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { SortIcon } from "../Icon";
import { SelectMenu } from "../SelectMenu";

type DataTableProps = {
	data: Array<any>;
	columns: Array<Column>;
};

type Column = { title: string; data: string };

const StyledDataTable = styled.div`
	select {
		font-size: 0.9rem;
		padding: 4px 8px;
	}
`;

const StyledTable = styled.table`
	border-spacing: 0;

	.sorting {
		background-color: rgba(0, 0, 0, 0.02);
	}

	thead {
		font-weight: 700;

		td {
			border-bottom: 1px solid rgba(0, 0, 0, 0.75);
			text-align: center;
			padding: 10px 18px;
		}
	}

	tbody {
		tr {
			td {
				padding: 8px 10px;
				border-bottom: 1px solid rgba(0, 0, 0, 0.1);
			}

			&:nth-child(2n -1) {
				background-color: #f9f9f9;
			}

			&:last-child {
				td {
					border-bottom: 1px solid rgba(0, 0, 0, 0.75);
				}
			}

			&:hover {
				background-color: rgba(0, 0, 0, 0.05);
			}
		}
	}
`;

const StyledHeadColumn = styled.td`
	cursor: pointer;
	user-select: none;
	position: relative;

	svg {
		position: absolute;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
	}
`;

const StyledTableFooter = styled.tfoot`
	td {
		div {
			display: flex;
			justify-content: space-between;
			align-items: baseline;

			p {
				margin: 0;
				padding-top: 12px;
			}

			.pagination-wrapper {
				display: flex;
				gap: 4px;
			}

			button {
				border: none;
				outline: none;
				font-size: 1rem;
				padding: 8px 16px;
				cursor: pointer;
				border-radius: 6px;

				&:disabled {
					cursor: not-allowed;
				}

				&[data-active="true"] {
					background-color: rgba(0, 0, 0, 0.6);
					color: #fff;
				}

				&:hover:not(&:disabled) {
					background-color: rgba(0, 0, 0, 0.45);
					color: #fff;
				}
			}
		}
	}
`;

export const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
	const [sortedData, setSortedData] = useState(data);
	const [typeSort, setSortType] = useState<"ASC" | "DESC">("ASC");
	const [indexColumn, setIndexColumn] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

	const totalPages = Math.ceil(data.length / itemsPerPage);

	const handleSortingAsc = (key: string) => {
		const sorted = [...sortedData].sort((a, b) => {
			if (typeof a === "object" && typeof b === "object") {
				const aValue = (a as any)[key];
				const bValue = (b as any)[key];

				if (typeof aValue === "string" && typeof bValue === "string") {
					return aValue.localeCompare(bValue, "en", {
						ignorePunctuation: true,
					});
				}
			}

			return 0;
		});

		setSortedData(sorted);
	};

	const handleSortingDesc = (key: string) => {
		const sorted = [...sortedData].sort((a, b) => {
			if (typeof a === "object" && typeof b === "object") {
				const aValue = (a as any)[key];
				const bValue = (b as any)[key];

				if (typeof aValue === "string" && typeof bValue === "string") {
					return bValue.localeCompare(aValue, "en", {
						ignorePunctuation: true,
					});
				}
			}

			return 0;
		});

		setSortedData(sorted);
	};

	const handleItemsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const count = parseInt(e.target.value, 10);
		setItemsPerPage(count);
	};

	const handleClickSort = useCallback(
		(nameData: string, idx: number) => {
			if (idx !== indexColumn) {
				handleSortingAsc(nameData);
				setSortType("ASC");
				setIndexColumn(idx);
				return;
			}

			if (typeSort === "DESC") {
				handleSortingAsc(nameData);
				setSortType("ASC");
				return;
			}
			handleSortingDesc(nameData);
			setSortType("DESC");
		},
		[typeSort, indexColumn]
	);

	const paginate = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		paginate(1);
	}, [itemsPerPage]);

	useEffect(() => {
		handleSortingAsc(columns[0].data);
	}, [columns[0].data]);

	return (
		<StyledDataTable>
			<div>
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
			</div>
			<StyledTable>
				<thead>
					<tr>
						{columns.map((column, idx) => (
							<StyledHeadColumn
								key={column.data}
								onClick={() => {
									handleClickSort(column.data, idx);
								}}
							>
								<span>{column.title}</span>
								<SortIcon
									type={
										idx === indexColumn
											? typeSort === "ASC"
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
					{currentItems.map((item: any, idx) => (
						<tr key={idx}>
							{columns.map((column, idx) => (
								<td
									key={idx}
									className={
										indexColumn === idx ? "sorting" : ""
									}
								>
									{item[column.data]}
								</td>
							))}
						</tr>
					))}
				</tbody>
				<StyledTableFooter>
					<tr>
						<td colSpan={columns.length}>
							<div>
								<div>
									<p>
										Showing {indexOfFirstItem + 1} to{" "}
										{Math.min(indexOfLastItem, data.length)}{" "}
										of {data.length} entries
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
											onClick={() => paginate(pageNumber)}
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
	);
};
