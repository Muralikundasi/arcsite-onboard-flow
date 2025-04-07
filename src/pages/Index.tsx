
import React from 'react';
import SignupForm from '@/components/SignupForm';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4 sm:p-6">
      <div className="w-full max-w-4xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="lg:order-2">
            <SignupForm />
          </div>
          <div className="lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome to Arcsite
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              The powerful design platform for architects, builders, and engineers to create, measure, and estimate with precision.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 p-4 shadow-sm">
                <div className="text-blue-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Intuitive Design</h3>
                <p className="text-sm text-gray-600">Create plans and drawings with ease using our intuitive tools.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 p-4 shadow-sm">
                <div className="text-blue-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                    <path d="M12 13v9"></path>
                    <path d="M12 2v4"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Precise Measurement</h3>
                <p className="text-sm text-gray-600">Capture accurate measurements directly in the field.</p>
              </div>
            </div>
            <div className="hidden sm:block overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" 
                alt="Arcsite in action" 
                className="w-full object-cover h-64" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
