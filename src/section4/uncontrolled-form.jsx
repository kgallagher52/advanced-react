import React from "react";

export const UncontrolledForm = () => {
	/* We have to use React.createRef() to create a reference to the input fields since we need access to those at a parent level */
	const nameInputRef = React.createRef();
	const ageInputRef = React.createRef();

	const submitHandler = (e) => {
		console.log(nameInputRef.current.value, ageInputRef.current.value);
		/* Prevent page from refreshing */
		e.preventDefault();
	};

	return (
		<form onSubmit={submitHandler}>
			<input
				name="name"
				type="text"
				placeholder="Name"
				ref={nameInputRef}
			/>
			<input
				name="age"
				type="number"
				placeholder="Enter your age"
				ref={ageInputRef}
			/>
			<input
				type="submit"
				value="Submit"
			/>
		</form>
	);
};
