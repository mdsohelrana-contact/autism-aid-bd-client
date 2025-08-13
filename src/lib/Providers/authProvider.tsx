/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    district: string;
    postalCode: string;
  };
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => Promise<boolean>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("autism-aid-user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Failed to load user from localStorage:", error);
        localStorage.removeItem("autism-aid-user");
      }
    }

    // Create demo admin user if it doesn't exist
    const mockUsers = JSON.parse(
      localStorage.getItem("autism-aid-mock-users") || "[]"
    );
    const adminExists = mockUsers.find(
      (u: any) => u.email === "admin@autismaidbd.com"
    );
    if (!adminExists) {
      const adminUser = {
        id: "admin-1",
        email: "admin@autismaidbd.com",
        name: "Admin User",
        password: "admin123",
        createdAt: new Date().toISOString(),
      };
      mockUsers.push(adminUser);
      localStorage.setItem("autism-aid-mock-users", JSON.stringify(mockUsers));
    }

    setIsLoading(false);
  }, []);

  // Save user to localStorage whenever user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("autism-aid-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("autism-aid-user");
    }
  }, [user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock authentication - in real app, this would be an API call
    const mockUsers = JSON.parse(
      localStorage.getItem("autism-aid-mock-users") || "[]"
    );
    const foundUser = mockUsers.find(
      (u: any) => u.email === email && u.password === password
    );

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      toast.success("Login successful");
      setIsLoading(false);
      return true;
    } else {
      toast.error("Invalid email or password");
      setIsLoading(false);
      return false;
    }
  };

  const signup = async (
    email: string,
    password: string,
    name: string
  ): Promise<boolean> => {
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock user creation - in real app, this would be an API call
    const mockUsers = JSON.parse(
      localStorage.getItem("autism-aid-mock-users") || "[]"
    );

    // Check if user already exists
    if (mockUsers.find((u: any) => u.email === email)) {
      toast.error("User already exists");
      setIsLoading(false);
      return false;
    }

    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      createdAt: new Date().toISOString(),
    };

    // Save to mock database
    mockUsers.push({ ...newUser, password });
    localStorage.setItem("autism-aid-mock-users", JSON.stringify(mockUsers));

    setUser(newUser);
    toast.success("Signup successful");
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    toast.success("Logout successful");
  };

  const updateProfile = async (updates: Partial<User>): Promise<boolean> => {
    if (!user) return false;

    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);

    // Update in mock database
    const mockUsers = JSON.parse(
      localStorage.getItem("autism-aid-mock-users") || "[]"
    );
    const userIndex = mockUsers.findIndex((u: any) => u.id === user.id);
    if (userIndex !== -1) {
      mockUsers[userIndex] = { ...mockUsers[userIndex], ...updates };
      localStorage.setItem("autism-aid-mock-users", JSON.stringify(mockUsers));
    }

    toast.success("Profile updated successfully");
    setIsLoading(false);
    return true;
  };

  return (
    <AuthContext.Provider
      value={{ user, login, signup, logout, updateProfile, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
