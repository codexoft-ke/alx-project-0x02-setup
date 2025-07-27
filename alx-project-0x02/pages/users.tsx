import React from 'react';
import { GetStaticProps } from 'next';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import Button from '@/components/common/Button';
import { PageProps, UserProps } from '../interfaces';

interface UsersPageProps extends PageProps {
  currentTime: string;
  users: UserProps[];
}

export default function UsersPage({ title, currentTime, users }: UsersPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Users - ALX Project 0x02" />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              👥 Users Directory
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Welcome to our users directory! Here you can browse through all 
              registered users, view their profiles, and connect with community members.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Page loaded at: {currentTime}
            </p>
          </div>

          {/* Users Stats and Actions */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  📊 User Statistics
                </h2>
                <p className="text-gray-600">
                  Total registered users: <span className="font-semibold text-blue-600">{users.length}</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Data fetched from JSONPlaceholder API
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button 
                  size="medium" 
                  variant="primary"
                  onClick={() => alert('Add New User clicked!')}
                >
                  ➕ Add New User
                </Button>
                <Button 
                  size="medium" 
                  variant="secondary"
                  onClick={() => alert('Export Users clicked!')}
                >
                  📄 Export Users
                </Button>
                <Button 
                  size="medium" 
                  variant="success"
                  onClick={() => alert('Refresh Data clicked!')}
                >
                  🔄 Refresh Data
                </Button>
              </div>
            </div>
          </div>

          {/* API Users */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🌐 Users from JSONPlaceholder API
              </h2>
              <p className="text-gray-600 mb-4">
                Below are real user profiles fetched from the JSONPlaceholder API, 
                displayed using our custom UserCard component.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  Active Users
                </span>
                <span>•</span>
                <span>Last updated: {new Date(currentTime).toLocaleString()}</span>
              </div>
            </div>

            {users.length > 0 ? (
              users.map((user) => (
                <UserCard
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  username={user.username}
                  email={user.email}
                  address={user.address}
                  phone={user.phone}
                  website={user.website}
                  company={user.company}
                />
              ))
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No Users Found</h3>
                <p className="text-gray-500">
                  Unable to load users at this time. Please try refreshing the page.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 ALX Project 0x02 - Users Directory. Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

// Data fetching function - Next.js calls getStaticProps() at build time
export async function getStaticProps(): Promise<{ props: UsersPageProps; revalidate: number }> {
  try {
    // Fetch users from JSONPlaceholder API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: UserProps[] = await response.json();

    return {
      props: {
        title: "Users - ALX Project 0x02",
        currentTime: new Date().toISOString(),
        users: users,
      },
      // Revalidate every 2 hours (7200 seconds)
      revalidate: 7200,
    };
  } catch (error) {
    console.error('Failed to fetch users:', error);
    
    // Fallback with empty users array
    return {
      props: {
        title: "Users - ALX Project 0x02",
        currentTime: new Date().toISOString(),
        users: [],
      },
      revalidate: 60, // Retry more frequently on error
    };
  }
}
