import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  border: 1px solid rgb(172, 169, 169);
  -webkit-box-shadow: 5px 5px 15px -5px #000000;
  box-shadow: 5px 5px 15px -5px #000000;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 12px;
  margin: 1rem;
  padding: 1rem;
`;

export const PostCard: FunctionComponent = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};
