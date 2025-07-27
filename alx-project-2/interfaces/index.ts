// Common interfaces used throughout the application

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: User;
  createdAt: Date;
  updatedAt: Date;
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

export interface HeaderProps {
  title?: string;
  showNavigation?: boolean;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}
