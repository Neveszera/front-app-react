import { useEffect, useState } from "react";
import styles from "../css/ModalActions.module.css";

export default function ModalActions(props) {
  const id = props.id;

  const [produto, setProduto] = useState({
    id: props.id,
    nome: "",
    desc: "",
    preco: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5000/produtos/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((response) => setProduto(response)) //
      .catch((error) => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    //Destructuring
    const { name, value } = e.target;

    //Inserindo os dados no useState produto.
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Realizando o Editar/UPDATE de fato para a API
    fetch(`http://localhost:5000/produtos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto)
    })
      .then((response) => console.log(response.status))
      .catch((error) => console.log(error));

    props.setOpen(false);

  };

  if (props.open) {
    return (
      <div className={styles.container}>
        <h1>PRODUTOS</h1>
        <button onClick={() => props.setOpen(false)}>CLOSE-MODAL</button>

        <div>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Dados do Produto</legend>
              <div>
                <label htmlFor="idNome">Nome</label>
                <input
                  type="text"
                  name="nome"
                  id="idNome"
                  value={produto.nome}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="idDesc">Descrição</label>
                <input
                  type="text"
                  name="desc"
                  id="idDesc"
                  value={produto.desc}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="idPreco">Preço</label>
                <input
                  type="number"
                  name="preco"
                  id="idPreco"
                  value={produto.preco}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button>EDITAR</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
