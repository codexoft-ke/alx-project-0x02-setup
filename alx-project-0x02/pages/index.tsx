import React from 'react';
import { GetStaticProps } from 'next';
import Header from '../components/layout/Header';
import { PageProps } from '../interfaces';

interface HomeProps extends PageProps {
  currentTime: string;
}

export default function Home({ title, currentTime }: HomeProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={title} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to ALX Project 0x02!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              This is a Next.js project with TypeScript and Tailwind CSS, 
              built following modern web development best practices.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Project generated at: {currentTime}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                🚀 Next.js
              </h3>
              <p className="text-gray-600">
                Built with Next.js for server-side rendering and optimal performance.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                💙 TypeScript
              </h3>
              <p className="text-gray-600">
                Enhanced with TypeScript for better development experience and type safety.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                🎨 Tailwind CSS
              </h3>
              <p className="text-gray-600">
                Styled with Tailwind CSS for rapid and consistent UI development.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              🛠️ Getting Started
            </h3>
            <ul className="text-blue-700 space-y-2">
              <li>• Edit <code className="bg-blue-100 px-2 py-1 rounded text-sm">pages/index.tsx</code> to modify this page</li>
              <li>• Add your components in the <code className="bg-blue-100 px-2 py-1 rounded text-sm">components/</code> directory</li>
              <li>• Define interfaces in <code className="bg-blue-100 px-2 py-1 rounded text-sm">interfaces/index.ts</code></li>
              <li>• Add images to <code className="bg-blue-100 px-2 py-1 rounded text-sm">public/assets/images/</code></li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 ALX Project 0x02. Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      title: "ALX Project 0x02 - Next.js Setup",
      currentTime: new Date().toISOString(),
    },
  };
};
