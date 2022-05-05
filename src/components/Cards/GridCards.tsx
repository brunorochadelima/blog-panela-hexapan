import React from 'react';
import Card from './Card';
import cards from 'data/cards.json';
import styles from 'components/Cards/GridCards.module.scss';
import { useNavigate } from 'react-router-dom';

interface Props {
  busca: string;
}

export default function GridCards(props: Props) {
  const navigate = useNavigate();
  const [lista, setLista] = React.useState(cards);
  const { busca } = props;

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function redirecionaParaDetalhes(post: typeof cards[0]) {
    navigate(`/post/${post.id}`, { state: { post } });
  }

  React.useEffect(() => {
    const novaLista = cards.filter((item) => testaBusca(item.title));
    setLista(novaLista);
  }, [busca]);

  return (
    <div className={styles.grid_card}>
      {lista.map((item) => (
        <div key={item.title} onClick={() => redirecionaParaDetalhes(item)}>
          <Card {...item} />
        </div>
      ))}
    </div>
  );
}
