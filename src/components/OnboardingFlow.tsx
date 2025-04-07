
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import ProgressBar from './ProgressBar';
import { UserContext, UserType } from '@/App';
import { toast } from "@/components/ui/use-toast";

type Option = {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

type OnboardingQuestion = {
  id: string;
  question: string;
  options: Option[];
  userField: keyof Omit<UserType, 'name' | 'email'>;
}

const OnboardingFlow = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});

  const questions: OnboardingQuestion[] = [
    {
      id: "goal",
      question: "What are you looking to accomplish with Arcsite today?",
      userField: "userGoal",
      options: [
        { id: "work", label: "Create professional designs and plans for my clients" },
        { id: "personal", label: "Manage my construction projects more efficiently" },
        { id: "draw", label: "Capture and organize field measurements accurately" },
        { id: "estimate", label: "Generate accurate estimates and proposals" }
      ]
    },
    {
      id: "role",
      question: "Which best describes your role?",
      userField: "userRole",
      options: [
        { id: "construction", label: "Construction professional (builder, contractor, tradesperson)" },
        { id: "designer", label: "Designer or architect" },
        { id: "engineer", label: "Engineer or technical specialist" },
        { id: "other", label: "Other professional" }
      ]
    },
    {
      id: "project",
      question: "What type of projects will you be working on most often?",
      userField: "projectType",
      options: [
        { id: "residential", label: "Residential buildings" },
        { id: "commercial", label: "Commercial properties" },
        { id: "landscape", label: "Landscape design" },
        { id: "infrastructure", label: "Infrastructure projects" },
        { id: "interior", label: "Interior design" }
      ]
    },
    {
      id: "need",
      question: "What's your most urgent need right now?",
      userField: "urgentNeed",
      options: [
        { id: "measuring", label: "Measuring a site quickly and accurately" },
        { id: "drawing", label: "Creating a professional drawing or plan" },
        { id: "estimating", label: "Estimating costs for a project" },
        { id: "proposal", label: "Preparing a proposal for a client" }
      ]
    }
  ];

  const totalSteps = questions.length + 1; // Questions + final customization step

  const handleOptionSelect = (questionId: string, optionId: string) => {
    setSelections({
      ...selections,
      [questionId]: optionId
    });
  };

  const handleNext = () => {
    const currentQuestion = questions[currentStep];

    if (!selections[currentQuestion.id]) {
      toast({
        title: "Please make a selection",
        description: "Please select an option before continuing.",
        variant: "destructive"
      });
      return;
    }

    // Update user context with the selection
    const selectedOption = currentQuestion.options.find(
      option => option.id === selections[currentQuestion.id]
    );

    if (selectedOption && user) {
      setUser({
        ...user,
        [currentQuestion.userField]: selectedOption.label
      });
    }

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Finish onboarding
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    toast({
      title: "Onboarding Complete!",
      description: "Your Arcsite experience has been customized based on your preferences."
    });
    navigate('/dashboard');
  };

  const renderQuestion = () => {
    const currentQuestion = questions[currentStep];
    
    return (
      <div className="onboarding-card animate-fade-in">
        <ProgressBar currentStep={currentStep + 1} totalSteps={totalSteps} />
        
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">{currentQuestion.question}</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {currentQuestion.options.map((option) => (
            <div
              key={option.id}
              className={`option-card ${selections[currentQuestion.id] === option.id ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(currentQuestion.id, option.id)}
            >
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">{option.label}</h3>
                {option.description && (
                  <p className="text-base text-gray-500 mt-2">{option.description}</p>
                )}
              </div>
              {selections[currentQuestion.id] === option.id && (
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-between mt-10">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="onboarding-button text-lg px-10 py-6 h-auto"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </Button>
          <Button 
            onClick={handleNext}
            className="onboarding-button text-lg px-10 py-6 h-auto"
          >
            Next
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    );
  };

  const renderCustomization = () => {
    const goalLabel = user?.userGoal || "your goals";
    const projectLabel = user?.projectType?.toLowerCase() || "your projects";
    
    return (
      <div className="onboarding-card animate-fade-in">
        <ProgressBar currentStep={totalSteps} totalSteps={totalSteps} />
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Your Arcsite experience is ready!
          </h1>
          <p className="text-2xl text-gray-600">
            Welcome! We've customized Arcsite to help you accomplish {goalLabel} for {projectLabel}.
          </p>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Here's what we've prepared for you:
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-4 mt-0.5">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl">Personalized dashboard with relevant tools and templates</span>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-4 mt-0.5">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl">Guided tutorial for {user?.urgentNeed?.toLowerCase() || "your most urgent need"}</span>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-4 mt-0.5">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl">Sample projects relevant to {user?.userRole || "your role"}</span>
            </li>
          </ul>
        </div>
        
        <Button 
          onClick={handleComplete}
          className="w-full onboarding-button text-xl py-7 h-auto"
          size="lg"
        >
          Let's Get Started
        </Button>
      </div>
    );
  };

  return (
    <div>
      {currentStep < questions.length ? renderQuestion() : renderCustomization()}
    </div>
  );
};

export default OnboardingFlow;
