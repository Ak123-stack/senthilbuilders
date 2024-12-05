import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function Link({ children, className = '', ...props }: LinkProps) {
  return (
    <a
      className={`text-gray-700 hover:text-blue-600 transition-colors ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}