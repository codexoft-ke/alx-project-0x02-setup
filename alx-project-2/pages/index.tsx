import React from 'react';
import Header from '../components/layout/Header';
import { PageProps } from '../interfaces';

interface HomeProps extends PageProps {}

export default function Home({}: HomeProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Welcome to ALX Project
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This is a Next.js application built for the ALX Software Engineering program.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Getting Started
              </h2>
              <p className="text-gray-600 mb-4">
                This project demonstrates the implementation of a modern web application 
                using Next.js, TypeScript, and Tailwind CSS.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Clean and organized folder structure</li>
                <li>• TypeScript interfaces for type safety</li>
                <li>• Reusable React components</li>
                <li>• Responsive design with Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
