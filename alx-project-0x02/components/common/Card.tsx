import React from 'react';
import { type CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ 
  title, 
  content, 
  className = '', 
  variant = 'default' 
}) => {
  // Define variant styles
  const getVariantStyles = (variant: CardProps['variant']) => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-50 border-blue-200 shadow-blue-100';
      case 'secondary':
        return 'bg-gray-50 border-gray-200 shadow-gray-100';
      case 'success':
        return 'bg-green-50 border-green-200 shadow-green-100';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 shadow-yellow-100';
      case 'danger':
        return 'bg-red-50 border-red-200 shadow-red-100';
      default:
        return 'bg-white border-gray-200 shadow-gray-100';
    }
  };

  const getTitleColor = (variant: CardProps['variant']) => {
    switch (variant) {
      case 'primary':
        return 'text-blue-800';
      case 'secondary':
        return 'text-gray-800';
      case 'success':
        return 'text-green-800';
      case 'warning':
        return 'text-yellow-800';
      case 'danger':
        return 'text-red-800';
      default:
        return 'text-gray-800';
    }
  };

  const getContentColor = (variant: CardProps['variant']) => {
    switch (variant) {
      case 'primary':
        return 'text-blue-700';
      case 'secondary':
        return 'text-gray-600';
      case 'success':
        return 'text-green-700';
      case 'warning':
        return 'text-yellow-700';
      case 'danger':
        return 'text-red-700';
      default:
        return 'text-gray-600';
    }
  };

  const variantStyles = getVariantStyles(variant);
  const titleColor = getTitleColor(variant);
  const contentColor = getContentColor(variant);

  return (
    <div 
      className={`
        rounded-lg border shadow-md p-6 transition-all duration-200 hover:shadow-lg
        ${variantStyles}
        ${className}
      `.trim()}
    >
      <h3 className={`text-xl font-semibold mb-3 ${titleColor}`}>
        {title}
      </h3>
      <p className={`leading-relaxed ${contentColor}`}>
        {content}
      </p>
    </div>
  );
};

export default Card;
