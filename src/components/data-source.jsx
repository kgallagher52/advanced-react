/* 
This component doesn't even know where the data is coming from 
the most generic out of our data components 
*/

import React, { useEffect, useState } from "react";

export const DataSource = ({ getData = () => {}, resourceName, children }) => {
	const [resource, setResource] = useState(null);

	useEffect(() => {
		(async () => {
			const data = await getData();
			setResource(data);
		})();
	}, [getData]);

	return (
		<>
			{React.Children.map(children, (child) => {
				/* Validation */
				if (React.isValidElement(child)) {
					/* Clone the element so we can pass additional props to it */
					return React.cloneElement(child, { [resourceName]: resource });
				}
				return child;
			})}
		</>
	);
};
