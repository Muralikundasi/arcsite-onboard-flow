
import React from 'react';
import SignupForm from '@/components/SignupForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-grid-pattern flex items-center justify-center p-6 relative overflow-hidden">
      {/* Grid background layer */}
      <div className="absolute inset-0 bg-grid-pattern z-0"></div>
      
      {/* Content container */}
      <div className="w-full max-w-5xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-1">
            <div className="pr-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Welcome to Arcsite
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                The powerful design platform for architects, builders, and engineers to create, measure, and estimate with precision.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 p-5 shadow-sm">
                  <div className="text-blue-600 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">Intuitive Design</h3>
                  <p className="text-gray-600">Create plans and drawings with ease using our intuitive tools.</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 p-5 shadow-sm">
                  <div className="text-blue-600 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                      <path d="M12 13v9"></path>
                      <path d="M12 2v4"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">Precise Measurement</h3>
                  <p className="text-gray-600">Capture accurate measurements directly in the field.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:order-2">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
