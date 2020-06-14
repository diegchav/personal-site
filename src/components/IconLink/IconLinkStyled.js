import styled from 'styled-components';

const IconLinkStyled = styled.a`
    margin: 0 .25rem;

    & svg {
        color: ${props => props.color};
    }
`;

export default IconLinkStyled;