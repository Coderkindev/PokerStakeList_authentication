import styled from 'styled-components';

export const Container = styled.div`
	// background-color: #fff;
	max-width: 65rem;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	// box-shadow: 1px 1px 0.8rem rgba(0, 0, 0, 0.15);
	border-radius: 3px;
	align-items: center;
`;

export const Header = styled.h1`
	margin-bottom: 3rem;
	font-weight: lighter;
	// text-align: center;
`;

export const ControlsContainer = styled.div`
	margin-top: 3rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const GetStartedButton = styled.button`
	margin-top: 2rem;
	background-color: #318ffb;
	color: #fff;
	width: 100%;
	cursor: pointer;
	font-size: 1.8rem;
	padding: 1.2rem 2.4rem;
	font-family: inherit;
	border: none;
	margin-bottom: 2rem;
	// box-shadow: 1px 1px 0.5rem rgba(0, 0, 0, 0.35);
`;

export const ControlButtonBack = styled.button`
	cursor: pointer;
	padding: 1rem 3rem;
	background-color: transparent;
	border: 1px solid #fff;
	font-family: inherit;
	font-size: 1.8rem;
	font-weight: bold;
	color: #fff;
`;

export const ControlButtonNext = styled.button`
	cursor: pointer;
	padding: 1rem 3rem;
	background-color: #318ffb;
	color: #fff;
	border: none;
	font-family: inherit;
	font-size: 1.8rem;
	// font-weight: lighter;
`;

export const InputContainer = styled.input`
	width: 100%;
	padding: 1rem;
	border: none;
	font-size: 1.8rem;
	font-family: inherit;
	border-bottom: 2px solid black;
	margin-bottom: 1rem;
`;

export const BoldWord = styled.span`font-weight: normal;`;

export const RowContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding: 0 3rem;
`;
