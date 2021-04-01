import React from "react";
import { graphql, PageProps } from "gatsby";
import styled from 'styled-components'

import { PostCard } from '../components/PostCard'

interface PostItem {
  id: string;
  title: number;
  content: string;
}

interface BogPostsPageProps extends PageProps {
  data: {
    gatsbyappsync: {
      listPosts: {
        items: PostItem[];
      };
    };
  };
}

const PostsContainer = styled.div`
    margin: auto;
    display: flex; 
    overflow-y: scroll;
    flex-direction: column; 
    justify-content: space-evenly;
    max-width: 800px;
`

function BlogPosts({ data }: BogPostsPageProps) {
  return (
    <>
      <PostsContainer>
        {data.gatsbyappsync.listPosts.items.map((post) => (
          <PostCard key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </PostCard>
        ))}
      </PostsContainer>
    </>
  );
}

export const pageQuery = graphql`
  query GetAllBlogPostsAndComments {
    gatsbyappsync {
      listPosts(limit: 1000) {
        items {
          id
          title
          content
        }
      }
      listComments(limit: 50) {
        items {
          id
          content
        }
      }
    }
  }
`;

export default BlogPosts;
