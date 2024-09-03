import { useEffect, useState } from "react";

export const ControlledForm = () => {
	const [err, setErr] = useState("");
	const [age, setAge] = useState("");
	const [name, setName] = useState("");

	/* Handle form validation */
	useEffect(() => {
		if (name.length < 1) {
			console.log("Name is required.");
			setErr("Name is required.");
		} else {
			setErr("");
		}
	}, [name]);

	/* State managed out side the form */
	return (
		<form>
			{err && <p>{err}</p>}
			<input
				name="name"
				type="text"
				placeholder="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				name="age"
				type="number"
				placeholder="Enter your age"
				value={age}
				onChange={(e) => setAge(e.target.value)}
			/>
			<button>Submit</button>
		</form>
	);
};
