import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css'
import { useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Post({ author, publishedAt, content }) {

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

  const [comments, setComments] = useState(['Post muito bacana'])

  const [newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment() {
    event.preventDefault()

    /** Atualizar os dados dos comentários */
    setComments([...comments, newCommentText])

    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  return (
    <article className={styles.post}>
      <header className={styles['post--header']}>
        <div className={styles['post--author']}>
          <Avatar src={author.avatarUrl} />

          <div className={styles['post--author-info']}>
            <strong className={styles["post--name"]}>{ author.name }</strong>
            <span className={styles["post--role"]}>{ author.role }</span>
          </div>
        </div>

        <time 
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
          className={styles["post--time"]}
        >
          {publishedDateRelativeNow}
        </time>
      </header>

      <div className={styles['post--content']}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentary}>
        <strong className={styles['commentary--title']}>
          Deixe seu comentário
        </strong>

        <textarea 
          name="content"
          className={styles['commentary--textarea']} 
          placeholder="Deixe seu comentário" 
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <footer className={styles['commentary--footer']}>
          <button 
            className={styles['commentary--button']} 
            type="submit"
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles['commentary--list']}>
        {comments.map(comment => {
          return <Comment content={comment} />
        })}
      </div>
    </article>
  );
}