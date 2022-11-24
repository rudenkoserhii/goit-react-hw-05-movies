import { Wrap, NavLinkStyled } from './AppBar.styled';

export const AppBar = () => {

    return (
        <Wrap>
            <li key="Home">
                <NavLinkStyled to={'/'}>Home</NavLinkStyled>
            </li>
            <li key="Movies">
                <NavLinkStyled to={'movies'}>Movies</NavLinkStyled>
            </li>
        </Wrap>
    )
};