import { useEffect, useState } from "react";
import ListaProdutos from "../Components/ListaProdutos";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function App() {
  
  const [lista, setLista] = useState([]);
  const [buscarproduto, setBuscarproduto] = useState(""); //novo estado para armazenar a informação na barra de pesquisa

  useEffect(() => { 
    const receberListaProdutos = async () => {
        try{
        const resposta = await fetch('https://fakestoreapi.com/products');
        const dados = await resposta.json();
        setLista(dados);
    } catch{
        console.error("conexão falhou");
    }
    }
    receberListaProdutos();
  }, []);

  if(lista.length === 0 ){
    return<h1>Carregando...</h1>
  } 
  //Ordem de A a Z, crescente. Usando o title para ordenar os titulos por ordem crescente, porém posso utitlizar outras propriedades como id, descripition...

  const orderedAz = () =>{
     const ordered =[...lista].sort((a, b) => a.title.localeCompare(b.title));//sort(HoFs) ordena. Utilizamos title que é uma prorpiedade da lista.
  setLista(ordered); //localeCompare é uma função que acessa a minha lista e faz o "cálculo" compra com o parâmetro b. Comparando a propriedade title e ordenando.
  }
  //ordem de Z a A, descrescente.
  const orderZa = () =>{
    const ordered = [...lista].sort((a, b) => b.title.localeCompare(a.title));
    setLista(ordered);
  }
 
  //Preço ordem descrecente
  const ordemPrecoDesc= () => {
    const ordered = [...lista].sort((a, b) => b.price - a.price); // Ordena do maior para o menor preço. b = maior a = menor
    setLista(ordered);
  }

  //Preço ordem crescente
  const ordemPrecoCres =() =>{
    const ordered = [...lista].sort((a, b) => a.price - b.price);// do maior para o menor
    setLista(ordered);
  }
  
  // retorna a lista de produtos firltradas com base no titulo
  const filtrarProdutos = () => {
    return lista.filter(produto => // filter array que retorna um novo arry que desejamos //parametro //includes verifica se um elemtro do titulo tem coerência e retorna true ou false
      produto.title.toLowerCase().includes(buscarproduto.toLowerCase()) // filtro que permite letrar maiúsculas e minúsculas
    );
  };
  
  

  return (
    <>
    <Header/>
    
    <button onClick={orderedAz}>Ordem de Az</button>

    <button onClick={orderZa}>Ordem de Za</button>

    <button onClick={ordemPrecoDesc}> Ordem preço do maior para o menor</button>

    <button onClick={ordemPrecoCres}>Ordem preço do menor para o maior</button>

    <input
        placeholder="Pesquisar por produto"
        onChange={(event) => setBuscarproduto(event.target.value)} // Atualiza o estado da pesquisa. //filtrarProdutos()  e renderizar essa função
      />
    <ListaProdutos lista ={filtrarProdutos()} /> 
  
    <Footer/>
    </>
  );
}