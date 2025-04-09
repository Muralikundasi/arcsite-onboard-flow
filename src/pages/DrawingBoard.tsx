
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Tutorial from '@/components/Tutorial';
import DrawingCanvas from '@/components/DrawingCanvas';
import ToolbarSidebar from '@/components/ToolbarSidebar';
import DrawingHeader from '@/components/DrawingHeader';
import { UserContext } from '@/App';

const DrawingBoard = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [showTutorial, setShowTutorial] = useState(true);

  useEffect(() => {
    // Redirect if no user exists
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleToggleTutorial = () => {
    setShowTutorial(!showTutorial);
  };

  if (!user) return null;

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden">
      <DrawingHeader 
        onGoToDashboard={() => navigate('/dashboard')} 
        onToggleTutorial={handleToggleTutorial}
        showTutorial={showTutorial}
      />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar with tools */}
        <ToolbarSidebar />
        
        {/* Main drawing area */}
        <div className="flex-1 flex flex-col relative overflow-hidden">
          <DrawingCanvas />
          
          {/* Tutorial overlay */}
          {showTutorial && (
            <div className="absolute bottom-6 left-6 right-6 z-50 max-w-2xl mx-auto">
              <Tutorial 
                urgentNeed={user.urgentNeed || "Creating a professional drawing or plan"} 
                onDismiss={() => setShowTutorial(false)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DrawingBoard;
