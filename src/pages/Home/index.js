import Header from 'components/Header';
import styles from './Home.module.scss';
import logo from 'assets/logo-rok.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from 'components/Button';

export default function Home() {
  const navigate = useNavigate();
  const categorias = useSelector(state => state.categorias);
  return (
    <div>
      <Header
        titulo='Wiki & Sale ROK'
        descricao='As melhores e mais baratas skills de Rise Of The Kings'
        imagem={logo}
        className={styles.header}
      >
        <Button onClick={() => navigate('/anuncie')}>
          Quero anunciar
        </Button>
      </Header>
      <div className={styles.categorias}>
        <div className={styles['categorias-title']}>
          <h1>
            Categorias
          </h1>
        </div>
        <div className={styles['categorias-container']}>
          {categorias.map((categoria, index) => (
            <div key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h1>{categoria.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}