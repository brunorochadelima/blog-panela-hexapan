import React from "react";
import { useParams } from "react-router-dom";
import cards from "../components/Cards/cards.json";

//type Props = typeof cards[0];

export default function Post() {
  //const { id } = useParams();
  //const { title, description } = props;

  return (
    <main>
      <article>
        <h2>{}</h2>
        <p>{}</p>
      </article>
    </main>
  );
}
