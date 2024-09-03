/* most generic more then both current-user-loader & user-loader */

import axios from "axios";
import React, { useEffect, useState } from "react";

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
	const [resource, setResource] = useState(null);

	useEffect(() => {
		(async () => {
			const res = await axios.get(resourceUrl);
			setResource(res.data);
		})();
	}, [resourceUrl]);

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
