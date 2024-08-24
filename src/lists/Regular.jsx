/* Functional component */
export const RegularList = ({ items, sourceName, ItemComponent }) => {
	return (
		<>
			{items.map((item, i) => (
				<ItemComponent
					key={i}
					{...{ [sourceName]: item }} // Dynamic object key because we don't know if it's an author or a book
				/>
			))}
		</>
	);
};
