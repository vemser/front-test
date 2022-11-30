import styles from './Header.module.scss';
import TituloComImagem from './TituloComImagem';
import TituloSemImagem from './TituloSemImagem';
//o h1 recebe o título por meio de props do header
//no header vamos colocar titulo, descricao e um className genérico
//className como '' para o caso dele não ter nada e não
//retornar undefined
export default function Header({ 
  titulo, 
  descricao, 
  className = '', 
  imagem,
  children
}) {
  return (
    <header className={styles.header}>
      {titulo && !imagem &&
        <TituloSemImagem
          titulo={titulo}
          descricao={descricao}
        >
          {children}
        </TituloSemImagem>
      }
      {titulo && imagem &&
        <TituloComImagem
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        >
          {children}
        </TituloComImagem>
      }
    </header>
  )
}