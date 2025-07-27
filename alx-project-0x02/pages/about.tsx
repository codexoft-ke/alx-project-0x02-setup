import React from 'react';
import { GetStaticProps } from 'next';
import Header from '../components/layout/Header';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
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

          {/* Button Component Showcase */}
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                🔘 Button Component Showcase
              </h2>
              <p className="text-gray-600 mb-8">
                Our reusable Button component supports different sizes and shapes, 
                making it flexible for various use cases throughout the application.
              </p>
              
              {/* Button Examples */}
              <div className="space-y-8">
                {/* Size Variations */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">Different Sizes</h3>
                  <div className="flex flex-wrap gap-4 items-center">
                    <Button 
                      size="small" 
                      variant="primary"
                      onClick={() => alert('Small button clicked!')}
                    >
                      Small Button
                    </Button>
                    <Button 
                      size="medium" 
                      variant="success"
                      onClick={() => alert('Medium button clicked!')}
                    >
                      Medium Button
                    </Button>
                    <Button 
                      size="large" 
                      variant="warning"
                      onClick={() => alert('Large button clicked!')}
                    >
                      Large Button
                    </Button>
                  </div>
                </div>

                {/* Shape Variations */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">Different Shapes</h3>
                  <div className="flex flex-wrap gap-4 items-center">
                    <Button 
                      shape="rounded-sm" 
                      variant="secondary"
                      onClick={() => alert('Sharp corners button clicked!')}
                    >
                      Sharp Corners
                    </Button>
                    <Button 
                      shape="rounded-md" 
                      variant="primary"
                      onClick={() => alert('Rounded corners button clicked!')}
                    >
                      Rounded Corners
                    </Button>
                    <Button 
                      shape="rounded-full" 
                      variant="danger"
                      onClick={() => alert('Fully rounded button clicked!')}
                    >
                      Fully Rounded
                    </Button>
                  </div>
                </div>

                {/* Combined Variations */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">Combined Variations</h3>
                  <div className="flex flex-wrap gap-4 items-center">
                    <Button 
                      size="small" 
                      shape="rounded-full" 
                      variant="success"
                      onClick={() => alert('Small + Fully Rounded button clicked!')}
                    >
                      Small & Round
                    </Button>
                    <Button 
                      size="large" 
                      shape="rounded-sm" 
                      variant="primary"
                      onClick={() => alert('Large + Sharp button clicked!')}
                    >
                      Large & Sharp
                    </Button>
                    <Button 
                      size="medium" 
                      shape="rounded-md" 
                      variant="default"
                      disabled
                    >
                      Disabled Button
                    </Button>
                  </div>
                </div>
              </div>
            </div>
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
