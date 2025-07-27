import React from 'react';
import { type UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({ 
  id, 
  name, 
  username, 
  email, 
  address, 
  phone, 
  website, 
  company 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      {/* User Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            {name.charAt(0)}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
            <p className="text-gray-600">@{username}</p>
            <p className="text-sm text-gray-500">User ID: {id}</p>
          </div>
        </div>
        <div className="text-right">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            👤 Active User
          </span>
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-gray-700 mb-3">📞 Contact Info</h4>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-600">{email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-gray-600">{phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
            </svg>
            <a 
              href={`http://${website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              {website}
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-gray-700 mb-3">🏠 Address</h4>
          <div className="text-gray-600 space-y-1">
            <p>{address.street}, {address.suite}</p>
            <p>{address.city}, {address.zipcode}</p>
            <p className="text-sm text-gray-500">
              Coordinates: {address.geo.lat}, {address.geo.lng}
            </p>
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="border-t border-gray-100 pt-4">
        <h4 className="text-lg font-semibold text-gray-700 mb-3">🏢 Company</h4>
        <div className="space-y-2">
          <p className="text-gray-800 font-medium">{company.name}</p>
          <p className="text-gray-600 italic">"{company.catchPhrase}"</p>
          <p className="text-sm text-gray-500">{company.bs}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-6">
        <div className="flex items-center space-x-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Message
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            View Profile
          </button>
        </div>
        <div className="text-sm text-gray-400">
          <span>ID: {id}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
