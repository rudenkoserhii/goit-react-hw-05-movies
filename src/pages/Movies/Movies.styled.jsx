import styled from 'styled-components';

export const MoviesListStyled = styled.ul`

position: relative;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${p => p.theme.space[4]}px;


`;

export const ListItem = styled.li`
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    :hover, :focus {transform: scale(1.01); transition: transform 150ms;}
`;

export const Title = styled.h1`


    padding: ${p => p.theme.space[4]}px;

    font-style: normal;
    font-weight: 700;

    text-transform: uppercase;
    text-align: center;
    color: ${p => p.theme.colors.text};
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

`;

export const TitleMovie = styled.h2`

position: absolute;

    margin: ${p => p.theme.space[1]}px;
max-width: 200px;



    font-size: 12px;

    font-style: normal;
    font-weight: 700;

    text-align: left;
    color: ${p => p.theme.colors.white};
    text-shadow: 2px 2px 2px ${p => p.theme.colors.black};


`;

export const Img = styled.img`
    border-radius: 8px;


`;

