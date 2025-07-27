// Common interfaces for the Next.js project

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  author: User;
  createdAt: string;
  updatedAt: string;
}

export interface HeaderProps {
  title?: string;
}

export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PageProps {
  title?: string;
  description?: string;
}
