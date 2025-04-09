import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '@/App';
import Tutorial from '@/components/Tutorial';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGrid, FileText, Calculator, BarChart3, Settings, User, BookOpen } from "lucide-react";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if no user exists
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user) return null;

  // Get project types based on user's selections
  const getRecommendedProjects = () => {
    if (user.projectType.includes('Residential')) {
      return [
        { name: "Modern House Floor Plan", type: "Residential", popular: true },
        { name: "Kitchen Renovation", type: "Residential", popular: false },
        { name: "Bathroom Remodel", type: "Residential", popular: false },
      ];
    } else if (user.projectType.includes('Commercial')) {
      return [
        { name: "Office Space Layout", type: "Commercial", popular: true },
        { name: "Retail Store Design", type: "Commercial", popular: false },
        { name: "Restaurant Floor Plan", type: "Commercial", popular: false },
      ];
    } else if (user.projectType.includes('Landscape')) {
      return [
        { name: "Garden Design", type: "Landscape", popular: true },
        { name: "Backyard Patio", type: "Landscape", popular: false },
        { name: "Swimming Pool Plan", type: "Landscape", popular: false },
      ];
    } else {
      return [
        { name: "Basic Floor Plan", type: "General", popular: true },
        { name: "Site Measurement", type: "General", popular: false },
        { name: "Simple Renovation", type: "General", popular: false },
      ];
    }
  };

  const handleCreateDrawing = () => {
    navigate('/drawing-board');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">Arcsite</h1>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome message */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, {user.name}!</h1>
          <p className="text-gray-600 mt-1">
            Let's help you accomplish {user.userGoal.toLowerCase()} for your {user.projectType.toLowerCase()} projects.
          </p>
        </div>

        {/* Tutorial based on urgent need */}
        <Tutorial urgentNeed={user.urgentNeed} />

        {/* Dashboard tabs */}
        <Tabs defaultValue="projects" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="projects" className="flex items-center">
              <LayoutGrid className="w-4 h-4 mr-2" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="drawings" className="flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Drawings
            </TabsTrigger>
            <TabsTrigger value="estimates" className="flex items-center">
              <Calculator className="w-4 h-4 mr-2" />
              Estimates
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center">
              <BarChart3 className="w-4 h-4 mr-2" />
              Reports
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Recommended Templates</CardTitle>
                  <CardDescription>
                    Templates relevant to your work
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {getRecommendedProjects().map((project, i) => (
                      <li key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded mr-3">
                            <FileText className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-sm">{project.name}</p>
                            <p className="text-xs text-gray-500">{project.type}</p>
                          </div>
                        </div>
                        {project.popular && (
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4">
                    View All Templates
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Start working on your projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start text-left" onClick={handleCreateDrawing}>
                      <FileText className="mr-2 h-4 w-4" />
                      New Project
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-left">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Browse Templates
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-left">
                      <Calculator className="mr-2 h-4 w-4" />
                      Create Estimate
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Learning Resources</CardTitle>
                  <CardDescription>
                    Guides to help you get started
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <h3 className="font-medium text-sm">Getting Started Guide</h3>
                      <p className="text-xs text-gray-500 mt-1">Learn the basics of Arcsite</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <h3 className="font-medium text-sm">Video Tutorials</h3>
                      <p className="text-xs text-gray-500 mt-1">Step-by-step video guides</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <h3 className="font-medium text-sm">Tips & Tricks</h3>
                      <p className="text-xs text-gray-500 mt-1">Advanced techniques for pro users</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="drawings" className="mt-6">
            <div className="bg-white p-12 rounded-lg shadow-sm text-center">
              <FileText className="h-12 w-12 mx-auto text-gray-400" />
              <h3 className="mt-4 text-lg font-medium">No drawings yet</h3>
              <p className="mt-2 text-gray-500">Create your first drawing to see it here</p>
              <Button className="mt-4" onClick={handleCreateDrawing}>Create New Drawing</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="estimates" className="mt-6">
            <div className="bg-white p-12 rounded-lg shadow-sm text-center">
              <Calculator className="h-12 w-12 mx-auto text-gray-400" />
              <h3 className="mt-4 text-lg font-medium">No estimates yet</h3>
              <p className="mt-2 text-gray-500">Create your first estimate to see it here</p>
              <Button className="mt-4">Create New Estimate</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="reports" className="mt-6">
            <div className="bg-white p-12 rounded-lg shadow-sm text-center">
              <BarChart3 className="h-12 w-12 mx-auto text-gray-400" />
              <h3 className="mt-4 text-lg font-medium">No reports yet</h3>
              <p className="mt-2 text-gray-500">Generate reports after creating projects</p>
              <Button className="mt-4">Learn About Reports</Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
