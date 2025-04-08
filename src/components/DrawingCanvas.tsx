
import React, { useRef, useEffect, useState } from 'react';

const DrawingCanvas = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Sample room data - in a real app, this would be dynamic
  const roomData = {
    width: 12.2, // feet
    height: 9, // feet
    name: "OFFICE",
    area: "109.63 ft²",
    walls: [
      { x1: 0, y1: 0, x2: 12.2, y2: 0 },
      { x1: 0, y1: 0, x2: 0, y2: 9 },
      { x1: 0, y1: 9, x2: 12.2, y2: 9 },
      { x1: 12.2, y1: 0, x2: 12.2, y2: 9 }
    ],
    doorPosition: { x: 9, y: 9, width: 3, height: 0.4, rotation: 0 },
    furniture: [
      { type: "desk", x: 6, y: 5, width: 4, height: 2 },
      { type: "chair", x: 6, y: 3, width: 2, height: 2 },
      { type: "cabinet", x: 1.5, y: 4.5, width: 1, height: 3 },
      { type: "plant", x: 1.2, y: 1.8, width: 1, height: 1 }
    ]
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const newScale = Math.max(0.5, Math.min(3, scale * delta));
    setScale(newScale);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleMouseUpOutside = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    window.addEventListener('mouseup', handleMouseUpOutside);
    return () => {
      window.removeEventListener('mouseup', handleMouseUpOutside);
    };
  }, [isDragging]);

  return (
    <div className="relative flex-1 overflow-hidden bg-grid-pattern"
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* Grid and background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* This creates the grid pattern */}
      </div>

      {/* Drawing content */}
      <div 
        ref={canvasRef}
        className="absolute transition-transform duration-100"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          transformOrigin: '0 0',
        }}
      >
        {/* Coordinate system and rulers */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-white border-b border-gray-200">
          {/* Horizontal ruler */}
          <div className="flex">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={`hr-${i}`} className="flex-1 border-r border-gray-300 h-6 relative">
                <span className="absolute bottom-0 left-0 text-[8px] text-gray-500">{i}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute top-0 left-0 bottom-0 w-6 bg-white border-r border-gray-200">
          {/* Vertical ruler */}
          <div className="flex flex-col h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={`vr-${i}`} className="flex-1 border-b border-gray-300 w-6 relative">
                <span className="absolute top-0 left-0 text-[8px] text-gray-500">{i}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Drawing area - this will be where the actual content is rendered */}
        <div className="absolute left-6 top-6">
          {/* Room outline */}
          <div className="relative" style={{ width: `${roomData.width * 50}px`, height: `${roomData.height * 50}px` }}>
            {/* Walls */}
            <div className="absolute inset-0 border-8 border-black">
              {/* Room label and area */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-2xl font-mono">{roomData.name}</span>
                <span className="text-xl font-mono">{roomData.area}</span>
              </div>
              
              {/* Door */}
              <div className="absolute" style={{ 
                left: `${roomData.doorPosition.x * 50 - roomData.doorPosition.width * 25}px`, 
                bottom: '0', 
                width: `${roomData.doorPosition.width * 50}px`, 
                height: '15px'
              }}>
                <svg width="100%" height="100%" viewBox="0 0 100 15">
                  <line x1="0" y1="0" x2="100" y2="0" stroke="black" strokeWidth="3" />
                </svg>
              </div>
              
              {/* Furniture */}
              {roomData.furniture.map((item, index) => {
                if (item.type === "desk") {
                  return (
                    <div key={index} className="absolute bg-white border border-gray-400 rounded-md" 
                      style={{ 
                        left: `${item.x * 50 - item.width * 25}px`, 
                        top: `${item.y * 50 - item.height * 25}px`,
                        width: `${item.width * 50}px`, 
                        height: `${item.height * 50}px`
                      }}>
                    </div>
                  );
                } else if (item.type === "chair") {
                  return (
                    <div key={index} className="absolute" 
                      style={{ 
                        left: `${item.x * 50 - item.width * 25}px`, 
                        top: `${item.y * 50 - item.height * 25}px`,
                        width: `${item.width * 50}px`, 
                        height: `${item.height * 50}px`
                      }}>
                      <svg width="100%" height="100%" viewBox="0 0 100 100">
                        <rect x="25" y="25" width="50" height="50" fill="none" stroke="#aaa" strokeWidth="2" rx="25" />
                      </svg>
                    </div>
                  );
                } else if (item.type === "cabinet") {
                  return (
                    <div key={index} className="absolute bg-white border border-gray-400" 
                      style={{ 
                        left: `${item.x * 50 - item.width * 25}px`, 
                        top: `${item.y * 50 - item.height * 25}px`,
                        width: `${item.width * 50}px`, 
                        height: `${item.height * 50}px`
                      }}>
                    </div>
                  );
                } else if (item.type === "plant") {
                  return (
                    <div key={index} className="absolute" 
                      style={{ 
                        left: `${item.x * 50 - 20}px`, 
                        top: `${item.y * 50 - 20}px`,
                        width: `40px`, 
                        height: `40px`
                      }}>
                      <svg viewBox="0 0 40 40" width="100%" height="100%">
                        <path d="M20,5 C25,10 30,15 25,20 C30,20 35,15 30,10 C35,15 35,20 25,25 C35,25 35,15 25,15 C30,25 25,30 20,25 C15,30 10,25 15,15 C5,15 5,25 15,25 C5,20 5,15 10,10 C5,15 10,20 15,20 C10,15 15,10 20,5 Z" 
                              fill="none" stroke="#666" strokeWidth="1"/>
                      </svg>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            
            {/* Dimension line for width */}
            <div className="absolute -top-10 left-0 right-0 flex justify-between items-center">
              <div className="h-5 w-0.5 bg-black" />
              <div className="text-center font-mono">12' 2"</div>
              <div className="h-5 w-0.5 bg-black" />
              <div className="absolute left-0 right-0 top-2.5 h-px bg-black" />
            </div>
            
            {/* Dimension line for height */}
            <div className="absolute -left-10 top-0 bottom-0 flex flex-col justify-between items-center">
              <div className="w-5 h-0.5 bg-black" />
              <div className="text-center font-mono rotate-90">9'</div>
              <div className="w-5 h-0.5 bg-black" />
              <div className="absolute top-0 bottom-0 left-2.5 w-px bg-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawingCanvas;
