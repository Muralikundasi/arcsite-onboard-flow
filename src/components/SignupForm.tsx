
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
    <div className="w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="p-8 w-full">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Get Started with Arcsite</h2>
        
        <div className="space-y-5 mb-8">
          <Button variant="outline" className="w-full border-2 gap-2 justify-center py-6 h-auto text-lg font-medium" onClick={() => console.log("Apple login")}>
            <Apple size={20} /> Continue with Apple
          </Button>
          
          <Button variant="outline" className="w-full border-2 gap-2 justify-center py-6 h-auto text-lg font-medium" onClick={() => console.log("Google login")}>
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
              </g>
            </svg>
            Continue with Google
          </Button>
          
          <Button variant="outline" className="w-full border-2 gap-2 justify-center py-6 h-auto text-lg font-medium" onClick={() => console.log("SSO login")}>
            <Github size={20} /> Continue with SSO
          </Button>
        </div>
        
        <div className="relative mb-8">
          <Separator className="absolute top-1/2 w-full" />
          <div className="relative flex justify-center">
            <span className="bg-white px-6 text-base text-gray-500">Or</span>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base font-medium">Full Name</Label>
            <div className="relative">
              <LucideUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                id="name" 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name" 
                className="pl-12 py-6 text-lg h-auto"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-base font-medium">Work Email</Label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com" 
                className="pl-12 py-6 text-lg h-auto"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-base font-medium">Password</Label>
            <div className="relative">
              <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a secure password" 
                className="pl-12 py-6 text-lg h-auto"
                required
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 py-7 h-auto text-lg font-medium mt-4"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Get Started"}
          </Button>
          
          <p className="text-center text-sm text-gray-500 mt-6">
            By registering, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
          </p>
        </form>
        
        <div className="mt-8 text-center text-base">
          Already have an account? <a href="#" className="text-primary font-medium hover:underline">Log in</a>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
