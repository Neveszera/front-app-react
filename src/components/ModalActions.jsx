import styles from "../css/ModalActions.module.css";

export default function ModalActions(props) {
  if (props.open) {
    return (
      <>
        <div className={styles.container}>
          <h1>MODAL DE PRODUTOS</h1>
          <button onClick={() => props.setOpen(false)}>CLOSE-MODAL</button>
        </div>
      </>
    );
  }
}