import React from 'react';
import { GetStaticProps } from 'next';
import Header from '../components/layout/Header';
import Card from '@/components/common/Card';
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

          <div className="space-y-6">
            <Card 
              title="🎯 Project Mission"
              content="This project is designed to demonstrate proficiency in Next.js, TypeScript, and modern web development practices. We're building a scalable, maintainable, and user-friendly application that showcases the power of the React ecosystem."
              variant="primary"
            />

            <Card 
              title="💻 Technology Stack"
              content="Built with Next.js 15+ framework, TypeScript language, and Tailwind CSS for styling. Features include Pages Router for navigation, ESLint for code quality, and Hot Reload for enhanced development experience."
              variant="secondary"
            />

            <Card 
              title="🌟 Key Features"
              content="Server-side rendering for optimal performance, type-safe development with TypeScript, responsive design with Tailwind CSS, component-based architecture, and file-based routing system for seamless navigation."
              variant="success"
            />
          </div>

          <div className="mt-8">
            <Card 
              title="🎓 Learning Objectives"
              content="Through this project, we're mastering modern web development concepts including routing, component composition, state management, and deployment strategies. The reusable Card component demonstrates our understanding of props, TypeScript interfaces, and component reusability."
              variant="warning"
            />
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
