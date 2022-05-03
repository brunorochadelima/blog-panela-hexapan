import GridCards from 'components/Cards/GridCards';
import Header from 'components/Header';
import InputSearch from 'components/InputSearch';
import React from 'react';
import styles from '../pages/Home.module.scss';

function Home() {
  const [busca, setBusca] = React.useState('');
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.centralizar}>
          <h1 className={styles.titulo_destaque}>
            Uma panela como <br />
            você nunca imaginou
          </h1>
          <p className={styles.subtitulo_destaque}>
            A união perfeita da tecnologia com o design
          </p>
          <InputSearch busca={busca} setBusca={setBusca} />
        </div>
        <GridCards busca={busca} />
      </div>
    </div>
  );
}

export default Home;
