import Button from "components/Button";
import Header from "components/Header";
import styles from './Anuncie.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { cadastrarItem } from "store/reducers/itens";
import { useParams } from "react-router-dom";


export default function Anuncie() {
    const dispatch = useDispatch();
    const { nomeCategoria = '' } = useParams();
    const categorias = useSelector(state => state.categorias.map(({nome, id}) => ({nome, id})));
    const { register, handleSubmit } = useForm({
        defaultValues: {
            categoria: nomeCategoria
        }
    });

    function cadastrar(data) {
        dispatch(cadastrarItem(data));
    }

    return (
        <>
       <Header 
        titulo='Anuncie aqui'
        descricao='Anuncie aqui a sua skill no melhor site de troca de ROK'
       />
       <form className={styles.formulario} onSubmit={handleSubmit(cadastrar)}>
        <input {...register('titulo', { required: true })} placeholder='Nome da Skill' alt='Nome da skill' />
        <input {...register('descricao', { required: true })} placeholder='Descrição da Skill' alt='descrição da skill' />
        <input {...register('foto', { required: true })}  placeholder='URL da imagem da skill' alt='url da imagem da skill' />
        <select 
        {...register('categoria', { required: true })}
        disabled={nomeCategoria}
        >
            <option value='' disabled>Selecione a categoria</option> 
            {categorias.map(categoria => (
                <option key={categoria.id} value={categoria.id}>
                    {categoria.nome}
                </option>
            ))}
        </select>
        <input {...register('preco', { required: true, valueAsNumber: true })} type='number' placeholder='Preço da skill' />
        <Button type='submit'>
            Cadastrar Skill
        </Button>
       </form>
        </>
    )
}