import React from "react";
import { graphql, PageProps } from "gatsby";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import styled from "styled-components";
import uuid from "uuid";
import { Button, TextField } from "@material-ui/core";
import { Form, Field } from "react-final-form";

import { createPost } from "../graphql/mutations.js";

const InputContainer = styled.div`
  .blog-title {
    grid-area: header;
  }
  .blog-subtitle {
    grid-area: subheader;
  }
  .blog-body {
    grid-area: body;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 300px;
  gap: 4rem;
  margin: 5rem;
  grid-template-areas:
    "header subheader"
    "body body";
`;

const TextFieldAdapter = ({ input, meta, ...rest }) => (
  <TextField
    {...input}
    {...rest}
    variant="outlined"
    onChange={(e, value) => input.onChange(e.target.value)}
  />
);

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 5rem;
`;

function CreateBlogPosts({ data }: PageProps) {
  const submitForm = async formValues => {
    const newPost = {
      content: formValues.blogBody,
      id: uuid(),
      imageSrc: '',
      title: formValues.blogTitle,
    };
    try {
      const response = await API.graphql(
        graphqlOperation(createPost, {
          input: newPost,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const required = (value) => (value ? undefined : "Required");

  return (
    <div>
      <AmplifyAuthenticator>
        <AmplifySignOut />
        <Form
          onSubmit={submitForm}
          render={({ handleSubmit, form }) => (
            <form onSubmit={handleSubmit}>
              <InputContainer>
                <Field
                  name="blogTitle"
                  className="blog-title"
                  component={TextFieldAdapter}
                  validate={required}
                  label="Blog Title"
                />
                <Field
                  name="blogSubtitle"
                  className="blog-subtitle"
                  component={TextFieldAdapter}
                  validate={required}
                  label="Blog Subtitle"
                />
                <Field
                  name="blogBody"
                  className="blog-body"
                  multiline
                  rows={10}
                  component={TextFieldAdapter}
                  validate={required}
                  label="Blog Body"
                />
              </InputContainer>
              <ButtonContainer>
                <Button
                  style={{ background: "green" }}
                  variant="contained"
                  type="submit"
                  color="primary"
                >
                  Create Post
                </Button>
                <Button
                  style={{ background: "red" }}
                  variant="contained"
                  color="secondary"
                  onClick={form.reset}
                >
                  Discard Post
                </Button>
              </ButtonContainer>
            </form>
          )}
        />
      </AmplifyAuthenticator>
    </div>
  );
}

export default CreateBlogPosts;
