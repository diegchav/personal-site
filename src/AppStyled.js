import styled from 'styled-components';

const AppStyled = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.backgroundColor};
`;

export default AppStyled;