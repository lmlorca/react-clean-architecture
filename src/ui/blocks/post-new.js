import React from "react";
import { Card, TextInput, TextArea } from "../elements";

export function NewPost({ post, setPost }) {
  return (
    <Card
      title={
        <TextInput
          onChange={(e) => setPost({ title: e.target.value, body: post.body })}
          value={post.title}
        />
      }
      content={
        <TextArea
          onChange={(e) => setPost({ title: post.title, body: e.target.value })}
          value={post.body}
        />
      }
    />
  );
}
