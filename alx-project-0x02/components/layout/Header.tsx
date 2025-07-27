import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "ALX Project 0x02" }) => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center">{title}</h1>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link 
                href="/" 
                className="hover:text-blue-200 transition-colors duration-200 font-medium"
              >
                Index
              </Link>
            </li>
            <li>
              <Link 
                href="/home" 
                className="hover:text-blue-200 transition-colors duration-200 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="hover:text-blue-200 transition-colors duration-200 font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/posts" 
                className="hover:text-blue-200 transition-colors duration-200 font-medium"
              >
                Posts
              </Link>
            </li>
            <li>
              <Link 
                href="/users" 
                className="hover:text-blue-200 transition-colors duration-200 font-medium"
              >
                Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
