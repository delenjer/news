'use client'

import {useQuery} from '@tanstack/react-query';
import {getNews} from '@/api/api';
import {ArticleDto} from '@/model/model';
import {Article} from '@/components/Articles/Article/Article';
import {MainTitle} from '@/components/MainTitle/MainTitle';

export const Articles = () => {
  const { data, isLoading } = useQuery(['articles'], getNews);

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <section>
      <MainTitle />

      <div className="container">
        {
          data?.articles.map((article:ArticleDto, index:number) => (
            <Article
              key={`${index}_${article.source.id}`}
              title={article.title}
              description={article.description}
              imageUrl={article.urlToImage}
              linkPage={article.url}
              content={article.content}
            />
          ))
        }
      </div>
    </section>
  )
}
