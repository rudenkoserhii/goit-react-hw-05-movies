import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { LayoutStyled } from './Layout.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <LayoutStyled>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutStyled>
  );
};