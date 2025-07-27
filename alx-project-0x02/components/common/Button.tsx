import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  shape = 'rounded-md',
  variant = 'default',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}) => {
  // Size classes
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  // Shape classes
  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
  };

  // Variant classes
  const variantClasses = {
    default: 'bg-gray-500 hover:bg-gray-600 text-white border-gray-500 hover:border-gray-600',
    primary: 'bg-blue-500 hover:bg-blue-600 text-white border-blue-500 hover:border-blue-600',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 border-gray-200 hover:border-gray-300',
    success: 'bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-white border-yellow-500 hover:border-yellow-600',
    danger: 'bg-red-500 hover:bg-red-600 text-white border-red-500 hover:border-red-600',
  };

  // Disabled classes
  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  // Combine all classes
  const buttonClasses = [
    'font-medium',
    'border',
    'transition-colors',
    'duration-200',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-opacity-50',
    sizeClasses[size],
    shapeClasses[shape],
    variantClasses[variant],
    disabledClasses,
    className,
  ].join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
