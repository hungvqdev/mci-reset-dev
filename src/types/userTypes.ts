export interface User {
  id: number;
  company: string;
  first_name: string;
  last_name: string;
  email: string;
  is_active: boolean;
  is_admin: boolean;
  user_type: string;
}

export interface UserState {
  user: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}
