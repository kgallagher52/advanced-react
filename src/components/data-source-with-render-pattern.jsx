/* 
This component is the same as data-source.jsx, but it uses the render pattern
*/

import { useEffect, useState } from "react";

export const DataSourceRenderPattern = ({ getData = () => {}, render }) => {
	const [resource, setResource] = useState(null);

	useEffect(() => {
		(async () => {
			const data = await getData();
			setResource(data);
		})();
	}, [getData]);

	return render(resource);
};
