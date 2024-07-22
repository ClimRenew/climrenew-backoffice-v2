import { apiRequest } from "../helper/apiHelper";

export interface Blog {
  image: any;
  id: string;
  title: string;
  body: string;
  author: {
    name: string;
    email: string;
  };
  // post:any;
}

export interface BlogResponse {
  status: boolean;
  message: string;
  data: {
    post: any;
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

export async function createBlog(formData: FormData): Promise<BlogResponse> {
  const url = `https://v2.climrenew.com/api/v2/admin/blog/create`;
  return await apiRequest<BlogResponse>(url, {
    method: 'POST',
    body: formData,
  });
}

export async function deleteBlog(id: string): Promise<BlogResponse> {
  const url = `https://v2.climrenew.com/api/v2/admin/blog/delete/${id}`;
  return await apiRequest<BlogResponse>(url, {
    method: 'POST',
  });
}

export async function updateBlog(id: string, formData: FormData): Promise<BlogResponse> {
  const url = `https://v2.climrenew.com/api/v2/admin/blog/edit/${id}`;
  return await apiRequest<BlogResponse>(url, {
    method: 'POST', 
    body: formData,
  });
}