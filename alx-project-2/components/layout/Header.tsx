import React from 'react';

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
              <a 
                href="/" 
                className="hover:text-blue-200 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                className="hover:text-blue-200 transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                className="hover:text-blue-200 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
