import { useState } from "react";
import { Trash, ThumbsUp } from "phosphor-react";
import Avatar from "./Avatar";

import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComments }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComments(content);
  }

  function hanhleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/ricardroberg.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ricard Roberg</strong>
              <time
                title="25 de Julho de 2022 às 10:30h"
                dateTime="2022-07-25 10:30:00"
              >
                Cerca de 2h
              </time>
            </div>
            <button
              onClick={(id) => handleDeleteComment(id)}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={hanhleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
