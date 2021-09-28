import styled from 'styled-components';

const Container = styled.div`
    background-color: #fff;
    border-radius: 25px;
    height: 520px;
    width: 420px;
    box-shadow: rgb(0 0 0 / 20%) 4px 4px 10px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 600px) {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 0px;
    }
`;

export default Container;
