import { PencilLine } from 'phosphor-react'
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles["sidebar--cover"]}
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=245&q=80"
      />

      <div className={styles["sidebar--profile"]}>
        <img 
          className={styles["sidebar--avatar"]} 
          src="https://github.com/thiagostudier.png"
        />

        <strong className={styles["sidebar--name"]}>Thiago Studier</strong>
        <span className={styles["sidebar--role"]}>Frontend Developer</span>
      </div>

      <footer className={styles["sidebar--footer"]}>
        <a className={styles["sidebar--link"]} href="#">
          <PencilLine size={20} />

          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
