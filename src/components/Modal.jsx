import { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	overflow: auto;
	background-color: #00000090;
	width: 100%;
	height: 100%;
`;
const ModalContent = styled.div`
	margin: 15% auto;
	padding: 24px;
	background-color: #72ffff;
	width: 50%;
`;

export const Modal = ({ children }) => {
	const [toggle, setToggle] = useState(false);

	return (
		<>
			<button onClick={() => setToggle(true)}>Show Modal</button>
			{toggle && (
				<ModalBackground onClick={() => setToggle(false)}>
					<ModalContent onClick={(e) => e.stopPropagation()}>
						<button onClick={() => setToggle(false)}>Hide Modal</button>

						{children}
					</ModalContent>
				</ModalBackground>
			)}
		</>
	);
};

/* 
	** Events in Javascript by default events bubble 
	So in this above code when I click the Hide Modal button,
	it will trigger that event then trigger ModalContent 
	onClick event which will stop the event from bubbling 
	up to the ModalBackground onClick event because of stopPropagation().
	and then trigger ModalBackground onClick event.
*/
