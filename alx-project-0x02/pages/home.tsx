import React from 'react';
import { GetStaticProps } from 'next';
import Header from '../components/layout/Header';
import { PageProps } from '../interfaces';

interface HomePageProps extends PageProps {
  currentTime: string;
}

export default function HomePage({ title, currentTime }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Home - ALX Project 0x02" />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Welcome to the Home Page
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              This is the home page of our Next.js application. Here you can find 
              an overview of our project and its features.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Page loaded at: {currentTime}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                🏠 Home Features
              </h2>
              <ul className="space-y-2 text-blue-700">
                <li>• Project overview and introduction</li>
                <li>• Quick navigation to other sections</li>
                <li>• Latest updates and announcements</li>
                <li>• Featured content and highlights</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                🚀 Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
                  Get Started
                </button>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                  View Documentation
                </button>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
                  Explore Features
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">
              📝 Note about Routing
            </h3>
            <p className="text-yellow-700">
              This page demonstrates Next.js Pages Router functionality. You can navigate 
              between different pages using the navigation links in the header above.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 ALX Project 0x02 - Home Page. Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  return {
    props: {
      title: "Home - ALX Project 0x02",
      currentTime: new Date().toISOString(),
    },
  };
};
