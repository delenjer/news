import {FC, useState} from 'react';
import {Details} from '@/components/Articles/Details/Details';

type ArticleProps = {
  title: string,
  description: string,
  imageUrl?: string,
  linkPage: string,
  content: string,
}

export const Article:FC<ArticleProps> = ({
  title,
  description,
  imageUrl,
  linkPage,
  content,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        className="article"
        onClick={() => setOpen(true)}
      >
        <h2 className="article-title">
          {title}
        </h2>

        <p className="article-description">
          {description}
        </p>
      </article>

      {
        open && (
          <Details
            imageUrl={imageUrl}
            linkPage={linkPage}
            content={content}
          />
        )
      }
    </>
  );
}
