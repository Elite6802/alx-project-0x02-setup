// pages/posts.tsx
import React, { useState, useEffect } from 'react';
import PostCard from '../components/common/PostCard'; // Adjust path based on your actual project structure
import { PostProps } from '../interfaces'; // Adjust path based on your actual project structure

// URL for JSONPlaceholder API posts, limited to 10 for a cleaner demo
const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // The API response is cast to PostProps[]
        const data: PostProps[] = await response.json();
        setPosts(data);
      } catch (e) {
        // Set error message for display
        setError(e instanceof Error ? e.message : 'An unknown fetching error occurred');
      } finally {
        // Stop loading regardless of success or failure
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array ensures this runs once after the initial render

  if (loading) {
    return (
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Posts Directory</h1>
        <p className="text-lg text-blue-500">Loading posts... ⏳</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 text-red-600">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Posts Directory</h1>
        <p className="text-lg">Error fetching data: {error}</p>
        <p className="text-sm mt-2">Please check the console for details.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-8">
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
        Posts Directory
      </h1>

      {posts.length > 0 ? (
        <div className="space-y-4">
          {posts.map((post) => (
            // The spread operator (`{...post}`) is used to pass all properties
            // of the post object directly as props to the PostCard component.
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-600 p-10">No posts found to display.</p>
      )}
    </div>
  );
};

export default PostsPage;