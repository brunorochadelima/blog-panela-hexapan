import React from "react";
import imagem404 from "assets/img-404.png";
import styles from "pages/Pagina404.module.scss";
import Header from "components/Header";
import { Link } from "react-router-dom";

export default function Pagina404() {
  return (
    <>
      <Header />
      <div className={styles.pagina_404}>
        <div>
          <h1>OOOPS!!!</h1>
          <img src={imagem404} alt="Erro 404" />
          <p>Não encontramos esta página! 😞</p>
          <Link to="/" className={styles.botao__voltar}>
            <button>Quero Voltara para a página inicial</button>
          </Link>
        </div>
      </div>
    </>
  );
}
