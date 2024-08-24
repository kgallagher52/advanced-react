import { styled } from "styled-components";

const Container = styled.div`
	display: flex;
`;

const Panel = styled.div`
	flex: 1; // equal width in container
`;

export const SplitScreen = ({ Left, Right }) => {
	return (
		<Container>
			<Panel>
				<Left />
			</Panel>
			<Panel>
				<Right />
			</Panel>
		</Container>
	);
};
