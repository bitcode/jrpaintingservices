import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <p className="mt-2 text-xl">This is the homepage of our Next.js application.</p>
      <button className="btn">Button</button>
    </div>
  );
};

export default HomePage;
