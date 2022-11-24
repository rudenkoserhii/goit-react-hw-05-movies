import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailsStyled = styled.div`

`;

export const AdditionalStyled = styled.ul`
    padding: ${p => p.theme.space[2]}px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${p => p.theme.space[4]}px;


`;

export const LinkStyled = styled(Link)`
    display: block;

    margin: ${p => p.theme.space[2]}px;

    font-size: 16px;

    font-style: normal;
    font-weight: 700;

`;

export const Wrap = styled.div`
    display: flex;
    justify-content: start;
    gap: ${p => p.theme.space[4]}px;

    padding: ${p => p.theme.space[2]}px;

`;

export const WrapSecond = styled.div`

`;

export const Title = styled.h1`
    display: block;


    font-size: 24px;

    font-style: normal;
    font-weight: 700;

    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);


`;

export const TitleSecond = styled.p`
    display: block;

    margin: ${p => p.theme.space[2]}px;

    font-size: 18px;

    font-style: italic;
    font-weight: 700;

    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

`;

export const ListItem = styled.li`
    margin-bottom: ${p => p.theme.space[4]}px;
    width: 200px;

    overflow: hidden;

    font-size: 12px;

`;

export const Text = styled.p`

`;
