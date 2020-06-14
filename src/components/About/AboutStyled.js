import styled from 'styled-components';

const AboutStyled = styled.div`
    text-align: center;

    .name {
        color: #1e88e5;
        font-size: 3rem;
        line-height: .5rem;
    }

    hr {
        border: 1px solid #bbb;
    }

    .role {
        color: #1e88e5;
        font-size: 2rem;
        line-height: 1rem;
    }

    @media (min-width: 768px) {
        .name {
            font-size: 4rem;
            line-height: 1rem;
        }

        .role {
            font-size: 2.5rem;
            line-height: 1.5rem;
        }
    }

    @media (min-width: 1024px) {
        .name {
            font-size: 5rem;
            line-height: .5rem;
        }

        .role {
            font-size: 2.5rem;
            line-height: 1rem;
        }
    }
`;

export default AboutStyled;