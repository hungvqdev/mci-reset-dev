// apiTypes.ts
export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  user: {
    user_profile: any;
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
  };
  user_profile: {
    company: string;
  };
}

export interface AvailableFunctionsRequest {
  user_id: any;
}

export interface DetailFunction {
  id: number;
  created: string;
  code: string;
  title: string;
  link: string;
  user: number;
  category: number;
}

export interface AvailableFunctionsResponse {
  map(arg0: (mainItem: any, idx: number) => JSX.Element): import("react").ReactNode;
  title: string;
  detail_function_list: DetailFunction[];
  data: {
    id: number;
    created: string;
    title: string;
    user: number;
    detail_function_list: DetailFunction[];
  }[];
}

