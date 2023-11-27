type CloseIconProps = {
	circle?: boolean;
};

type SortIconProps = {
	type?: "both" | "asc" | "desc";
};

export const CloseIcon: React.FC<CloseIconProps> = (
	{ circle } = { circle: false }
) => (
	<svg
		width="30"
		height="30"
		viewBox="0 0 30 30"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		{circle ? <circle cx="15" cy="15" r="11.25" fill="#1A1B25" /> : null}
		<path
			d="M20 10L10 20"
			stroke={circle ? "#F2F6F7" : "#1A1B25"}
			strokeWidth="1.2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M10 10L20 20"
			stroke={circle ? "#F2F6F7" : "#1A1B25"}
			strokeWidth="1.2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const SortIcon: React.FC<SortIconProps> = (
	{ type } = { type: "both" }
) => {
	const primaryColor = "#DCDCDC";
	const secondaryColor = "#7A80DD";
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10.1921 3.23047L13.9065 7.68785C14.3408 8.20891 13.9702 9 13.292 9L6.70803 9C6.02976 9 5.65924 8.20892 6.09346 7.68785L9.80794 3.23047C9.90789 3.11053 10.0921 3.11053 10.1921 3.23047Z"
				fill={type === "asc" ? secondaryColor : primaryColor}
			/>
			<path
				d="M9.80794 16.7695L6.09346 12.3121C5.65924 11.7911 6.02976 11 6.70803 11L13.292 11C13.9702 11 14.3408 11.7911 13.9065 12.3121L10.1921 16.7695C10.0921 16.8895 9.90789 16.8895 9.80794 16.7695Z"
				fill={type === "desc" ? secondaryColor : primaryColor}
			/>
		</svg>
	);
};
