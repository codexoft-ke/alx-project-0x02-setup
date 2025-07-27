import React from 'react';
import { GetStaticProps } from 'next';
import Header from '../components/layout/Header';
import { PageProps } from '../interfaces';

interface AboutPageProps extends PageProps {
  currentTime: string;
}

export default function AboutPage({ title, currentTime }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="About - ALX Project 0x02" />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              About Our Project
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Learn more about ALX Project 0x02, our goals, and the technologies 
              we're using to build this modern web application.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Page loaded at: {currentTime}
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                🎯 Project Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                This project is designed to demonstrate proficiency in Next.js, TypeScript, 
                and modern web development practices. We're building a scalable, maintainable, 
                and user-friendly application that showcases the power of the React ecosystem.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                💻 Technology Stack
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-600 font-semibold">Framework:</span>
                    <span className="text-gray-700">Next.js 15+</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-600 font-semibold">Language:</span>
                    <span className="text-gray-700">TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-600 font-semibold">Styling:</span>
                    <span className="text-gray-700">Tailwind CSS</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-600 font-semibold">Routing:</span>
                    <span className="text-gray-700">Pages Router</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-600 font-semibold">Linting:</span>
                    <span className="text-gray-700">ESLint</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-600 font-semibold">Development:</span>
                    <span className="text-gray-700">Hot Reload</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                🌟 Key Features
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Server-side rendering for optimal performance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Type-safe development with TypeScript</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Responsive design with Tailwind CSS</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Component-based architecture</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>File-based routing system</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-indigo-50 border border-indigo-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-800 mb-3">
              🎓 Learning Objectives
            </h3>
            <p className="text-indigo-700">
              Through this project, we're mastering modern web development concepts including 
              routing, component composition, state management, and deployment strategies.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 ALX Project 0x02 - About Page. Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  return {
    props: {
      title: "About - ALX Project 0x02",
      currentTime: new Date().toISOString(),
    },
  };
};
