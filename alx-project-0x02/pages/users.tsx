import React, { useState, useEffect } from 'react';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

// API URL for fetching users from JSONPlaceholder
const API_URL = 'https://jsonplaceholder.typicode.com/users';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Fetch and cast data
        const data: UserProps[] = await response.json();
        setUsers(data);
      } catch (e) {
        // Handle errors during fetch
        console.error("Fetch error:", e);
        setError(e instanceof Error ? e.message : 'An unknown fetching error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Runs only once on mount

  if (loading) {
    return (
      <div className="text-center p-8 bg-gray-50 min-h-screen">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">User Directory</h1>
        <p className="text-xl text-indigo-500">Loading user profiles... ⚙️</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 bg-red-50 min-h-screen">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">User Directory</h1>
        <p className="text-xl text-red-600">
          Failed to load users. Error: {error}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10 border-b-2 pb-3 border-indigo-100">
        User Directory
      </h1>

      {users.length > 0 ? (
        // Responsive grid for displaying UserCards
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {users.map((user) => (
            // Pass all user properties to the UserCard component
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-600 p-20 bg-white rounded-lg shadow-inner">
          No users found to display. The API returned an empty list.
        </p>
      )}
    </div>
  );
};

export default UsersPage;