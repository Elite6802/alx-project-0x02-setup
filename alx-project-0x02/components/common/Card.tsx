import React from 'react';
import { type CardProps } from '@/interfaces';

/**
 * A reusable Card component for displaying structured content with a clear title.
 * It uses standard Tailwind classes for a modern, rounded, shadowed look.
 */
const Card: React.FC<CardProps> = ({ title, content, className = '' }) => {
  return (
    <div
      className={`bg-white p-6 shadow-xl rounded-xl transition duration-300 hover:shadow-2xl ${className}`}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
        {title}
      </h2>
      <div className="text-gray-600">
        {content}
      </div>
    </div>
  );
};

export default Card;