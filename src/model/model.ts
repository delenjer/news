// export interface NewsArticle {
//   nextPage: string;
//   results: ArticleDto[];
//   status: string;
//   totalResults: number;
// }
//
// export interface ArticleDto {
//   category?: string[];
//   content: string;
//   country: string[];
//   creator?: unknown;
//   description: string;
//   image_url?: string;
//   keywords?: string[];
//   language?: string;
//   link: string;
//   pubDate?: string;
//   source_id?: string;
//   title: string;
//   video_url?: string;
// }

export interface NewsArticle {
  status: string;
  totalResults: number;
  articles: ArticleDto[];
}

export interface ArticleDto {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
}

interface Source {
  id: string;
  name: string;
}
