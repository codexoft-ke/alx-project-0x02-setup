import React from 'react';
import { type PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ id, title, body, userId }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
            {userId}
          </div>
          <div>
            <p className="text-sm text-gray-600">User ID: {userId}</p>
            <p className="text-xs text-gray-500">Post #{id}</p>
          </div>
        </div>
        <div className="text-right">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            📝 Post
          </span>
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {body}
        </p>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-4.879-1.64L5 19l1.64-3.121A8.013 8.013 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
            </svg>
            View Comments
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Like
          </span>
        </div>
        <div className="text-sm text-gray-400">
          <span>ID: {id}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
