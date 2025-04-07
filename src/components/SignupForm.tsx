
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { UserContext } from "@/App";
import { LucideUser, Mail, KeyRound, Apple, Github } from "lucide-react";

const SignupForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setUser({
        name,
        email,
        userGoal: '',
        userRole: '',
        projectType: '',
        urgentNeed: ''
      });
      setIsLoading(false);
      navigate('/onboarding');
    }, 800);
  };

  return (
    <div className="flex overflow-hidden rounded-xl shadow-xl bg-white">
      {/* Left side with features */}
      <div className="hidden md:block bg-gradient-to-br from-orange-50 to-orange-100 p-8 w-[280px]">
        <h3 className="text-xl font-semibold mb-6 text-gray-800">Create your account to:</h3>
        
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <div className="bg-orange-200 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-800">Sketch and save unlimited drawings</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-orange-200 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-800">Access to 2000+ free shapes</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-orange-200 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/>
                <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"/>
                <path d="M12 13v5"/>
                <path d="M8 13v5"/>
                <path d="M16 13v5"/>
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-800">Access advanced CAD tools from anywhere</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side with form */}
      <div className="p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Get Started with Arcsite</h2>
        
        <div className="space-y-4 mb-6">
          <Button variant="outline" className="w-full border-2 gap-2 justify-center py-5 h-auto font-medium" onClick={() => console.log("Apple login")}>
            <Apple size={18} /> Continue with Apple
          </Button>
          
          <Button variant="outline" className="w-full border-2 gap-2 justify-center py-5 h-auto font-medium" onClick={() => console.log("Google login")}>
            <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
              </g>
            </svg>
            Continue with Google
          </Button>
          
          <Button variant="outline" className="w-full border-2 gap-2 justify-center py-5 h-auto font-medium" onClick={() => console.log("SSO login")}>
            <Github size={18} /> Continue with SSO
          </Button>
        </div>
        
        <div className="relative mb-6">
          <Separator className="absolute top-1/2 w-full" />
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-gray-500">Or</span>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
            <div className="relative">
              <LucideUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                id="name" 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name" 
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="email" className="text-sm font-medium">Work Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com" 
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="password" className="text-sm font-medium">Password</Label>
            <div className="relative">
              <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a secure password" 
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 py-6 h-auto text-base font-medium"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Get Started"}
          </Button>
          
          <p className="text-center text-xs text-gray-500 mt-4">
            By registering, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
          </p>
        </form>
        
        <div className="mt-6 text-center text-sm">
          Already have an account? <a href="#" className="text-primary font-medium hover:underline">Log in</a>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
