
import React, { useState } from 'react';
import { 
  MousePointer, PenTool, Square, Circle, 
  Text, Ruler, Edit2, Image, Lock, Compass
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ToolButton {
  icon: React.ReactNode;
  name: string;
  id: string;
}

const ToolbarSidebar = () => {
  const [activeTool, setActiveTool] = useState('select');
  
  const tools: ToolButton[] = [
    { icon: <Compass className="h-5 w-5" />, name: 'Calibrate', id: 'calibrate' },
    { icon: <Lock className="h-5 w-5" />, name: 'Lock', id: 'lock' },
    { icon: <MousePointer className="h-5 w-5" />, name: 'Select', id: 'select' },
    { icon: <PenTool className="h-5 w-5" />, name: 'Draw', id: 'draw' },
    { icon: <Square className="h-5 w-5" />, name: 'Wall', id: 'wall' },
    { icon: <Circle className="h-5 w-5" />, name: 'Openings', id: 'openings' },
    { icon: <Edit2 className="h-5 w-5" />, name: 'Shapes', id: 'shapes' },
    { icon: <Square className="h-5 w-5 rotate-45" />, name: 'Fill', id: 'fill' },
    { icon: <Ruler className="h-5 w-5" />, name: 'Measure', id: 'measure' },
    { icon: <Text className="h-5 w-5" />, name: 'Annotate', id: 'annotate' },
    { icon: <Image className="h-5 w-5" />, name: 'Photo', id: 'photo' },
    { icon: <Edit2 className="h-5 w-5" />, name: 'Edit', id: 'edit' },
  ];

  return (
    <div className="w-16 border-r border-gray-200 bg-white flex flex-col items-center py-2">
      <TooltipProvider>
        <div className="flex flex-col items-center space-y-4">
          {tools.map((tool) => (
            <Tooltip key={tool.id} delayDuration={300}>
              <TooltipTrigger asChild>
                <Button
                  variant={activeTool === tool.id ? "secondary" : "ghost"}
                  size="icon"
                  onClick={() => setActiveTool(tool.id)}
                  className={`w-10 h-10 rounded-lg ${
                    activeTool === tool.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {tool.icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{tool.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
};

export default ToolbarSidebar;
