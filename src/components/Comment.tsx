import { Avatar } from './Avatar'

import { Trash, ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'
import { useState } from 'react'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/thiagostudier.png" />

        <div className={styles["comment--box"]}>
          <div className={styles["comment--content"]}>
            <header className={styles["comment--header"]}>
              <div className={styles["comment--authorAndTime"]}>
                <strong className={styles["comment--name"]}>Diego Fernandes</strong>
                
                <time 
                  title="21 de Setembro às 08:13"
                  dateTime="2023-09-21 00:00:00"
                  className={styles["comment--time"]}
                >
                  Cerca de 2h atrás
                </time>
              </div>

              <button 
                title="Deletar comentário" 
                className={styles["comment--delete"]}
                onClick={handleDeleteComment}
              >
                <Trash size={24} />
              </button>
            </header>

            <p>{content}</p>
          </div>

          <footer className={styles["comment--footer"]}>
            <button 
              className={styles["comment--like"]}
              onClick={handleLikeComment}
            >
              <ThumbsUp size={20} />
                Aplaudir
                <span className={styles["comment--num-likes"]}>
                  {likeCount}
                </span>
            </button>
          </footer>
        </div>
    </div>
  )
}