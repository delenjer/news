import {NewsArticle} from '@/model/model';

// const URL = `https://newsdata.io/api/1/news?apikey=pub_${process.env.NEXT_PUBLIC_API_KEY}&country=ua&language=uk`;
const URL = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`;

export const getNews = async (): Promise<NewsArticle> => {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
