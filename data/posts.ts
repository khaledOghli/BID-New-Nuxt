import type { Category } from './categories';

export interface Post {
  id: string;
  slug: string;
  category: Category;
  title: string;
  intro: string;
}

export interface PostDetails {
  id: string;
  slug: string;
  category: Category;
  title: string;
  content: string;
}

export const getPostsUrl = () => 'http://localhost:3001/posts';

export function getPostDetailsUrl(postSlug: string) {
  return `http://localhost:3001/post-details/${postSlug}?_expand=category`;
}

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(getPostsUrl());
  return res.json();
}
