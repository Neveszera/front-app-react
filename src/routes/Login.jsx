import { useRef } from 'react'
import Produtos from './Produtos';

export default function Login() {

    const user = useRef();
    const password = useRef();

    const getUser = sessionStorage.getItem('userData');
    const getPassword = sessionStorage.getItem('senhaData')

    const handleSubmit = () => {
        if (user.current.value === 'Admin' && password.current.value === '123456') {
            //AUTENTICÃO COM TOKEN
            let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
            sessionStorage.setItem('userData', 'Admin');
            sessionStorage.setItem('senhaData', token)
        } else {
            alert("Usuario ou senha invalidos !!!")
        }
    }

    return (
        <section>
            {/*  if ternario*/}
            {getUser && getPassword ? (
                <Produtos />
            ) : (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="usuario">USUÁRIO:</label>
                    <input type="text" ref={user} />
                    <label htmlFor="password">Senha:</label>
                    <input type="password" ref={password} />
                    <input type="submit" value="Login" />
                </form>
            )}
        </section>
    )
}