import { useEffect, useState } from "react";
import ListaProdutos from "../Components/ListaProdutos";

export default function App() {
  
  const [lista, setLista] = useState([]);

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

  return (
    <>
    <ListaProdutos lista ={lista} />
    </>
  );
}