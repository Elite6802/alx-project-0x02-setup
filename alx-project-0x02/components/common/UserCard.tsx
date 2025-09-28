import React from 'react';
import { UserProps } from '../../interfaces';

// Icon SVGs (using Lucide style for email, map-pin, link, phone)
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M12 18s-4-10-4-12a4 4 0 0 1 8 0c0 2-4 12-4 12z"/><circle cx="12" cy="10" r="2"/></svg>
);
const LinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
);
const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);


/**
 * A reusable component to display a single user's detailed information.
 * @param {UserProps} props - The user data.
 */
const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
  const fullAddress = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-indigo-500 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-sm text-indigo-600 mb-4 font-mono">@{username}</p>

        <div className="space-y-3 text-gray-700 text-base">
          {/* Email */}
          <div className="flex items-start">
            <MailIcon className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
            <span className="truncate">{email}</span>
          </div>

          {/* Company */}
          <div className="flex items-start">
            <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider block">Company:</span>
            <span className="ml-2 font-medium text-gray-800">{company.name}</span>
          </div>

          {/* Address */}
          <div className="flex items-start">
            <MapPinIcon className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800">Address:</span>
              <span className="text-sm text-gray-600 leading-tight">{fullAddress}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-sm">
        {/* Website */}
        <div className="flex items-center">
          <LinkIcon className="w-4 h-4 text-indigo-500 mr-2" />
          <a
            href={`http://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-700 truncate hover:underline"
          >
            {website}
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center">
          <PhoneIcon className="w-4 h-4 text-indigo-500 mr-2" />
          <span className="text-gray-600">{phone.split(' ')[0]}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
