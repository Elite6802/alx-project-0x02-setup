import React from 'react';
import { ButtonProps } from '@/interfaces'; // Import the typed props

/**
 * Helper function to map the 'variant' prop to specific Tailwind classes.
 * @param variant - The style variant (primary, secondary, danger)
 * @returns A string of Tailwind classes
 */
const getVariantClasses = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'primary':
      return 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg';
    case 'secondary':
      return 'bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-400 shadow-sm';
    case 'danger':
      return 'bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg';
    default:
      return 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg';
  }
};

/**
 * Helper function to map the 'size' prop to specific Tailwind classes.
 * @param size - The padding/sizing (sm, md, lg)
 * @returns A string of Tailwind classes
 */
const getSizeClasses = (size: ButtonProps['size']) => {
  switch (size) {
    case 'sm':
      return 'px-3 py-1 text-sm';
    case 'lg':
      return 'px-8 py-3 text-lg';
    case 'md':
    default:
      return 'px-6 py-2 text-base';
  }
};

/**
 * A reusable Button component that supports different variants, sizes, and shapes.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  shape = 'rounded-md',
  className = '',
  ...props
}) => {
  const baseClasses = 'font-semibold transition duration-150 ease-in-out disabled:opacity-50 focus:outline-none focus:ring-4 focus:ring-opacity-50';

  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);
  // Shape class is directly the prop value
  const shapeClass = shape;

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${shapeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
