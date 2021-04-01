import React from "react";
import { graphql, PageProps, Link } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import { Button } from "@material-ui/core";
import styled from "styled-components";

import "../styles/normalize.css";

interface LandingQuery {
  data: {
    landingContent: {
      nodes: [
        {
          hero: {
            id: string;
            ctaText: string;
            name: string;
            title: string;
            image: {
              fluid: FluidObject;
            };
          };
        }
      ];
    };
  };
}

type LandingProps = PageProps & LandingQuery;

const StyledButton = styled(Button)`
  height: 75px;
  width: 300px;
`;

const ButtonContainer = styled.div`
  display: grid;
  background: rgb(122, 34, 195);
  background: linear-gradient(
    0deg,
    rgba(122, 34, 195, 1) 0%,
    rgba(69, 77, 126, 1) 32%
  );
  height: 28vh;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
  justify-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const IndexPage = ({ data }: LandingProps) => {
  return (
    <>
      <Img
        alt={data.landingContent.nodes[0].hero.title}
        fluid={data.landingContent.nodes[0].hero.image.fluid}
      />
      <ButtonContainer>
        <StyledLink to="/CreateBlogPost">
          <StyledButton variant="contained" color="primary">
            Create New Blog Post
          </StyledButton>
        </StyledLink>
        <StyledLink to="/BlogPosts">
          <StyledButton variant="contained" color="primary">
            To The Blog!
          </StyledButton>
        </StyledLink>
      </ButtonContainer>
    </>
  );
};

export const pageQuery = graphql`
  query landingQuery {
    landingContent: allContentfulLandingPage {
      nodes {
        hero {
          id
          ctaText
          name
          title
          image {
            fluid(maxWidth: 980) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
export default IndexPage;
