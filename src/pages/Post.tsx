import React from 'react';
import { useParams } from 'react-router-dom';
import cards from 'data/cards.json';
import { useNavigate } from 'react-router-dom';
import styles from './Post.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import Pagina404 from 'pages/Pagina404';

export default function Post() {
  const { id } = useParams();
  const post = cards.find((item) => item.id === Number(id));
  if (!post) {
    return <Pagina404 />;
  }

  const navigate = useNavigate();

  return (
    <section className={stylesTema.container}>
      <article>
        <h1 className={styles.post__titulo}>{post.title}</h1>
        <div className={styles.post__img__container}>
          <img className={styles.post__img} src={post.photo} alt={post.title} />
        </div>
        <p className={styles.post__data}>{post.date}</p>
        <p className={styles.post__descricao}>{post.description.paragrafo_1}</p>
        <p className={styles.post__descricao}>{post.description.paragrafo_2}</p>
        <p className={styles.post__descricao}>{post.description.paragrafo_3}</p>
        <button className={styles.post__voltar} onClick={() => navigate(-1)}>
          {'< Voltar'}
        </button>
      </article>
    </section>
  );
}
