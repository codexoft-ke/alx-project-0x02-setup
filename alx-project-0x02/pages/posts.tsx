import React from 'react';
import { GetStaticProps } from 'next';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import { PageProps } from '../interfaces';

interface PostsPageProps extends PageProps {
  currentTime: string;
}

export default function PostsPage({ title, currentTime }: PostsPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Posts - ALX Project 0x02" />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              📝 Posts Collection
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Welcome to our posts section! Here you can browse through all 
              the articles, blog posts, and content shared by our community.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Page loaded at: {currentTime}
            </p>
          </div>

          {/* Sample Posts */}
          <div className="space-y-6">
            <Card 
              title="🚀 Getting Started with Next.js"
              content="Learn the fundamentals of Next.js and how to build modern web applications with React. This comprehensive guide covers routing, server-side rendering, and deployment strategies for production-ready applications."
              variant="primary"
            />

            <Card 
              title="🔧 TypeScript Best Practices"
              content="Discover essential TypeScript patterns and best practices for building scalable applications. From interface design to advanced type manipulation, this post covers everything you need to know about type-safe development."
              variant="secondary"
            />

            <Card 
              title="🎨 Styling with Tailwind CSS"
              content="Master the utility-first CSS framework that's revolutionizing how we style web applications. Learn about responsive design, component patterns, and optimization techniques for better performance."
              variant="success"
            />

            <Card 
              title="⚡ Performance Optimization Tips"
              content="Boost your web application's performance with these proven techniques. From code splitting to image optimization, discover strategies that will make your users happy and your metrics green."
              variant="warning"
            />

            <Card 
              title="🔐 Security in Modern Web Apps"
              content="Protect your applications and users with modern security practices. Learn about authentication, authorization, data validation, and common vulnerabilities to avoid in production environments."
              variant="danger"
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                📄 Post Actions
              </h2>
              <p className="text-gray-600 mb-8">
                Manage your posts and content with these action buttons.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="medium" 
                  variant="primary"
                  onClick={() => alert('Create New Post clicked!')}
                >
                  ✍️ Create New Post
                </Button>
                <Button 
                  size="medium" 
                  variant="secondary"
                  onClick={() => alert('View Drafts clicked!')}
                >
                  📋 View Drafts
                </Button>
                <Button 
                  size="medium" 
                  variant="success"
                  onClick={() => alert('Published Posts clicked!')}
                >
                  ✅ Published Posts
                </Button>
                <Button 
                  size="medium" 
                  variant="warning"
                  onClick={() => alert('Analytics clicked!')}
                >
                  📊 Analytics
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 ALX Project 0x02 - Posts Page. Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  return {
    props: {
      title: "Posts - ALX Project 0x02",
      currentTime: new Date().toISOString(),
    },
  };
};
