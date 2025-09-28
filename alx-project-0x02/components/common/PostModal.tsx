import React, { useState } from 'react';
// import Button from './Button'; // Assuming Button component exists
import Button from './Button'; // Update the path if Button is in the parent folder
// Import necessary components and hooks

// Interface for the data the modal submits
interface NewPostData {
  title: string;
  content: string;
}

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: NewPostData) => void;
}

/**
 * An interactive Modal component for submitting a new post entry.
 * Uses fixed positioning and backdrop for overlay effect.
 */
const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onSubmit({ title, content });
      setTitle(''); // Reset form
      setContent('');
    }
  };

  return (
    // Backdrop / Overlay
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 transition-opacity duration-300"
      // Close on backdrop click (optional: can be removed if strictly form submission is required)
      onClick={onClose}
    >
      {/* Modal Content - Stop propagation to prevent accidental closing */}
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">Create New Post</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="postTitle" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              id="postTitle"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Enter post title"
            />
          </div>

          <div>
            <label htmlFor="postContent" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <textarea
              id="postContent"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition resize-none"
              placeholder="Write your post content here"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-2">
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Submit Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;