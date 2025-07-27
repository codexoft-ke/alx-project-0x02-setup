import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { NewPost } from '../interfaces';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userPosts, setUserPosts] = useState<NewPost[]>([]);

  const handleCreatePost = (postData: { title: string; content: string }) => {
    const newPost: NewPost = {
      id: Date.now().toString(),
      title: postData.title,
      content: postData.content,
      createdAt: new Date().toISOString(),
    };

    setUserPosts(prevPosts => [newPost, ...prevPosts]);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Home - ALX Project 0x02" />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-5xl font-bold text-gray-800 mb-4">
                  Welcome to the Home Page
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  This is the home page of our Next.js application. Here you can find 
                  an overview of our project and its features.
                </p>
                <p className="text-sm text-gray-500">
                  Page loaded at: {new Date().toLocaleString()}
                </p>
              </div>
              <button
                onClick={openModal}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg"
              >
                ✏️ Create Post
              </button>
            </div>
          </div>

          {/* User Posts Section */}
          {userPosts.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Posts</h2>
              <div className="space-y-4">
                {userPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                      <span className="text-sm text-gray-500">
                        {new Date(post.createdAt).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{post.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

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
            content="This page demonstrates Next.js Pages Router functionality using reusable Card components. You can navigate between different pages using the navigation links in the header above. Each card is now powered by our custom Card component with different variants and styling options. You can also create new posts using the modal functionality!"
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

      {/* Modal Component */}
      <PostModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleCreatePost}
      />
    </div>
  );
}
