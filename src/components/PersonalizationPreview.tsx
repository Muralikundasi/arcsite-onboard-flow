
import React from 'react';
import { 
  Sparkles, 
  PenTool, 
  Ruler, 
  FlaskConical, 
  Building2, 
  Pencil, 
  Mountain, 
  FileText, 
  HardHat, 
  Ruler as RulerIcon, 
  BadgeDollarSign
} from 'lucide-react';

interface PersonalizationPreviewProps {
  questionType: string;
  selectedOptionId: string;
}

const PersonalizationPreview: React.FC<PersonalizationPreviewProps> = ({ 
  questionType, 
  selectedOptionId 
}) => {
  const getContent = () => {
    switch (questionType) {
      case 'goal':
        return {
          title: 'Personalizing your templates',
          items: getGoalItems(selectedOptionId)
        };
      case 'role':
        return {
          title: 'Customizing your tools',
          items: getRoleItems(selectedOptionId)
        };
      case 'project':
        return {
          title: 'Preparing shape libraries',
          items: getProjectItems(selectedOptionId)
        };
      case 'need':
        return {
          title: 'Prioritizing help content',
          items: getNeedItems(selectedOptionId)
        };
      default:
        return {
          title: 'Personalizing your experience',
          items: [
            { icon: <Sparkles className="h-5 w-5 text-blue-500" />, text: 'Custom templates' },
            { icon: <PenTool className="h-5 w-5 text-indigo-500" />, text: 'Design assets' },
            { icon: <FileText className="h-5 w-5 text-green-500" />, text: 'Learning resources' }
          ]
        };
    }
  };

  const getGoalItems = (optionId: string) => {
    switch (optionId) {
      case 'work':
        return [
          { icon: <FileText className="h-5 w-5 text-blue-500" />, text: 'Professional templates' },
          { icon: <Building2 className="h-5 w-5 text-indigo-500" />, text: 'Client presentation tools' },
          { icon: <Pencil className="h-5 w-5 text-purple-500" />, text: 'Branding options' }
        ];
      case 'personal':
        return [
          { icon: <Building2 className="h-5 w-5 text-blue-500" />, text: 'Project management templates' },
          { icon: <Ruler className="h-5 w-5 text-indigo-500" />, text: 'Construction tools' },
          { icon: <FileText className="h-5 w-5 text-purple-500" />, text: 'Progress tracking' }
        ];
      case 'draw':
        return [
          { icon: <Ruler className="h-5 w-5 text-blue-500" />, text: 'Measurement templates' },
          { icon: <PenTool className="h-5 w-5 text-indigo-500" />, text: 'Field capture tools' },
          { icon: <FileText className="h-5 w-5 text-purple-500" />, text: 'Organization systems' }
        ];
      case 'estimate':
        return [
          { icon: <BadgeDollarSign className="h-5 w-5 text-blue-500" />, text: 'Estimation templates' },
          { icon: <FileText className="h-5 w-5 text-indigo-500" />, text: 'Proposal generators' },
          { icon: <Pencil className="h-5 w-5 text-purple-500" />, text: 'Costing tools' }
        ];
      default:
        return [
          { icon: <Sparkles className="h-5 w-5 text-blue-500" />, text: 'Custom templates' },
          { icon: <PenTool className="h-5 w-5 text-indigo-500" />, text: 'Design tools' },
          { icon: <FileText className="h-5 w-5 text-green-500" />, text: 'Resources' }
        ];
    }
  };

  const getRoleItems = (optionId: string) => {
    switch (optionId) {
      case 'construction':
        return [
          { icon: <HardHat className="h-5 w-5 text-orange-500" />, text: 'Construction toolset' },
          { icon: <Building2 className="h-5 w-5 text-blue-500" />, text: 'Site management' },
          { icon: <BadgeDollarSign className="h-5 w-5 text-green-500" />, text: 'Materials estimation' }
        ];
      case 'designer':
        return [
          { icon: <Pencil className="h-5 w-5 text-purple-500" />, text: 'Design toolset' },
          { icon: <PenTool className="h-5 w-5 text-indigo-500" />, text: 'Presentation features' },
          { icon: <FileText className="h-5 w-5 text-blue-500" />, text: 'Client deliverables' }
        ];
      case 'engineer':
        return [
          { icon: <FlaskConical className="h-5 w-5 text-blue-500" />, text: 'Technical toolset' },
          { icon: <RulerIcon className="h-5 w-5 text-indigo-500" />, text: 'Precision measurements' },
          { icon: <FileText className="h-5 w-5 text-green-500" />, text: 'Specification documents' }
        ];
      case 'other':
        return [
          { icon: <Sparkles className="h-5 w-5 text-blue-500" />, text: 'General toolset' },
          { icon: <PenTool className="h-5 w-5 text-indigo-500" />, text: 'Flexible workflows' },
          { icon: <FileText className="h-5 w-5 text-green-500" />, text: 'Adaptable templates' }
        ];
      default:
        return [
          { icon: <Sparkles className="h-5 w-5 text-blue-500" />, text: 'Role-specific tools' },
          { icon: <PenTool className="h-5 w-5 text-indigo-500" />, text: 'Custom controls' },
          { icon: <FileText className="h-5 w-5 text-green-500" />, text: 'Specialized resources' }
        ];
    }
  };

  const getProjectItems = (optionId: string) => {
    switch (optionId) {
      case 'residential':
        return [
          { icon: <Building2 className="h-5 w-5 text-blue-500" />, text: 'Home shape libraries' },
          { icon: <Ruler className="h-5 w-5 text-indigo-500" />, text: 'Residential measurements' },
          { icon: <FileText className="h-5 w-5 text-green-500" />, text: 'Interior elements' }
        ];
      case 'commercial':
        return [
          { icon: <Building2 className="h-5 w-5 text-blue-500" />, text: 'Commercial shape libraries' },
          { icon: <FileText className="h-5 w-5 text-indigo-500" />, text: 'Office layouts' },
          { icon: <Ruler className="h-5 w-5 text-green-500" />, text: 'Business specifications' }
        ];
      case 'landscape':
        return [
          { icon: <Mountain className="h-5 w-5 text-green-500" />, text: 'Landscape shape libraries' },
          { icon: <PenTool className="h-5 w-5 text-blue-500" />, text: 'Outdoor elements' },
          { icon: <Ruler className="h-5 w-5 text-indigo-500" />, text: 'Terrain tools' }
        ];
      default:
        return [
          { icon: <Sparkles className="h-5 w-5 text-blue-500" />, text: 'Project-specific shapes' },
          { icon: <PenTool className="h-5 w-5 text-indigo-500" />, text: 'Custom elements' },
          { icon: <FileText className="h-5 w-5 text-green-500" />, text: 'Specialized components' }
        ];
    }
  };

  const getNeedItems = (optionId: string) => {
    switch (optionId) {
      case 'measuring':
        return [
          { icon: <Ruler className="h-5 w-5 text-blue-500" />, text: 'Measurement tutorials' },
          { icon: <FileText className="h-5 w-5 text-indigo-500" />, text: 'Field guides' },
          { icon: <Sparkles className="h-5 w-5 text-green-500" />, text: 'Accuracy tips' }
        ];
      case 'drawing':
        return [
          { icon: <PenTool className="h-5 w-5 text-purple-500" />, text: 'Drawing tutorials' },
          { icon: <FileText className="h-5 w-5 text-blue-500" />, text: 'Design guidelines' },
          { icon: <Sparkles className="h-5 w-5 text-indigo-500" />, text: 'Professional tips' }
        ];
      case 'estimating':
        return [
          { icon: <BadgeDollarSign className="h-5 w-5 text-green-500" />, text: 'Estimation guides' },
          { icon: <FileText className="h-5 w-5 text-blue-500" />, text: 'Cost calculation tips' },
          { icon: <Sparkles className="h-5 w-5 text-indigo-500" />, text: 'Budgeting resources' }
        ];
      case 'proposal':
        return [
          { icon: <FileText className="h-5 w-5 text-blue-500" />, text: 'Proposal templates' },
          { icon: <Pencil className="h-5 w-5 text-purple-500" />, text: 'Client presentation tips' },
          { icon: <Sparkles className="h-5 w-5 text-green-500" />, text: 'Winning strategies' }
        ];
      default:
        return [
          { icon: <Sparkles className="h-5 w-5 text-blue-500" />, text: 'Help content' },
          { icon: <FileText className="h-5 w-5 text-indigo-500" />, text: 'Quick guides' },
          { icon: <PenTool className="h-5 w-5 text-green-500" />, text: 'Tutorial videos' }
        ];
    }
  };

  const content = getContent();

  return (
    <div className="absolute right-0 top-20 md:-right-64 md:top-0 w-60 md:w-60 bg-white p-4 rounded-lg shadow-lg border border-blue-100 z-10 animate-fade-in">
      <div className="flex items-center mb-2">
        <Sparkles className="h-4 w-4 text-yellow-500 mr-2 animate-pulse" />
        <h3 className="font-medium text-blue-600">{content.title}</h3>
      </div>
      <div className="space-y-2">
        {content.items.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center text-sm animate-fade-in" 
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {item.icon}
            <span className="ml-2 text-gray-700">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalizationPreview;
