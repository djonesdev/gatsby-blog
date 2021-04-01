import { graphql, PageProps, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledNavBar = styled.div`
  height: 100px;
  display: flex; 
  justify-content: center;
  align-items: center;
  background: rgb(122, 34, 195);
  background: linear-gradient(
    0deg,
    rgba(122, 34, 195, 1) 0%,
    rgba(69, 77, 126, 1) 32%
  );
  p {
    margin: 0;
    color: white;
    font-size: 2em;
  }
`;

type CommentType = {
  content: string;
  id: string;
};

interface PostItems {
  title: string;
  content: string;
  comments: {
    items: CommentType;
  };
}

interface BlogPosts {
  name: string;
  posts: PostItems;
}

interface AllBlogData extends PageProps {
  data: {
    gatsbyappsync: {
      getBlog: BlogPosts;
    };
  };
}

function Nav({ data }: AllBlogData) {
  const { blog } = useStaticQuery(graphql`
    query GetBlog {
      blog: gatsbyappsync {
        getBlog(id: "49808ba3-a1cc-4cdf-95da-d22cbc0cfa2b") {
          name
        }
      }
    }
  `);

  console.log(blog, "blog")
  return (
    <StyledNavBar>
      <p>{blog.getBlog.name}</p>
    </StyledNavBar>
  );
}

export default Nav;
