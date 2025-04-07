
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import SignupForm from '@/components/SignupForm';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="max-w-5xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Welcome to Arcsite
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The powerful design platform for architects, builders, and engineers to create, measure, and estimate with precision.
            </p>
            <SignupForm />
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" 
              alt="Arcsite in action" 
              className="rounded-xl shadow-2xl" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
