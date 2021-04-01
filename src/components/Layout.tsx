import React from 'react';
import styled from 'styled-components';

import Nav from "./Nav"

const StyledBorder = styled.div`
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const StyledContent = styled.div`
  background: white;
`;

interface LayoutProps {
    children: JSX.Element
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <StyledBorder>
        <StyledContent>
          {/* @ts-ignore */}
          <Nav />
          {children}
        </StyledContent>
      </StyledBorder>
    </>
  );
}
