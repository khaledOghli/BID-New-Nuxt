import type { Post } from './posts';

export interface Category {
  id: string;
  slug: string;
  name: string;
  count: number;
}

export interface CategoryDetails {
  id: string;
  slug: string;
  name: string;
  posts: Post[];
}

export const getCategoriesUrl = () => 'http://localhost:3001/categories';

export function getCategoryDetailsUrl(categorySlug: string) {
  return `http://localhost:3001/categories/${categorySlug}?_embed=posts`;
}
