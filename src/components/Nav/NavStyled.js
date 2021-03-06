import styled from 'styled-components';

const HeaderStyled = styled.nav`
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 3rem;
    border-bottom: 1px solid ${props => props.borderColor};

    .logo {
        cursor: pointer;
    }
`;

export default HeaderStyled;