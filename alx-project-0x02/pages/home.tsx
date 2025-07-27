import React from 'react';
import { GetStaticProps } from 'next';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card 
              title="🏠 Home Features"
              content="Discover the key features of our home page including project overview, quick navigation to other sections, latest updates and announcements, and featured content highlights."
              variant="primary"
            />
            
            <Card 
              title="🚀 Quick Actions"
              content="Get started with our application quickly! Access documentation, explore features, and begin your journey with our comprehensive set of tools and resources."
              variant="success"
            />
            
            <Card 
              title="📊 Project Stats"
              content="Track your progress and view important metrics about the project. Monitor performance, user engagement, and development milestones in real-time."
              variant="secondary"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card 
              title="💡 Getting Started Tips"
              content="New to the project? Here are some helpful tips to get you started. Learn about the project structure, key concepts, and best practices for development."
              variant="warning"
            />
            
            <Card 
              title="🔧 Development Tools"
              content="Explore our comprehensive set of development tools including TypeScript support, ESLint configuration, Tailwind CSS utilities, and Next.js optimizations."
              variant="default"
            />
          </div>

          <Card 
            title="📝 Note about Routing"
            content="This page demonstrates Next.js Pages Router functionality using reusable Card components. You can navigate between different pages using the navigation links in the header above. Each card is now powered by our custom Card component with different variants and styling options."
            variant="danger"
            className="mb-8"
          />
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
