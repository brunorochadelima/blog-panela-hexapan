import React from 'react';
import { useParams } from 'react-router-dom';
import cards from 'data/cards.json';

export default function Post() {
  const { id } = useParams();
  const post = cards.find((item) => item.id === Number(id));
  if (!post) {
    return 'null';
  }

  return (
    <section>
      <article>
        <h1>{post.title}</h1>
      </article>
    </section>
  );
}
