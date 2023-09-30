import { Link } from "react-router-dom";

export default function Erro(){
    return(
        <>
            <h1>PÁGINA NÃO ENCONTRADA</h1>
            <p>Voltar para a Página inicial: <span><Link to="/">VOlTAR</Link></span></p>
        </>
    )
}