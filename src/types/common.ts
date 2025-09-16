// Common shared types
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  github: string;
  live: string;
  category: 'web' | 'mobile' | 'desktop' | 'other';
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  current: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  description?: string;
  current: boolean;
}

export interface ContactFormInput {
  name: string;
  email: string;
  message: string;
}

export interface SubmitStatus {
  type: 'idle' | 'success' | 'error' | null;
  message: string;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

// Form field errors
export interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}
