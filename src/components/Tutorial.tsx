
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, CheckCircle2, ExternalLink, X } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface TutorialProps {
  urgentNeed: string;
  onDismiss: () => void;
}

const Tutorial: React.FC<TutorialProps> = ({ urgentNeed, onDismiss }) => {
  const [completed, setCompleted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const getTutorialContent = () => {
    switch (urgentNeed.toLowerCase()) {
      case "measuring a site quickly and accurately":
        return {
          title: "Site Measurement Tutorial",
          description: "Learn how to measure a site quickly and accurately in just 3 minutes",
          steps: [
            "Open the AR scanner tool from the tools menu",
            "Point your device at the area you want to measure",
            "Use the on-screen guides to mark corners and edges",
            "Review and save your measurements"
          ],
          metric: "This will save you approximately 2 hours compared to traditional methods",
          nextSteps: [
            { label: "Create a professional drawing based on these measurements", value: "drawing" },
            { label: "Generate a material estimate", value: "estimate" },
            { label: "Share your measurements with your team", value: "share" }
          ]
        };
      case "creating a professional drawing or plan":
        return {
          title: "Professional Drawing Tutorial",
          description: "Create your first professional floor plan in minutes",
          steps: [
            "Select a template from the gallery",
            "Use the drawing tools to customize the layout",
            "Add dimensions and annotations",
            "Apply styles and finalize your drawing"
          ],
          metric: "You've created a professional drawing 5x faster than with traditional CAD software",
          nextSteps: [
            { label: "View templates to create different floor plans", value: "templates" },
            { label: "Add dimensions and measurements", value: "dimensions" },
            { label: "Export your drawing", value: "export" }
          ]
        };
      case "estimating costs for a project":
        return {
          title: "Project Estimation Tutorial",
          description: "Generate accurate cost estimates for your project",
          steps: [
            "Import or create your project drawing",
            "Define materials and pricing in the estimation panel",
            "Use the area and length tools to calculate quantities",
            "Review and finalize your estimate"
          ],
          metric: "You've just created an accurate estimate that would have taken hours with spreadsheets",
          nextSteps: [
            { label: "Export your estimate to PDF", value: "export" },
            { label: "Create a detailed proposal", value: "proposal" },
            { label: "Adjust material prices and recalculate", value: "adjust" }
          ]
        };
      case "preparing a proposal for a client":
        return {
          title: "Client Proposal Tutorial",
          description: "Create a professional proposal to win more projects",
          steps: [
            "Select a proposal template from the gallery",
            "Import your project details and estimates",
            "Customize the proposal with your branding",
            "Preview and finalize the proposal"
          ],
          metric: "Your professional proposal is ready to send, increasing your chance of winning the project by 40%",
          nextSteps: [
            { label: "Send your proposal via email", value: "send" },
            { label: "Export your proposal to PDF", value: "export" },
            { label: "Create a follow-up schedule", value: "followup" }
          ]
        };
      default:
        return {
          title: "Getting Started Tutorial",
          description: "Learn the basics of Arcsite",
          steps: [
            "Explore the main dashboard",
            "Create your first project",
            "Learn about the core tools",
            "Save and share your work"
          ],
          metric: "You've learned the basics of Arcsite in just a few minutes",
          nextSteps: [
            { label: "Create your first project", value: "create" },
            { label: "Explore templates", value: "templates" },
            { label: "Learn advanced features", value: "advanced" }
          ]
        };
    }
  };

  const tutorialContent = getTutorialContent();

  const handleNextStep = () => {
    if (currentStep < tutorialContent.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleNextAction = (action: string) => {
    toast({
      title: "Action Selected",
      description: `You selected: ${action}. This feature would launch in the full version.`
    });
  };

  if (completed) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8 animate-fade-in relative">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-2 top-2" 
          onClick={onDismiss}
        >
          <X className="h-4 w-4" />
        </Button>
        
        <div className="flex items-center justify-center mb-6">
          <div className="bg-green-50 rounded-full p-3">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-3">
          Great job!
        </h2>
        
        <p className="text-center text-gray-600 mb-6">
          {tutorialContent.metric}
        </p>
        
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">
            Now that you've completed this tutorial, would you like to:
          </h3>
          
          <div className="space-y-3">
            {tutorialContent.nextSteps.map((step, index) => (
              <Button 
                key={index} 
                variant="outline" 
                className="w-full justify-between"
                onClick={() => handleNextAction(step.value)}
              >
                {step.label}
                <ArrowRight className="w-4 h-4" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8 animate-fade-in relative">
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute right-2 top-2" 
        onClick={onDismiss}
      >
        <X className="h-4 w-4" />
      </Button>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{tutorialContent.title}</h2>
      <p className="text-gray-600 mb-6">{tutorialContent.description}</p>
      
      <div className="bg-blue-50 rounded-lg p-6 mb-6">
        <div className="space-y-4">
          {tutorialContent.steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex items-start ${index === currentStep ? 'text-blue-700 font-medium' : index < currentStep ? 'text-gray-500' : 'text-gray-400'}`}
            >
              <div className={`flex-shrink-0 w-6 h-6 rounded-full mr-3 flex items-center justify-center ${
                index < currentStep 
                  ? 'bg-green-100 text-green-600' 
                  : index === currentStep 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'bg-gray-100 text-gray-400'
              }`}>
                {index < currentStep ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button onClick={handleNextStep}>
          {currentStep < tutorialContent.steps.length - 1 ? 'Next Step' : 'Complete Tutorial'}
        </Button>
      </div>
    </div>
  );
};

export default Tutorial;
