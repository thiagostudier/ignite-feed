import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles['post--header']}>
        <div className={styles['post--author']}>
          <img 
            className={styles["post--avatar"]} 
            src="https://github.com/thiagostudier.png"
          />

          <div class={styles['post--author-info']}>
            <strong className={styles["post--name"]}>Thiago Studier</strong>
            <span className={styles["post--role"]}>Frontend Developer</span>
          </div>
        </div>

        <time 
          title="21 de Setembro às 08:13"
          dateTime="2023-09-21 00:00:00"
          className={styles["post--time"]}
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles['post--content']}>
        <p>Fala galera</p>
        <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat.</p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentary}>
        <strong className={styles['commentary--title']}>
          Deixe seu comentário
        </strong>

        <textarea 
          className={styles['commentary--textarea']} 
          placeholder="Deixe seu comentário" 
        />

        <footer className={styles['commentary--footer']}>
          <button 
            className={styles['commentary--button']} 
            type="submit"
          >
            Comentar
          </button>
        </footer>
      </form>
    </article>
  );
}