import styled from 'styled-components';

export const SearchForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${p => p.theme.space[3]}px;



    margin: ${p => p.theme.space[4]}px;

    font-size: 16px;

    font-style: normal;
    font-weight: 700;


`;
export const SearchFormButton = styled.button`

    width: ${p => p.theme.space[7]}px;
    height: ${p => p.theme.space[5]}px;



    border-radius: 8px;
border: none;
cursor: pointer;

    background-color: ${p => p.theme.colors.lightred};
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);



`;

export const SearchFormButtonLabel = styled.span`

    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;

    text-decoration: none;
    text-align: center;

`;

export const SearchFormInput = styled.input`

    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    padding: ${p => p.theme.space[2]}px;


    text-decoration: none;

    border-radius: 8px;
    border: none;

    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

    :enabled {outline-color: ${p => p.theme.colors.red};};

`;