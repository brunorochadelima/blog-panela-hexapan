import React from 'react';
import styles from '../components/InputSearch.module.scss';
import { RiSearch2Line } from 'react-icons/ri';

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputSearch({ busca, setBusca }: Props) {
  return (
    <div className={styles.buscador}>
      <input 
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
        type="search" placeholder="Buscar post..." />
      <RiSearch2Line size={25} />
    </div>
  );
}