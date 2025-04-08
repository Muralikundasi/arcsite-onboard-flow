
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingFlow from '@/components/OnboardingFlow';
import { UserContext } from '@/App';

const Onboarding = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if no user exists (they didn't sign up)
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-grid-pattern p-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-48 left-1/3 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
      </div>
      <div className="w-full max-w-5xl relative z-10">
        <OnboardingFlow />
      </div>
    </div>
  );
};

export default Onboarding;
