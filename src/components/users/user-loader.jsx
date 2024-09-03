import axios from "axios";
import React, { useEffect, useState } from "react";

export const UserLoader = ({ userId, children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		(async () => {
			const res = await axios.get(`/users/${userId}`);
			console.log(res.data);
			setUser(res.data);
		})();
	}, [userId]);

	return (
		<>
			{React.Children.map(children, (child) => {
				// Validation
				if (React.isValidElement(child)) {
					/* Clone the element so we can pass additional props to it */
					return React.cloneElement(child, { user });
				}
				return child;
			})}
		</>
	);
};
