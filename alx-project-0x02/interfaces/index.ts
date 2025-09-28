export interface CardProps {
  title: string;
  content: React.ReactNode;
  className?: string;
}

export interface UserPost {
  id: number;
  title: string;
  content: string;
}

/**
 * Props for the reusable Button component.
 * It extends all standard HTML button attributes.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger'; // Styles: color and hover effects
  size?: 'sm' | 'md' | 'lg'; // Padding and font size
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full'; // Border radius
  className?: string; // Allow passing extra classes
}

/**
 * Interface for a Post object from JSONPlaceholder.
 */
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/**
 * Interface for a User object from JSONPlaceholder.
 */
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// ...existing code...

export interface PostProps {
  title: string;
  body: string;
  userId: number;
  id: number;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

/**
 * Defines the props structure for the UserCard component,
 * matching the shape of a user object fetched from the API.
 */
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
