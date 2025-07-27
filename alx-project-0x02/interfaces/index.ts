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

export interface CardProps {
  title: string;
  content: string;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: { title: string; content: string }) => void;
}

export interface NewPost {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
