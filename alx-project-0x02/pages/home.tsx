import Head from 'next/head';
import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal'; // Import the new Modal component
// import Button from '@/components/common/Button'; // Assuming Button component exists
import Button from '../components/common/Button'; // Update path if Button is in components/common

// Interface for user-created post data
interface UserPost {
  id: number;
  title: string;
  content: string;
}

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userPosts, setUserPosts] = useState<UserPost[]>([]);

  // Handler to receive data from the modal and update state
  const handlePostSubmit = (newPost: { title: string; content: string }) => {
    const post: UserPost = {
      id: Date.now(), // Simple unique ID generation
      title: newPost.title,
      content: newPost.content,
    };
    // Add the new post to the beginning of the array
    setUserPosts([post, ...userPosts]);
    setIsModalOpen(false); // Close modal upon submission
  };

  return (
    <>
      <Head>
        <title>Home | ALX Next.js Project</title>
      </Head>

      <div className="text-center py-12">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4">
          Project Home Dashboard
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Explore the core features implemented using reusable components.
        </p>

        {/* Button to open the modal */}
        <Button variant="primary" onClick={() => setIsModalOpen(true)} className="mb-10">
          Create New Post
        </Button>
      </div>

      {/* Dynamic User Posts Section */}
      {userPosts.length > 0 && (
        <section className="mt-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
            Your Custom Posts ({userPosts.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userPosts.map((post) => (
              <Card
                key={post.id}
                title={post.title}
                content={<p>{post.content}</p>}
                className="bg-green-50 shadow-md border-l-4 border-green-500"
              />
            ))}
          </div>
        </section>
      )}

      {/* Static Feature Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1: Component Usage Example */}
        <Card
          title="Modular Components"
          content={
            <p className="text-md">
              The `Card` component you are seeing is fully reusable and typed with TypeScript. It accepts any valid JSX as its content, making it highly flexible.
            </p>
          }
        />

        {/* Card 2: Routing Information */}
        <Card
          title="Next.js Pages Router"
          content={
            <ul className="list-disc list-inside space-y-2">
              <li>Pages are defined by files in the `/pages` directory.</li>
              <li>Navigation is handled via the `Link` component.</li>
              <li>Global layout set in `_app.tsx`.</li>
            </ul>
          }
        />

        {/* Card 3: Styling and Design */}
        <Card
          title="Tailwind CSS Integration"
          content={
            <p className="text-md">
              All styling is done using utility classes like `shadow-xl`, `rounded-xl`, and `text-blue-600`, ensuring a consistent and responsive design approach without writing custom CSS.
            </p>
          }
          className="lg:col-span-1 md:col-span-2"
        />
      </div>

      {/* The Post Modal component */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handlePostSubmit}
      />
    </>
  );
};

export default HomePage;
