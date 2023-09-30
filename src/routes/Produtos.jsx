import { useState, useEffect } from 'react'
import ModalActions from '../components/ModalActions'

export default function Produtos(){

    const [produtosApi, setProdutosApi] = useState([])

    useEffect(
        ()=>{
            fetch('http://localhost:5000/produtos')
            .then((resp)=> resp.json())
            .then((resp)=> setProdutosApi(resp))
            .catch((error)=> console.log(error))
        },[]
    )

    const handleDelete = (id)=>{
        fetch(`http://localhost:5000/produtos/${id}`,{method: 'delete'})
        .then(()=> (window.location = '/produtos'))
        .catch((error)=> console.log(error))
    }
    
    const [open, setOpen] = useState(false);

    return(
        <section>
            <button>Cadastrar Jogo</button>
            <h1>Lista de Jogos</h1>

            {open ? <ModalActions open={open} setOpen={setOpen}/> : ""}

            <button onClick={()=> setOpen(true)}>OPEN-MODAL</button>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Editar / Excluir</th>
                    </tr>
                </thead>
                <tbody>
                {produtosApi.map((prod)=> (
                    <tr key={prod.id}>
                        <td>{prod.nome}</td>
                        <td>{prod.desc}</td>
                        <td>{prod.preco}</td>
                        <td>
                            <button onClick={handleDelete.bind(this, prod.id)}  >Deletar</button>
                        </td>
                    </tr>
                ))
                }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4">Lista de Jogos em promoção!!!</td>
                    </tr>
                </tfoot>
            </table>
        </section>
    )
}