import { apiRequest } from "../helper/apiHelper";

export interface Blog {
  image: string;
  id: string;
  title: string;
  body: string;
  author: {
    name: string;
    email: string;
  };
  // Add other relevant fields
}

export interface BlogResponse {
  status: boolean;
  message: string;
  data: {
    posts: Blog[];
    total: number;
    currentPage: number;
    nextPageUrl: string | null;
    prevPageUrl: string | null;
  };
  errors: any[];
}

export async function fetchBlogs(): Promise<BlogResponse> {
  const url = `https://v2.climrenew.com/api/v2/admin/blog/list`;
  return await apiRequest<BlogResponse>(url, {
    method: 'GET',
  });
}
