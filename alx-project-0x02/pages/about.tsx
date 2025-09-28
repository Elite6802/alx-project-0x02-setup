import React from 'react';
import Button from '@/components/common/Button';

const AboutPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">About This Project</h1>
      <p className="text-lg text-gray-700 mb-8">
        This application was built as a demonstration of setting up a robust development environment
        using the Next.js Pages Router, TypeScript for strong typing, and Tailwind CSS for rapid,
        responsive styling. This page demonstrates the flexibility of our custom reusable components.
      </p>

      <h2 className="text-3xl font-semibold mb-4 text-gray-800">Button Component Showcase</h2>
      <p className="text-gray-600 mb-6">
        The button below illustrates the use of custom props for `variant`, `size`, and `shape`.
      </p>

      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6 items-center">
        {/* Primary Large Rounded */}
        <Button
          variant="primary"
          size="lg"
          shape="rounded-full"
          onClick={() => alert('Primary Clicked!')}
        >
          Large Primary
        </Button>

        {/* Secondary Medium Square */}
        <Button
          variant="secondary"
          size="md"
          shape="rounded-sm"
          onClick={() => alert('Secondary Clicked!')}
        >
          Medium Secondary
        </Button>

        {/* Danger Small Default Rounding */}
        <Button
          variant="danger"
          size="sm"
          shape="rounded-md"
          onClick={() => alert('Danger Clicked!')}
        >
          Small Danger
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;