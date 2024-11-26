import styles from '../styles/listaProdutos.module.css'
export default function ListaProdutos({lista}) {
       return(
        <>
         <div class = "container-produtos">
            <main>
               <ul className={styles.blocolista}>
                 {lista.map(produto => (
                  <li key  = {produto.id}>
                      <h2>{produto.title}</h2>
                      <p>{produto.description}</p>
                      <p>Valor :R${produto.price}</p>
                      <img src={produto.image} alt={produto.title} width={100} />
                      </li>
                  ))}
                </ul>
            </main>
            </div>

            </>
        );
}