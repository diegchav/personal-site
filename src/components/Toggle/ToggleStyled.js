import styled from 'styled-components';

const ToggleStyled = styled.div`
    height: 55px;
    display: flex;
    align-items: center;
    margin-left: auto;

    .container {
        width: 35px;
        height: 25px;
        border-radius: 100px;
        background-color: #1e88e5;
        display: flex;
        align-items: center;
        padding: 0 5px;
        cursor: pointer;

        .circle {
            width: 20px;
            height: 20px;
            border-radius: 100%;
            background-color: #fff;
            margin-left: ${props => props.isToggled ? 'auto' : '0'};
            z-index: 1;
        }
    }
`;

export default ToggleStyled;