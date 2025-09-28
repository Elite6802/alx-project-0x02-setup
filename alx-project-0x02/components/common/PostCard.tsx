// components/common/PostCard.tsx
import React from 'react';
import { PostProps } from '../../interfaces';

/**
 * A reusable component to display a single post's details.
 * It is styled using Tailwind CSS classes.
 * @param {PostProps} props - The post data (title, body, userId, id).
 */
const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
  return (
    <div
      // Tailwind equivalent of the original CSS:
      // border: 1px solid #ccc; padding: 15px; margin: 10px 0; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0,0,0,0.1); background-color: #f9f9f9;
      className="border border-gray-300 p-4 my-3 rounded-lg shadow-md bg-gray-50 hover:shadow-lg transition-shadow duration-300"
    >
      <h3
        // Tailwind equivalent: margin: 0 0 10px 0; color: #333;
        className="text-xl font-semibold mb-2 text-gray-800"
      >
        {title}
      </h3>
      <p
        // Tailwind equivalent: margin: 0 0 10px 0; color: #555;
        className="text-gray-700 mb-3"
      >
        {body}
      </p>
      <div
        // Tailwind equivalent: font-size: 0.9em; color: #888;
        className="text-sm text-gray-500 border-t pt-2 mt-2 border-gray-200"
      >
        <span
          // Tailwind equivalent: margin-right: 15px
          className="mr-4"
        >
          Post ID: <strong className="font-medium">{id}</strong>
        </span>
        <span>
          User ID: <strong className="font-medium">{userId}</strong>
        </span>
      </div>
    </div>
  );
};

export default PostCard;