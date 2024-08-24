export const NumberedList = ({ items, sourceName, ItemComponent }) => {
	return (
		<>
			{items.map((item, i) => (
				<>
					<h3> {i + 1} </h3>
					<ItemComponent
						key={i}
						{...{ [sourceName]: item }} // Dynamic object key because we don't know if it's an author or book
					/>
				</>
			))}
		</>
	);
};
