
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Undo, Redo, Download, Share, Settings, Save, HelpCircle, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface DrawingHeaderProps {
  onGoToDashboard: () => void;
  onToggleTutorial: () => void;
  showTutorial: boolean;
}

const DrawingHeader = ({ onGoToDashboard, onToggleTutorial, showTutorial }: DrawingHeaderProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Show tooltip when tutorial is closed (if it wasn't dismissed before)
  useEffect(() => {
    if (!showTutorial && localStorage.getItem('tutorial-tooltip-dismissed') !== 'true') {
      setShowTooltip(true);
    }
  }, [showTutorial]);
  
  const handleDismissTooltip = () => {
    setShowTooltip(false);
    localStorage.setItem('tutorial-tooltip-dismissed', 'true');
  };

  return (
    <header className="border-b border-gray-200 bg-white px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onGoToDashboard}
            className="text-gray-600 flex items-center gap-1"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Dashboard</span>
          </Button>
          
          <h1 className="text-lg font-medium text-gray-900">Drawing 1</h1>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Undo className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Redo className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="px-3">
            Estimate
          </Button>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Share className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Save className="h-4 w-4" />
          </Button>
          
          <Collapsible>
            <TooltipProvider>
              <Tooltip open={showTooltip} onOpenChange={setShowTooltip}>
                <TooltipTrigger asChild>
                  <CollapsibleTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className={showTutorial ? "bg-blue-50 text-blue-500" : ""}
                      onClick={onToggleTutorial}
                    >
                      <BookOpen className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                </TooltipTrigger>
                <TooltipContent sideOffset={10} showCloseButton={true} onClose={handleDismissTooltip}>
                  <p>Tutorial</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Collapsible>
          
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DrawingHeader;
