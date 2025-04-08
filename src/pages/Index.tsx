
import React from 'react';
import SignupForm from '@/components/SignupForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-grid-pattern flex items-center justify-center p-6 relative overflow-hidden">
      {/* Grid background layer */}
      <div className="absolute inset-0 bg-grid-pattern z-0"></div>
      
      {/* Content container */}
      <div className="w-full max-w-5xl relative z-10">
        <div className="flex flex-col items-center">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to Arcsite
            </h1>
            <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
              The powerful design platform for architects, builders, and engineers to create, measure, and estimate with precision.
            </p>
          </div>
          
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
