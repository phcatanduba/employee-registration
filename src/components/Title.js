import styled from 'styled-components';

export default function Title({ text }) {
    return <Text>{text}</Text>;
}

const Text = styled.p`
    color: #000;
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
