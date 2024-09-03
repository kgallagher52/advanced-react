export const BookInfo = ({ book }) => {
	const { name, price, title, pages } = book || {};
	return book ? (
		<>
			<h3>{name}</h3>
			<p>{price}</p>
			<h2>Title: {title}</h2>
			<p># of Pages: {pages}</p>
		</>
	) : (
		<h1>Loading Books . . .</h1>
	);
};
