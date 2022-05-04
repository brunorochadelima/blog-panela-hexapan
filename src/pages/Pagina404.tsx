import React from 'react';
import imagem404 from 'assets/img-404.png';
import styles from 'pages/Pagina404.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Pagina404() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.pagina_404}>
        <div>
          <h1>OOOPS!!!</h1>
          <img src={imagem404} alt="Erro 404" />
          <p>Não encontramos esta página! 😞</p>
        </div>
        <button className={styles.botao__voltar} onClick={() => navigate(-1)}>
          {'< Voltar'}
        </button>
      </div>
    </>
  );
}
