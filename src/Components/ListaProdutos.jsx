import styles from '../styles/listaProdutos.module.css'
import Header from './Header';
export default function ListaProdutos({lista}) {
       return(
        <>

            <main>
               <ul className={styles.blocolista}>
                 {lista.map(produto => (
                  <li class = "item-produtos" key  = {produto.id}>
                      <h2>{produto.title}</h2>
                      <p>{produto.description}</p>
                      <p>Preço: R${produto.price}</p>
                      <img src={produto.image} alt={produto.title} width={100} />
                      </li>
                  ))}
                </ul>
            </main>
            </>
        );
}