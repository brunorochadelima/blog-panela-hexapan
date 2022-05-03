import React from 'react';
import Card from './Card';
import cards from 'data/cards.json';
import styles from 'components/Cards/GridCards.module.scss';

interface Props {
  busca: string;
}

export default function GridCards(props: Props) {
  const [lista, setLista] = React.useState(cards);
  const { busca } = props;

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  React.useEffect(() => {
    const novaLista = cards.filter((item) => testaBusca(item.title));
    setLista(novaLista);
  }, [busca]);

  return (
    <div className={styles.grid_card}>
      {lista.map((item) => (
        <Card key={item.title} {...item} />
      ))}
    </div>
  );
}
