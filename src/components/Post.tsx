import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import Avatar from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

interface AuthorProps {
  name: string
  role: string
  avatarUrl: string
}

interface ContentProps {
  type: 'paragraph' | 'link' | 'hashTag'
  content: string[]
}

interface PostProps {
  key: string
  author: AuthorProps
  publishedAt: Date
  content: ContentProps[]

}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState<string[]>([]);

  const [newCommentText, setNewCommentText] = useState("");

  const publisheDateFormatted = format(
    publishedAt,
    "dd' de 'LLLL' às 'HH:mm'h'",
    { locale: ptBR }
  );

  const publisheDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function deleteComments(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publisheDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publisheDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={uuid()}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={uuid()}>
                <a href="#">{line.content}</a>
              </p>
            );
          } else if (line.type === "hashTag") {
            return (
              <a key={uuid()} href="#">
                {line.content}
              </a>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={uuid()}
              content={comment}
              onDeleteComments={deleteComments}
            />
          );
        })}
      </div>
    </article>
  );
}

export default Post;
