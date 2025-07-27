import React from 'react';
import { GetStaticProps } from 'next';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import PostCard from '@/components/common/PostCard';
import { PageProps, PostProps } from '../interfaces';

interface PostsPageProps extends PageProps {
  currentTime: string;
  posts: PostProps[];
}

export default function PostsPage({ title, currentTime, posts }: PostsPageProps) {
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

          {/* API Posts */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📡 Posts from JSONPlaceholder API
              </h2>
              <p className="text-gray-600 mb-4">
                Below are real posts fetched from the JSONPlaceholder API, 
                displayed using our custom PostCard component.
              </p>
              <p className="text-sm text-gray-500">
                Total posts loaded: {posts.length}
              </p>
            </div>

            {posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                userId={post.userId}
              />
            ))}
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
  try {
    // Fetch posts from JSONPlaceholder API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: PostProps[] = await response.json();

    // Limit to first 10 posts for better UX
    const limitedPosts = posts.slice(0, 10);

    return {
      props: {
        title: "Posts - ALX Project 0x02",
        currentTime: new Date().toISOString(),
        posts: limitedPosts,
      },
      // Revalidate every hour (3600 seconds)
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    
    // Fallback with empty posts array
    return {
      props: {
        title: "Posts - ALX Project 0x02",
        currentTime: new Date().toISOString(),
        posts: [],
      },
      revalidate: 60, // Retry more frequently on error
    };
  }
};
